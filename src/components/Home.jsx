import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  const categories = [
    {
      title: 'VINILOS & RELEASES',
      desc: 'Selección exclusiva en formato físico de Raw Techno, Tech House, House, Psytrance y Progressive.',
      icon: '🎛️',
      link: '/productos'
    },
    {
      title: 'CONSOLAS & MIXERS',
      desc: 'Equipamiento de alto rendimiento para club y estudio: Pioneer DJ, Allen & Heath y controladores.',
      icon: '🎚️',
      link: '/productos'
    },
    {
      title: 'AURICULARES DE MONITOREO',
      desc: 'Sennheiser, Audio-Technica y monitoreo profesional para DJs y productores exigentes.',
      icon: '🎧',
      link: '/productos'
    }
  ];

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.title}>WELCOME TO THE SOUND VAULT</h1>
        <p style={styles.subtitle}>
          BeatStore es el punto de encuentro de la cultura electrónica. Equipamiento profesional, sintetizadores y vinilos curados para DJs y productores.
        </p>
        <Link to="/productos" style={styles.ctaButton}>
          EXPLORAR CATÁLOGO COMPLETO →
        </Link>
      </section>

      {/* Categorías Destacadas */}
      <section style={styles.categoriesSection}>
        <h2 style={styles.sectionTitle}>CATEGORÍAS DE PRODUCTOS</h2>
        <div style={styles.grid}>
          {categories.map((cat, index) => (
            <div key={index} style={styles.card}>
              <span style={styles.cardIcon}>{cat.icon}</span>
              <h3 style={styles.cardTitle}>{cat.title}</h3>
              <p style={styles.cardDesc}>{cat.desc}</p>
              <Link to={cat.link} style={styles.cardLink}>Ver selección</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '2rem 1rem',
    color: '#fff'
  },
  hero: {
    textAlign: 'center',
    padding: '3.5rem 1.5rem',
    backgroundColor: '#12121c',
    borderRadius: '12px',
    border: '1px solid #232338',
    boxShadow: '0 4px 25px rgba(0, 255, 204, 0.05)',
    marginBottom: '3rem'
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '800',
    color: '#00ffcc',
    letterSpacing: '2px',
    marginBottom: '1.2rem',
    fontFamily: "'Syne', sans-serif",
    textShadow: '0 0 12px rgba(0, 255, 204, 0.3)',
    textTransform: 'uppercase'
  },
  subtitle: {
    fontSize: '1.05rem',
    color: '#b0b0c0',
    maxWidth: '680px',
    margin: '0 auto 2.2rem auto',
    lineHeight: '1.6',
    fontFamily: "'Space Grotesk', sans-serif"
  },
  ctaButton: {
    display: 'inline-block',
    backgroundColor: '#d800ff',
    color: '#fff',
    padding: '0.9rem 2rem',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: '700',
    letterSpacing: '1px',
    boxShadow: '0 0 18px rgba(216, 0, 255, 0.4)',
    fontFamily: "'Space Grotesk', sans-serif",
    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
  },
  categoriesSection: {
    textAlign: 'center'
  },
  sectionTitle: {
    fontSize: '1.6rem',
    fontWeight: '800',
    color: '#e0aaff',
    marginBottom: '2rem',
    letterSpacing: '2px',
    fontFamily: "'Syne', sans-serif"
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.5rem'
  },
  card: {
    backgroundColor: '#0e0e17',
    padding: '2rem 1.5rem',
    borderRadius: '10px',
    border: '1px solid #1f1f2e',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem'
  },
  cardIcon: {
    fontSize: '2.5rem'
  },
  cardTitle: {
    fontSize: '1.1rem',
    fontWeight: '700',
    color: '#00ffcc',
    margin: 0,
    fontFamily: "'Syne', sans-serif",
    letterSpacing: '1px'
  },
  cardDesc: {
    fontSize: '0.9rem',
    color: '#888',
    lineHeight: '1.5',
    margin: 0,
    fontFamily: "'Space Grotesk', sans-serif"
  },
  cardLink: {
    color: '#d800ff',
    textDecoration: 'none',
    fontWeight: '700',
    marginTop: '0.5rem',
    fontSize: '0.95rem',
    fontFamily: "'Space Grotesk', sans-serif"
  }
};

export default Home;