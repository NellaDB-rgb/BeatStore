import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/productos.json')
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error al cargar productos:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem', color: '#00ffcc', fontFamily: "'Syne', sans-serif" }}>
        <h2>CARGANDO TRACKS Y GEAR...</h2>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      {greeting && <h2 style={styles.greeting}>{greeting}</h2>}

      <div style={styles.grid}>
        {items.map((prod) => (
          <div key={prod.id} style={styles.card}>
            <div style={styles.imageContainer}>
              <img src={prod.image} alt={prod.title} style={styles.image} />
              <span style={styles.badge}>{prod.category}</span>
            </div>
            <div style={styles.cardBody}>
              <h3 style={styles.cardTitle}>{prod.title}</h3>
              <p style={styles.cardPrice}>${prod.price} USD</p>
              <Link to={`/producto/${prod.id}`} style={styles.detailButton}>
                VER DETALLE →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem 1rem'
  },
  greeting: {
    fontSize: '2rem',
    fontWeight: '800',
    color: '#00ffcc',
    marginBottom: '2.5rem',
    fontFamily: "'Syne', sans-serif",
    letterSpacing: '2px',
    textTransform: 'uppercase',
    textShadow: '0 0 10px rgba(0, 255, 204, 0.35)',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
    gap: '2rem'
  },
  card: {
    backgroundColor: '#12121c',
    borderRadius: '10px',
    overflow: 'hidden',
    border: '1px solid #232338',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: '220px',
    backgroundColor: '#0a0a0f'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  badge: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: 'rgba(5, 5, 8, 0.85)',
    color: '#d800ff',
    border: '1px solid #d800ff',
    padding: '0.25rem 0.6rem',
    borderRadius: '4px',
    fontSize: '0.75rem',
    fontWeight: '700',
    fontFamily: "'Space Grotesk', sans-serif",
    textTransform: 'uppercase'
  },
  cardBody: {
    padding: '1.2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8rem',
    flex: 1,
    justifyContent: 'space-between'
  },
  cardTitle: {
    fontSize: '1.05rem',
    fontWeight: '700',
    color: '#ffffff',
    margin: 0,
    fontFamily: "'Syne', sans-serif",
    lineHeight: '1.3'
  },
  cardPrice: {
    fontSize: '1.2rem',
    fontWeight: '700',
    color: '#00ffcc',
    margin: 0,
    fontFamily: "'Space Grotesk', sans-serif"
  },
  detailButton: {
    display: 'block',
    textAlign: 'center',
    backgroundColor: 'transparent',
    color: '#d800ff',
    border: '1px solid #d800ff',
    padding: '0.6rem 1rem',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: '700',
    fontSize: '0.85rem',
    fontFamily: "'Space Grotesk', sans-serif",
    letterSpacing: '1px'
  }
};

export default ItemListContainer;