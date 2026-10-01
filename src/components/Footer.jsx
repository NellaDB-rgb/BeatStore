import React from 'react';

export const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.crewSection}>
        <h4 style={styles.crewTitle}>BEATSTORE CREW</h4>
        <div style={styles.crewGrid}>
          <div style={styles.memberCard}>
            <p style={styles.memberName}>Manuelle Tessorello</p>
            <span style={styles.memberRole}>Head Resident & Curator</span>
          </div>
          <div style={styles.memberCard}>
            <p style={styles.memberName}>Deb95</p>
            <span style={styles.memberRole}>Sound Engineer & Gear Specialist</span>
          </div>
          <div style={styles.memberCard}>
            <p style={styles.memberName}>Leo Morlacca</p>
            <span style={styles.memberRole}>Vinyl Selector & Event Host</span>
          </div>
        </div>
      </div>
      <p style={styles.copy}>© 2026 BeatStore - Electronic Music & Gear. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#07070a',
    borderTop: '1px solid #1f1f2e',
    padding: '2rem',
    color: '#aaa',
    marginTop: 'auto'
  },
  crewSection: { textAlign: 'center', marginBottom: '1.5rem' },
  crewTitle: { color: '#00ffcc', letterSpacing: '2px', marginBottom: '1rem' },
  crewGrid: { display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' },
  memberCard: { backgroundColor: '#12121c', padding: '0.8rem 1.5rem', borderRadius: '8px', border: '1px solid #232338' },
  memberName: { color: '#fff', fontWeight: 'bold', margin: 0 },
  memberRole: { fontSize: '0.8rem', color: '#e94560' },
  copy: { textAlign: 'center', fontSize: '0.85rem', margin: 0, color: '#666' }
};

export default Footer;
