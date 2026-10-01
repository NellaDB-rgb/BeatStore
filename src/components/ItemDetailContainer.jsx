import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function ItemDetailContainer() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    fetch('/productos.json')
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === parseInt(id));
        setProduct(found);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error al cargar detalle:', err);
        setLoading(false);
      });
  }, [id]);

  const handleAdd = () => {
    if (product) {
      addToCart(product, quantity);
      setAdded(true);
    }
  };

  if (loading) return <p style={styles.center}>Cargando detalle del producto...</p>;
  if (!product) return <p style={styles.center}>Producto no encontrado</p>;

  return (
    <div style={styles.container}>
      <img src={product.image} alt={product.title} style={styles.image} />
      <div style={styles.info}>
        <span style={styles.badge}>{product.category}</span>
        <h2>{product.title}</h2>
        <p style={styles.description}>{product.description}</p>
        <p style={styles.price}>${product.price?.toLocaleString() ?? 0}</p>
        
        {!added ? (
          <div style={styles.actions}>
            <div style={styles.counter}>
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} style={styles.btnCount}>-</button>
              <span style={styles.qty}>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} style={styles.btnCount}>+</button>
            </div>
            <button onClick={handleAdd} style={styles.button}>Agregar al Carrito</button>
          </div>
        ) : (
          <div style={styles.addedContainer}>
            <p style={{ color: '#00ffcc', margin: 0 }}>¡Producto agregado con éxito!</p>
            <Link to="/carrito" style={styles.cartBtn}>Ir al Carrito 🛒</Link>
          </div>
        )}

        <Link to="/productos" style={styles.backLink}>← Volver al catálogo</Link>
      </div>
    </div>
  );
}

const styles = {
  container: { display: 'flex', gap: '2rem', maxWidth: '900px', margin: '2rem auto', padding: '2rem', backgroundColor: '#12121c', borderRadius: '10px', border: '1px solid #232338', color: '#fff', flexWrap: 'wrap' },
  image: { width: '350px', height: '300px', objectFit: 'cover', borderRadius: '8px' },
  info: { flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' },
  badge: { alignSelf: 'flex-start', backgroundColor: '#e94560', color: '#fff', fontSize: '0.8rem', padding: '0.2rem 0.6rem', borderRadius: '12px' },
  description: { color: '#aaa', lineHeight: '1.5' },
  price: { fontSize: '1.8rem', fontWeight: 'bold', color: '#00ffcc' },
  actions: { display: 'flex', gap: '1rem', alignItems: 'center' },
  counter: { display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#1a1a2e', padding: '0.3rem 0.6rem', borderRadius: '5px' },
  btnCount: { backgroundColor: '#232338', color: '#fff', border: 'none', width: '25px', height: '25px', borderRadius: '3px', cursor: 'pointer', fontWeight: 'bold' },
  qty: { fontSize: '1.1rem', padding: '0 0.5rem' },
  button: { backgroundColor: '#00ffcc', color: '#000', border: 'none', padding: '0.6rem 1.2rem', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' },
  addedContainer: { display: 'flex', flexDirection: 'column', gap: '0.5rem' },
  cartBtn: { backgroundColor: '#e94560', color: '#fff', textDecoration: 'none', padding: '0.6rem 1.2rem', borderRadius: '5px', fontWeight: 'bold', display: 'inline-block', textAlign: 'center' },
  backLink: { color: '#00ffcc', textDecoration: 'none', marginTop: '1rem', display: 'inline-block' },
  center: { textAlign: 'center', color: '#fff', padding: '3rem' }
};

export default ItemDetailContainer;