import React from 'react';
import { Link } from 'react-router-dom';

function Item({ id, title, price, category, image, description }) {
  return (
    <div style={styles.card}>
      <img src={image} alt={title} style={styles.image} />
      <div style={styles.content}>
        <span style={styles.badge}>{category}</span>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.description}>{description}</p>
        <p style={styles.price}>${price?.toLocaleString() ?? 0}</p>
        <Link to={`/producto/${id}`} style={styles.button}>
          Ver detalle
        </Link>
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: '#12121c',
    borderRadius: '10px',
    border: '1px solid #232338',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    width: '260px',
    color: '#fff'
  },
  image: { width: '100%', height: '160px', objectFit: 'cover' },
  content: { padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 },
  badge: { alignSelf: 'flex-start', backgroundColor: '#e94560', color: '#fff', fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '12px' },
  title: { margin: 0, fontSize: '1rem', color: '#fff' },
  description: { fontSize: '0.85rem', color: '#aaa', margin: 0, flex: 1 },
  price: { fontSize: '1.2rem', fontWeight: 'bold', color: '#00ffcc', margin: '0.5rem 0 0 0' },
  button: { 
    backgroundColor: '#00ffcc', 
    color: '#000', 
    textDecoration: 'none', 
    textAlign: 'center',
    padding: '0.5rem', 
    borderRadius: '5px', 
    marginTop: '0.5rem', 
    fontWeight: 'bold' 
  }
};

export default Item;