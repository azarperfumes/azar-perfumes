import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { products } from '../types';
import OrderPopup from '../components/OrderPopup';
import { ArrowLeft } from 'lucide-react';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImage(null);
  }, [id]);

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
        <h2>Product not found</h2>
        <button className="btn btn-outline" style={{ marginTop: '2rem' }} onClick={() => navigate('/')}>
          Back to Collection
        </button>
      </div>
    );
  }

  // Determine styling based on product theme
  const getThemeColors = () => {
    switch(product.theme) {
      case 'dark': return { bg: '#111', text: '#fff', accent: 'var(--color-gold)' };
      case 'navy': return { bg: '#0A1128', text: '#fff', accent: 'var(--color-gold)' };
      default: return { bg: '#f5f5f5', text: '#111', accent: 'var(--color-navy)' };
    }
  };

  const themeColors = getThemeColors();

  return (
    <div className="page-transition">
      <div style={{ backgroundColor: themeColors.bg, color: themeColors.text, padding: '2rem 0' }}>
        <div className="container">
          <button 
            onClick={() => navigate('/')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: themeColors.text,
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              opacity: 0.8,
              padding: '0.5rem 0'
            }}
          >
            <ArrowLeft size={16} /> Back
          </button>
        </div>
      </div>

      <div style={{ backgroundColor: themeColors.bg, color: themeColors.text, paddingBottom: '4rem' }}>
        <div className="container">
          <div className="flex-row-wrap">
            {/* Image Section */}
            <div className="animate-fade-in flex-col detail-img-pad" style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2rem',
              justifyContent: 'center'
            }}>
              <div style={{
                height: 'clamp(350px, 50vh, 500px)',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img 
                  src={activeImage || product.image} 
                  alt={product.name} 
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    filter: product.theme !== 'light' ? 'drop-shadow(0 20px 30px rgba(0,0,0,0.5))' : 'drop-shadow(0 20px 30px rgba(0,0,0,0.1))',
                    transition: 'opacity 0.3s ease'
                  }}
                />
              </div>
              
              {/* Thumbnails */}
              <div style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                marginTop: '1rem'
              }}>
                <button
                  onClick={() => setActiveImage(product.image)}
                  style={{
                    border: (activeImage === null || activeImage === product.image) ? `2px solid ${themeColors.accent}` : '2px solid transparent',
                    background: 'none',
                    padding: '2px',
                    cursor: 'pointer',
                    borderRadius: '8px',
                    transition: 'border-color 0.3s ease'
                  }}
                >
                  <img src={product.image} alt={`${product.name} Main`} style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '4px' }} />
                </button>
                <button
                  onClick={() => setActiveImage(product.secondaryImage)}
                  style={{
                    border: activeImage === product.secondaryImage ? `2px solid ${themeColors.accent}` : '2px solid transparent',
                    background: 'none',
                    padding: '2px',
                    cursor: 'pointer',
                    borderRadius: '8px',
                    transition: 'border-color 0.3s ease'
                  }}
                >
                  <img src={product.secondaryImage} alt={`${product.name} Detail`} style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '4px' }} />
                </button>
              </div>
            </div>

            {/* Details Section */}
            <div className="animate-fade-in delay-100 flex-col" style={{
              display: 'flex',
              flexDirection: 'column'
            }}>
              <p style={{
                color: themeColors.accent,
                letterSpacing: '4px',
                textTransform: 'uppercase',
                fontSize: '0.9rem',
                marginBottom: '1rem',
                fontWeight: 600
              }}>
                {product.subName}
              </p>
              
              <h1 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                marginBottom: '0.5rem',
                lineHeight: 1,
                color: themeColors.text
              }}>
                {product.name}
              </h1>
              
              <p style={{
                fontSize: '1.2rem',
                opacity: 0.8,
                marginBottom: '2rem'
              }}>
                {product.category} &bull; {product.volume}
              </p>

              <p style={{
                fontSize: '1.1rem',
                lineHeight: 1.8,
                opacity: 0.9,
                marginBottom: '3rem',
                maxWidth: '500px'
              }}>
                {product.description}
              </p>


              <div className="actions-row" style={{
                borderTop: `1px solid ${themeColors.text === '#fff' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`
              }}>
                <span className="price-text" style={{
                  color: themeColors.accent
                }}>
                  {product.price}
                </span>
                <button 
                  className={`btn ${product.theme !== 'light' ? 'btn-gold' : 'btn-primary'}`}
                  style={{ flex: 1, minWidth: '200px' }}
                  onClick={() => setIsPopupOpen(true)}
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <OrderPopup 
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        productName={product.name}
      />
    </div>
  );
};

export default ProductDetailPage;
