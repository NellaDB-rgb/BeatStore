import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

function Layout({ children }) {
  return (
    <div style={styles.layout}>
      <Header />
      <main style={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}

const styles = {
  layout: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#050508'
  },
  main: {
    flex: 1
  }
};

export default Layout;
