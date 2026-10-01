import React, { useState } from 'react';
import FormProducto from './FormProducto';

export const FormProductoContainer = () => {
  const [form, setForm] = useState({
    title: '',
    price: '',
    category: '',
    image: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Producto registrado:', form);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);

    setForm({ title: '', price: '', category: '', image: '' });
  };

  return (
    <FormProducto
      form={form}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      submitted={submitted}
    />
  );
};

export default FormProductoContainer;