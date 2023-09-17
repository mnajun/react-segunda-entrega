
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

function Navbar() {
  return (
    <Navcontainer className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <h2>
          <Link to="/">Ropa deportiva MMA</Link>
        </h2>
        <div>
          <NavLink to="/category/Bermudas">Bermudas</NavLink>
          <NavLink to="/category/Remeras">Remeras</NavLink>
          <NavLink to="/category/Calzas">Calzas</NavLink>
          <NavLink to="/cart">
            <CartWidget itemCount={0} /> {}
          </NavLink>
        </div>
      </div>
    </Navcontainer>
  );
}

export default Navbar;

const Navcontainer = styled.nav`
  

  /* Aplicar estilos de Bootstrap */
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h2 {
    font-weight: 700;
    font-weight: bold;
    color: white;
  }

  a {
    color: white;
    text-decoration: none;
    margin-right: 3rem;
    transition: color 0.3s ease;

    &:hover {
      color: grey;
    }
  }
`;
