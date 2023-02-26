import styled from 'styled-components'
import { List, Card } from 'antd'

export const StyledListItem = styled(List.Item)`
  flex-flow: row wrap;
`
export const StyledItemTitle = styled.span`
  /* @media (max-width: 992px) {
    padding-bottom: 12px
    } */
`

export const StyledInnerCard = styled(Card)`
  margin-bottom: 24px;
  .ant-card-head-title {
    white-space: normal;
  }
`;

export const StyledSubTitle = styled.p`
  color: grey;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
`

export const StyledText = styled.p`

`
export const StyledLink = styled.a`
`