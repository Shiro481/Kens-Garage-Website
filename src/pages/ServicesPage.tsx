import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Mountain, CircleDot, Zap, Wrench, Shield, Cog } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import liftKitImage from '../assets/03d0de79a5b67930144f967b5d0d8e672b7be0b6.png';
import wheelsImage from '../assets/c2ff1eae2e44da03bea6809937e7c2c09c49bf7b.png';
import engineImage from '../assets/4515eec2e5039f6fef8ec15580c14efdf3f2f648.png';
import styles from './ServicesPage.module.css';

const services = [
  {
    id: 'lift-kits',
    number: '01',
    icon: Mountain,
    title: 'Lift Kits & Suspension',
    fullDescription: "Transform your vehicle's capability with our expert suspension upgrades. Whether you need additional ground clearance for off-road adventures or want to fit larger tires, our lift kit installations are engineered for performance and reliability.",
    features: ['Body lifts & suspension lifts', 'Coilovers & leaf springs', 'Heavy-duty shocks', 'Complete alignment service'],
    brands: ['Old Man Emu', 'ARB', 'Bilstein', 'Fox Racing', 'King Shocks'],
    startingPrice: 'Starting from ₱45,000',
    image: liftKitImage,
  },
  {
    id: 'wheels-tires',
    number: '02',
    icon: CircleDot,
    title: 'Wheels & Tires',
    fullDescription: 'Get the right combination of wheels and tires to match your driving style. From aggressive mud-terrains to versatile all-terrains, we help you choose and install the perfect setup for your adventures.',
    features: ['All-terrain & mud-terrain tires', 'Beadlock wheels', 'Custom fitment solutions', 'Fender flares & trimming'],
    brands: ['BFGoodrich', 'Toyo', 'Nitto', 'Method Race Wheels', 'Black Rhino'],
    startingPrice: 'Starting from ₱80,000',
    image: wheelsImage,
  },
  {
    id: 'engine-tuning',
    number: '03',
    icon: Zap,
    title: 'Engine Upgrades & Tuning',
    fullDescription: "Extract more power and efficiency from your engine with our professional tuning services. Our expert technicians use the latest technology to optimize your vehicle's performance while maintaining reliability.",
    features: ['ECU remapping & tuning', 'Cold air intake systems', 'Performance exhaust', 'Turbo & supercharger installs'],
    brands: ['K&N', 'Magnaflow', 'Borla', 'AFE Power', 'Banks Power'],
    startingPrice: 'Starting from ₱25,000',
    image: engineImage,
  },
  {
    id: 'armor-protection',
    number: '04',
    icon: Shield,
    title: 'Armor & Protection',
    fullDescription: 'Protect your investment with professional-grade armor. Our selection of bumpers, skid plates, and rock sliders are built to withstand the toughest Philippine terrain.',
    features: ['Steel & aluminum bumpers', 'Rock sliders & nerf bars', 'Skid plates & differential covers', 'Rooftop racks & cargo systems'],
    brands: ['ARB', 'Ironman 4x4', 'TJM', 'Rhino-Rack', 'Rival'],
    startingPrice: 'Starting from ₱35,000',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800',
  },
  {
    id: 'electrical',
    number: '05',
    icon: Cog,
    title: 'Electrical & Lighting',
    fullDescription: 'See better and go further with our electrical and lighting upgrades. From auxiliary lighting to dual battery systems, we ensure your vehicle is ready for extended off-road expeditions.',
    features: ['LED light bars & spotlights', 'Dual battery systems', 'Inverters & power management', 'Complete rewiring services'],
    brands: ['Rigid Industries', 'Baja Designs', 'Redarc', 'Optima', 'CTEK'],
    startingPrice: 'Starting from ₱15,000',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800',
  },
  {
    id: 'custom-builds',
    number: '06',
    icon: Wrench,
    title: 'Complete Custom Builds',
    fullDescription: "Dream it, and we'll build it. Our complete custom builds service handles everything from initial consultation to final delivery. We work with you to create a one-of-a-kind vehicle that matches your vision.",
    features: ['Full vehicle consultations', 'Custom fabrication work', 'Show-quality builds', 'Expedition & overland prep'],
    brands: ['Custom Solutions', 'OEM Parts', 'Aftermarket Leaders'],
    startingPrice: 'Custom quoted per project',
    image: 'https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=800',
  },
];

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.page}>
      <Navbar />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={styles.pageInner}
      >
        {/* ── Hero ── */}
        <div className={styles.hero}>
          <div className={styles.heroInner}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className={styles.heroTitle}>Our Services</h1>
              <div className={styles.heroDivider} />
              <p className={styles.heroSubtitle}>
                From simple upgrades to complete transformations, Ken's Garage offers comprehensive
                4WD customization services. Every project is handled with precision, passion, and
                decades of expertise.
              </p>
            </motion.div>
          </div>
        </div>

        {/* ── Services ── */}
        <div className={styles.servicesSection}>
          <div className={styles.servicesInner}>
            {services.map((service, index) => {
              const imageOnRight = index % 2 === 1;

              const imageBlock = (
                <div key="img" className={styles.imageBlock}>
                  {service.image.startsWith('http') ? (
                    <img
                      src={service.image}
                      alt={service.title}
                      className={styles.serviceImg}
                    />
                  ) : (
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className={styles.serviceImg}
                    />
                  )}
                  <div className={styles.serviceNumber}>{service.number}</div>
                </div>
              );

              const contentBlock = (
                <div key="content" className={styles.contentBlock}>
                  <div className={styles.contentTop}>
                    <service.icon className={styles.serviceIcon} strokeWidth={1.5} />
                    <h2 className={styles.serviceTitle}>{service.title}</h2>
                    <p className={styles.serviceDescription}>{service.fullDescription}</p>

                    {/* Features */}
                    <p className={styles.featuresLabel}>WHAT WE OFFER:</p>
                    <ul className={styles.featuresList}>
                      {service.features.map((feature, idx) => (
                        <li key={idx} className={styles.featureItem}>
                          <span className={styles.featureArrow}>▸</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Brands */}
                    <div className={styles.brandsSection}>
                      <p className={styles.brandsLabel}>TRUSTED BRANDS:</p>
                      <div className={styles.brandTags}>
                        {service.brands.map((brand, idx) => (
                          <span key={idx} className={styles.brandTag}>{brand}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className={styles.contentBottom}>
                    <span className={styles.price}>{service.startingPrice}</span>
                    <Link to="/#quote" className={styles.quoteBtn}>Get a Quote</Link>
                  </div>
                </div>
              );

              return (
                <React.Fragment key={service.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={styles.serviceRow}
                  >
                    {imageOnRight ? [contentBlock, imageBlock] : [imageBlock, contentBlock]}
                  </motion.div>
                  {index < services.length - 1 && (
                    <div className={styles.serviceDivider} />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className={styles.ctaSection}>
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>Don't See What You Need?</h2>
            <p className={styles.ctaSubtitle}>
              We handle custom projects of all sizes. Contact us to discuss your specific requirements.
            </p>
            <Link to="/#contact" className={styles.ctaBtn}>Contact Us</Link>
          </div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
}
