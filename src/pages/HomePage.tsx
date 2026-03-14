
import ProductCard from '../components/ProductCard';
import { products } from '../types';

const HomePage = () => {
  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        height: '90vh',
        minHeight: '600px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: 'var(--color-black)'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url('/src/assets/hero.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.8
        }} />
        <div style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          color: 'var(--color-white)',
          padding: '2rem',
          maxWidth: '800px'
        }}>
          <h2 className="animate-fade-in" style={{ 
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            letterSpacing: '4px',
            marginBottom: '1rem',
            color: 'var(--color-white)',
            textShadow: '0 4px 12px rgba(0,0,0,0.5)'
          }}>
            Signature Collection
          </h2>
          <p className="animate-fade-in delay-100" style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            marginBottom: '2.5rem',
            lineHeight: 1.8,
            maxWidth: '600px',
            margin: '0 auto 2.5rem',
            textShadow: '0 2px 8px rgba(0,0,0,0.5)'
          }}>
            Discover our meticulously crafted trio of fragrances, designed to embody elegance and leave an unforgettable impression.
          </p>
          <button 
            className="btn btn-gold animate-fade-in delay-200"
            onClick={() => {
              document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore the Collection
          </button>
        </div>
      </section>

      {/* Products Section */}
      <section id="products-section" className="section-y" style={{
        backgroundColor: 'var(--color-cream)'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontFamily: 'var(--font-serif)',
              fontSize: '2.5rem',
              color: 'var(--color-navy)',
              marginBottom: '1rem'
            }}>
              Our Fragrances
            </h2>
            <div style={{
              width: '60px',
              height: '2px',
              backgroundColor: 'var(--color-gold)',
              margin: '0 auto'
            }} />
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem'
          }}>
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Philosophy Section */}
      <section className="section-y" style={{
        backgroundColor: 'var(--color-white)',
        borderTop: '1px solid rgba(0,0,0,0.05)'
      }}>
        <div className="container text-center">
          <h2 style={{ 
            fontFamily: 'var(--font-serif)',
            fontSize: '2rem',
            color: 'var(--color-black)',
            marginBottom: '2rem'
          }}>
            The Essence of Azar
          </h2>
          <p style={{
            maxWidth: '700px',
            margin: '0 auto',
            color: 'var(--color-text-light)',
            fontSize: '1.1rem',
            lineHeight: 1.8
          }}>
            At Azar Perfumes, we believe a fragrance is the ultimate unseen accessory. 
            It introduces you before you speak and lingers after you have gone. 
            Our master perfumers blend the rarest ingredients to create scents that 
            are as uncompromisingly unique as the individuals who wear them.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
