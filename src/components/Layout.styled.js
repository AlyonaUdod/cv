
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
`;

export const StyledFooter = styled(Layout.Footer)`
  display: flex;
  justify-content: flex-end;
  flex-flow: row wrap;
  align-items: center;
  p {
    margin: 0;
  }
  @media (max-width: 520px) {
    flex-direction: column;
    justify-content: center;
  }
`

export const StyledFooterLink = styled.a`
  font-size: 16px;
  font-weight: 500;
  margin-right: 20px;
  @media (max-width: 520px) {
    margin-bottom: 20px;
    margin-right: 0;
  }
`

export const StyledFooterText = styled.p`
  font-size: 16px;
  font-weight: 500;
`