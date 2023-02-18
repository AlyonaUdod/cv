
import styled from 'styled-components';
import { Layout } from 'antd'

export const HeaderMenu = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    margin-top: 14px;
  }

  /* display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  color: #2a363b;
  font-size: 18px;
  &.active {
    color: #2196f3;
  } */
`;

export const StyledFooter = styled(Layout.Footer)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 18px;
`
