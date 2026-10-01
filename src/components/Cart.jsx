import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function Cart() {
  const { cart, removeFromCart, clearCart, getTotalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div style={styles.container}>
        <h2>🛒 Tu carrito está vacío</h2>
        <p style={{ color: '#aaa' }}>No tenés productos seleccionados.</p>
        <Link to="/productos" style={styles.link}>Ir a ver productos</Link>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2>🛒 Detalle de tu Carrito</h2>
      <div style={styles.list}>
        {cart.map((item) => (
          <div key={item.id} style={styles.itemCard}>
            <img src={item.image} alt={item.title} style={styles.itemImg} />
            <div style={{ flex: 1 }}>
              <h4 style={{ margin: 0 }}>{item.title}</h4>
              <p style={{ margin: '0.3rem 0', color: '#aaa' }}>
                Cantidad: {item.quantity} | Precio unitario: ${item.price.toLocaleString()}
              </p>
            </div>
            <p style={styles.subtotal}>${(item.price * item.quantity).toLocaleString()}</p>
            <button onClick={() => removeFromCart(item.id)} style={styles.deleteBtn}>❌</button>
          </div>
        ))}
      </div>

      <div style={styles.footer}>
        <h3>Total: <span style={{ color: '#00ffcc' }}>${getTotalPrice().toLocaleString()}</span></h3>
        <div style={styles.btnGroup}>
          <button onClick={clearCart} style={styles.clearBtn}>Vaciar Carrito</button>
          <button style={styles.checkoutBtn}>Finalizar Compra</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: { maxWidth: '800px', margin: '2rem auto', padding: '2rem', color: '#fff' },
  list: { display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' },
  itemCard: { display: 'flex', alignItems: 'center', gap: '1rem', backgroundColor: '#12121c', padding: '1rem', borderRadius: '8px', border: '1px solid #232338' },
  itemImg: { width: '60px', height: '60px', objectFit: 'cover', borderRadius: '5px' },
  subtotal: { fontSize: '1.2rem', fontWeight: 'bold', color: '#00ffcc', margin: '0 1rem' },
  deleteBtn: { backgroundColor: 'transparent', border: 'none', cursor: 'pointer', fontSize: '1.1rem' },
  footer: { marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid #232338', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' },
  btnGroup: { display: 'flex', gap: '1rem' },
  clearBtn: { backgroundColor: '#232338', color: '#fff', border: 'none', padding: '0.6rem 1.2rem', borderRadius: '5px', cursor: 'pointer' },
  checkoutBtn: { backgroundColor: '#00ffcc', color: '#000', border: 'none', padding: '0.6rem 1.2rem', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' },
  link: { color: '#00ffcc', textDecoration: 'none', fontWeight: 'bold', marginTop: '1rem', display: 'inline-block' }
};

export default Cart;