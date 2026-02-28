import React, { useState } from 'react';
import { CheckCircle, Clock, Shield, DollarSign, Headphones } from 'lucide-react';
import { toast } from 'sonner';
import styles from './QuoteForm.module.css';

const trustCues = [
  { icon: CheckCircle, text: 'Free consultation & quote' },
  { icon: Clock, text: 'Response within 24 hours' },
  { icon: Shield, text: 'All work guaranteed' },
  { icon: DollarSign, text: 'Transparent pricing' },
  { icon: Headphones, text: 'Expert advice included' },
];

const services = ['Lift Kit Installation', 'Wheels & Tires Package', 'Engine Upgrade & Tuning', 'Multiple Services', 'Custom Build Consultation'];

export default function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ firstName: '', lastName: '', phone: '', email: '', make: '', model: '', year: '', service: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    toast.success("Quote request submitted! We'll contact you within 24 hours.");
    setFormData({ firstName: '', lastName: '', phone: '', email: '', make: '', model: '', year: '', service: '', message: '' });
  };

  return (
    <div id="quote" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.layout}>
          <div>
            <h2 className={styles.infoTitle}>Get a Free<br />Quote</h2>
            <p className={styles.infoText}>Tell us about your vehicle and customization goals. Our team will get back to you with a detailed quote and recommendations.</p>
            <div className={styles.trustList}>
              {trustCues.map((cue, i) => (
                <div key={i} className={styles.trustItem}>
                  <cue.icon className={styles.trustIcon} />
                  <span className={styles.trustText}>{cue.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className={styles.formBox}>
              <div className={styles.accentBar} />
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.row2}>
                  <div><label className={styles.label}>First Name *</label><input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required className={styles.input} /></div>
                  <div><label className={styles.label}>Last Name *</label><input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required className={styles.input} /></div>
                </div>
                <div className={styles.row2}>
                  <div><label className={styles.label}>Phone (PH) *</label><input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+63 XXX XXX XXXX" required className={styles.input} /></div>
                  <div><label className={styles.label}>Email *</label><input type="email" name="email" value={formData.email} onChange={handleChange} required className={styles.input} /></div>
                </div>
                <div className={styles.row3}>
                  <div><label className={styles.label}>Vehicle Make *</label><input type="text" name="make" value={formData.make} onChange={handleChange} placeholder="e.g., Toyota" required className={styles.input} /></div>
                  <div><label className={styles.label}>Model *</label><input type="text" name="model" value={formData.model} onChange={handleChange} placeholder="e.g., Hilux" required className={styles.input} /></div>
                  <div><label className={styles.label}>Year *</label><input type="text" name="year" value={formData.year} onChange={handleChange} placeholder="e.g., 2022" required className={styles.input} /></div>
                </div>
                <div className={styles.fieldFull}>
                  <label className={styles.label}>Service Interested In *</label>
                  <select name="service" value={formData.service} onChange={handleChange} required className={styles.select}>
                    <option value="">Select a service...</option>
                    {services.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div className={styles.fieldFull}>
                  <label className={styles.label}>Additional Details</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Tell us more about your project..." className={styles.textarea} />
                </div>
                <button type="submit" disabled={isSubmitting} className={`${styles.submitBtn} ${isSubmitting ? styles.submitBtnDisabled : ''}`}>
                  {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}