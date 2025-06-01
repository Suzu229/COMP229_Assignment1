import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      padding: '1rem',
      backgroundColor: '#f5f5f5',
      borderBottom: '1px solid #ccc'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        <img
          src="/logo.jpg"
          alt="Logo"
          style={{
            height: '40px',
            display: 'block'
          }}
        />

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <ul style={{
            listStyle: 'none',
            display: 'flex',
            gap: '2rem',
            margin: 0,
            padding: 0,
            fontSize: '1.1rem',
            fontWeight: 'bold'
          }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
