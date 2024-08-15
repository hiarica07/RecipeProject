import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

const NavbarS = styled.div`
  display: flex;
  gap: 5rem;
  font-size: 24px;
  font-weight: 100;
  padding: 0 60px;
`;

export const HeaderS = styled.div`
  background-color: #E1F1DD;
  display: flex;
  justify-content: space-between;
  font-family: "Girassol", cursive;
  font-weight: 800;
  font-style: normal;
  font-size:2rem;
  padding: 20px 20px;
  align-items: center;
  
`;

export const NavLinkk = styled(NavLink)`
    text-decoration: none;
    color: #2D5C54;

    &:hover {
      color: rgb(0, 173, 181);
      font-weight: 700;
        
    }
`

export const LogoS = styled.a`
  text-decoration: none;
  color: #2C3E50;
`

export const SpanS = styled.span`
  color: #438A7E;
  font-weight: 100;
`
 

export default NavbarS;