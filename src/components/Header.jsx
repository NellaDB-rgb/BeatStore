import React from 'react';
import { Link } from 'react-router-dom';
import { CartWidget } from './CartWidget';

export const Header = () => {
  return (
    <header style={styles.header}>
      <style>{`
        @keyframes neonBeat {
          0% {
            transform: scale(1);
            text-shadow: 0 0 4px #d800ff, 0 0 10px #d800ff, 0 0 20px #b5179e;
            -webkit-text-stroke: 1.5px #d800ff;
          }
          50% {
            transform: scale(1.03);
            text-shadow: 0 0 8px #d800ff, 0 0 20px #d800ff, 0 0 35px #e0aaff, 0 0 50px #b5179e;
            -webkit-text-stroke: 2px #e0aaff;
          }
          100% {
            transform: scale(1);
            text-shadow: 0 0 4px #d800ff, 0 0 10px #d800ff, 0 0 20px #b5179e;
            -webkit-text-stroke: 1.5px #d800ff;
          }
        }

        .neon-logo-text {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 2.1rem;
          letter-spacing: 4px;
          color: #050508;
          -webkit-text-stroke: 1.5px #d800ff;
          text-shadow: 0 0 5px #d800ff, 0 0 12px #d800ff, 0 0 25px #b5179e;
          animation: neonBeat 1.5s infinite alternate ease-in-out;
          margin: 0;
          display: inline-block;
        }
      `}</style>

      <div style={styles.logo}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h1 className="neon-logo-text">BEATSTORE</h1>
        </Link>
      </div>

      <nav style={styles.nav}>
  <Link to="/" style={styles.link}>Inicio</Link>
  <Link to="/productos" style={styles.link}>Productos</Link>
  <Link to="/agregar-producto" style={styles.link}>Cargar Producto</Link>
  <CartWidget />
</nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#0a0a0f',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 2px 10px rgba(216, 0, 255, 0.15)',
    borderBottom: '1px solid #1f1f2e'
  },
  logo: { display: 'flex', alignItems: 'center' },
  nav: { display: 'flex', gap: '1.5rem', alignItems: 'center' },
  link: { 
    color: '#ffffff', 
    textDecoration: 'none', 
    fontWeight: '500', 
    fontSize: '0.95rem',
    fontFamily: 'Space Grotesk, sans-serif'
  }
};

export default Header;