import { Link } from 'react-router-dom';
import logoImg from '../assets/azar logo.PNG';


const Header = () => {
  return (
    <header style={{
      padding: '1rem 0',
      backgroundColor: 'var(--color-cream)',
      borderBottom: '1px solid rgba(0,0,0,0.05)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      background: 'rgba(253, 251, 247, 1)'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className="logo-container">
            {/* Logo Image */}
            <img
              src={logoImg}
              alt="Azar Perfumes Logo"
              style={{
                height: '70px',
                width: 'auto',
                objectFit: 'contain'
              }}
            />
            {/* Desktop Text */}
            <h1 className="desktop-logo-text" style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '2rem',
              letterSpacing: '4px',
              margin: 0,
              textTransform: 'uppercase',
              color: 'var(--color-navy)'
            }}>
              Azar <span style={{ color: 'var(--color-gold)', fontWeight: 300 }}>Perfumes</span>
            </h1>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
