import { Instagram, Phone, MessageCircle } from 'lucide-react';
import { CONTACT_DETAILS } from '../constants';

const Footer = () => {
  return (
    <footer className="footer-pad" style={{
      backgroundColor: 'var(--color-navy)',
      color: 'var(--color-white)',
      marginTop: 'auto'
    }}>
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.8rem',
          letterSpacing: '3px',
          color: 'var(--color-white)',
          marginBottom: '1rem'
        }}>
          AZAR
        </h2>
        <p style={{
          color: 'rgba(255,255,255,0.7)',
          maxWidth: '400px',
          marginBottom: '2rem',
          fontSize: '0.9rem'
        }}>
          Crafting unforgettable olfactory experiences. The signature of elegance.
        </p>

        <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '3rem' }}>
          <a href={CONTACT_DETAILS.instagramUrl} target="_blank" rel="noopener noreferrer"
            style={{ color: 'var(--color-gold)', transition: 'color 0.3s' }}
            onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
            onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-gold)'}
          >
            <Instagram size={24} />
          </a>
          <a href={`https://wa.me/${CONTACT_DETAILS.whatsappNumber}`} target="_blank" rel="noopener noreferrer"
            style={{ color: 'var(--color-gold)', transition: 'color 0.3s' }}
            onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
            onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-gold)'}
          >
            <MessageCircle size={24} />
          </a>
          <a href={`tel:${CONTACT_DETAILS.phone}`}
            style={{ color: 'var(--color-gold)', transition: 'color 0.3s' }}
            onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
            onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-gold)'}
          >
            <Phone size={24} />
          </a>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          width: '100%',
          paddingTop: '2rem',
          fontSize: '0.8rem',
          color: 'rgba(255,255,255,0.5)'
        }}>
          <p>&copy; {new Date().getFullYear()} Azar Perfumes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
