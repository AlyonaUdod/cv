import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from 'antd';

export const StyledNavLink = styled(NavLink)`
  padding: 0 12px;
  font-weight: 500;
  color: #2a363b;
  font-size: 16px;
  text-transform: uppercase;
  &.active {
    color: ${props => props.colorprimary ?? props.colorprimary}
  }
`;

export const NavLinksWrapper = styled.nav`
  display: flex;
  margin: 0;
  padding: 0;
`

export const NavBtn = styled(Button)`
  /* color: ${props => props.colorprimary ?? props.colorprimary} */
  font-weight: 500;
  font-size: 18px;
  text-transform: uppercase;
`