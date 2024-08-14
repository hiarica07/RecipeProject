import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

const NavbarS = styled.div`
  display: flex;
  gap: 5rem;
  font-size: 24px;
  font-weight: 100;
  padding: 0 60px;
`;

export const NavLinkk = styled(NavLink)`
    text-decoration: none;
    color: #2D5C54;

    &:hover {
        color: rgb(0, 173, 181);
        font-weight: 700;
        
    }
`

export default NavbarS;