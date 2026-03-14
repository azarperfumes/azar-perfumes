import { Link } from 'react-router-dom';
import type { Product } from '../types';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // Background gradient based on theme
  const getGradient = () => {
    switch(product.theme) {
      case 'dark': return 'linear-gradient(to bottom, #f5f5f5, #e0e0e0)';
      case 'navy': return 'linear-gradient(to bottom, #f0f4f8, #d9e2ec)';
      default: return 'linear-gradient(to bottom, #fafafa, #f0f0f0)';
    }
  };

  return (
    <div 
      className={`animate-fade-in delay-${(index + 1) * 100}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={{
          position: 'relative',
          background: getGradient(),
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          aspectRatio: '3/4',
          marginBottom: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          transition: 'transform var(--transition-normal), box-shadow var(--transition-normal)',
          transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
          boxShadow: isHovered ? '0 20px 40px rgba(0,0,0,0.08)' : 'none'
        }}>
          <img 
            src={product.image} 
            alt={product.name} 
            style={{
              maxHeight: '100%',
              objectFit: 'contain',
              transition: 'transform var(--transition-slow)',
              transform: isHovered ? 'scale(1.05)' : 'scale(1)'
            }}
          />
          
          {/* Overlay Discover Text */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '40%',
            background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            paddingBottom: '2rem',
            opacity: isHovered ? 1 : 0,
            transition: 'opacity var(--transition-normal)'
          }}>
            <span style={{ 
              color: 'white', 
              letterSpacing: '2px', 
              fontSize: '0.9rem',
              fontWeight: 500,
              textTransform: 'uppercase',
              borderBottom: '1px solid white',
              paddingBottom: '2px'
            }}>
              Discover
            </span>
          </div>
        </div>

        <div style={{ textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: '1.5rem',
            letterSpacing: '2px',
            margin: '0 0 0.5rem 0',
            color: 'var(--color-black)'
          }}>
            {product.name}
          </h3>
          <p style={{
            color: 'var(--color-text-light)',
            letterSpacing: '3px',
            fontSize: '0.8rem',
            textTransform: 'uppercase',
            margin: '0 0 1rem 0'
          }}>
            {product.subName}
          </p>
          <p style={{
            marginTop: 'auto',
            color: 'var(--color-gold)',
            fontWeight: 600,
            fontSize: '1.1rem'
          }}>
            {product.price}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
