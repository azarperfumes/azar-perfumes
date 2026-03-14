import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{
      padding: '1.5rem 0',
      backgroundColor: 'var(--color-cream)',
      borderBottom: '1px solid rgba(0,0,0,0.05)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      background: 'rgba(253, 251, 247, 0.9)'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h1 style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: '2rem', 
            letterSpacing: '4px',
            margin: 0,
            textTransform: 'uppercase',
            color: 'var(--color-navy)'
          }}>
            Azar <span style={{ color: 'var(--color-gold)', fontWeight: 300 }}>Perfumes</span>
          </h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
