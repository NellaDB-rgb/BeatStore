import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);
  const totalQuantity = getTotalQuantity();

  return (
    <Link to="/carrito" style={styles.widget}>
      <span style={styles.icon}>🛒</span>
      {totalQuantity > 0 && (
        <span style={styles.badge}>{totalQuantity}</span>
      )}
    </Link>
  );
};

const styles = {
  widget: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.3rem',
    textDecoration: 'none',
    color: '#fff',
    backgroundColor: '#161625',
    padding: '0.4rem 0.8rem',
    borderRadius: '20px',
    border: '1px solid #232338'
  },
  icon: { fontSize: '1.2rem' },
  badge: {
    backgroundColor: '#e94560',
    color: '#fff',
    borderRadius: '50%',
    padding: '0.1rem 0.5rem',
    fontSize: '0.8rem',
    fontWeight: 'bold'
  }
};