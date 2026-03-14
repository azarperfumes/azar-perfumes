import { Phone, MessageCircle, Instagram, X } from 'lucide-react';
import { useEffect } from 'react';
import { CONTACT_DETAILS } from '../constants';

interface OrderPopupProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
}

const OrderPopup = ({ isOpen, onClose, productName }: OrderPopupProps) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  const orderMessage = `Hi, I would like to order the ${productName} perfume.`;
  const whatsappUrl = `https://wa.me/${CONTACT_DETAILS.whatsappNumber}?text=${encodeURIComponent(orderMessage)}`;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(10, 17, 40, 0.6)',
      backdropFilter: 'blur(5px)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
      animation: 'fadeIn 0.3s ease'
    }} onClick={onClose}>
      <div style={{
        backgroundColor: 'var(--color-cream)',
        padding: '2.5rem',
        borderRadius: 'var(--radius-lg)',
        width: '90%',
        maxWidth: '400px',
        position: 'relative',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        transform: 'translateY(0)',
        animation: 'slideUpFade 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
      }} onClick={e => e.stopPropagation()}>

        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            color: 'var(--color-text-light)',
            padding: '0.5rem'
          }}
        >
          <X size={20} />
        </button>

        <div className="text-center" style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Complete Your Order</h3>
          <p style={{ color: 'var(--color-text-light)', fontSize: '0.9rem' }}>
            Choose how you would like to connect with us to order <strong>{productName}</strong>.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
            className="order-option"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1rem',
              backgroundColor: 'var(--color-navy)',
              color: 'white',
              borderRadius: 'var(--radius-md)',
              textDecoration: 'none',
              fontWeight: 500,
              transition: 'transform var(--transition-fast), box-shadow var(--transition-fast)'
            }}
          >
            <MessageCircle size={24} />
            <span style={{ flex: 1, textAlign: 'center' }}>Order via WhatsApp</span>
          </a>

          <a href={`tel:${CONTACT_DETAILS.phone}`}
            className="order-option"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1rem',
              backgroundColor: 'var(--color-navy)',
              color: 'white',
              borderRadius: 'var(--radius-md)',
              textDecoration: 'none',
              fontWeight: 500,
              transition: 'transform var(--transition-fast), box-shadow var(--transition-fast)'
            }}
          >
            <Phone size={24} />
            <span style={{ flex: 1, textAlign: 'center' }}>Call Us Directly</span>
          </a>

          <a href={CONTACT_DETAILS.instagramUrl} target="_blank" rel="noopener noreferrer"
            className="order-option"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1rem',
              backgroundColor: 'var(--color-navy)',
              color: 'white',
              borderRadius: 'var(--radius-md)',
              textDecoration: 'none',
              fontWeight: 500,
              transition: 'transform var(--transition-fast), box-shadow var(--transition-fast)'
            }}
          >
            <Instagram size={24} />
            <span style={{ flex: 1, textAlign: 'center' }}>DM on Instagram</span>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes slideUpFade {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .order-option:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
};

export default OrderPopup;
