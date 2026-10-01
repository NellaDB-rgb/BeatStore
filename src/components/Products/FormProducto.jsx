import React from 'react';

export const FormProducto = ({ form, handleChange, handleSubmit, submitted }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>AGREGAR NUEVO PRODUCTO</h2>
      <p style={styles.subtitle}>Carga de ítems al catálogo de BeatStore</p>

      {submitted && <div style={styles.successMessage}>✓ Producto cargado/simulado con éxito</div>}

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.field}>
          <label style={styles.label}>Nombre del Producto / Track</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Ej: Pioneer DJM-900NXS2"
            required
            style={styles.input}
          />
        </div>

        <div style={styles.field}>
          <label style={styles.label}>Precio (USD)</label>
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Ej: 2199"
            required
            style={styles.input}
          />
        </div>

        <div style={styles.field}>
          <label style={styles.label}>Categoría</label>
          <select name="category" value={form.category} onChange={handleChange} required style={styles.input}>
            <option value="">Seleccionar categoría...</option>
            <option value="vinilos">Vinilos & Releases</option>
            <option value="consolas">Consolas & Mixers</option>
            <option value="auriculares">Auriculares</option>
          </select>
        </div>

        <div style={styles.field}>
          <label style={styles.label}>URL de la Imagen</label>
          <input
            type="url"
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="https://..."
            required
            style={styles.input}
          />
        </div>

        <button type="submit" style={styles.button}>CARGAR PRODUCTO →</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '550px',
    margin: '2rem auto',
    padding: '2.5rem',
    backgroundColor: '#12121c',
    borderRadius: '12px',
    border: '1px solid #232338',
    color: '#fff'
  },
  title: {
    color: '#00ffcc',
    fontSize: '1.8rem',
    fontFamily: "'Syne', sans-serif",
    marginBottom: '0.4rem',
    textAlign: 'center'
  },
  subtitle: {
    color: '#888',
    fontSize: '0.9rem',
    fontFamily: "'Space Grotesk', sans-serif",
    marginBottom: '2rem',
    textAlign: 'center'
  },
  successMessage: {
    backgroundColor: 'rgba(0, 255, 204, 0.1)',
    border: '1px solid #00ffcc',
    color: '#00ffcc',
    padding: '0.8rem',
    borderRadius: '6px',
    textAlign: 'center',
    marginBottom: '1.5rem',
    fontFamily: "'Space Grotesk', sans-serif"
  },
  form: { display: 'flex', flexDirection: 'column', gap: '1.2rem' },
  field: { display: 'flex', flexDirection: 'column', gap: '0.4rem' },
  label: { fontSize: '0.85rem', color: '#e0aaff', fontFamily: "'Space Grotesk', sans-serif", fontWeight: '600' },
  input: {
    backgroundColor: '#0a0a0f',
    border: '1px solid #232338',
    borderRadius: '6px',
    padding: '0.75rem',
    color: '#fff',
    fontSize: '0.95rem',
    fontFamily: "'Space Grotesk', sans-serif"
  },
  button: {
    backgroundColor: '#d800ff',
    color: '#fff',
    border: 'none',
    padding: '0.9rem',
    borderRadius: '6px',
    fontWeight: '700',
    fontSize: '0.95rem',
    fontFamily: "'Space Grotesk', sans-serif",
    cursor: 'pointer',
    marginTop: '1rem',
    boxShadow: '0 0 15px rgba(216, 0, 255, 0.4)'
  }
};

export default FormProducto;