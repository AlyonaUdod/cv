import styled from 'styled-components';
import { Card } from 'antd';

export const HomeCard = styled(Card)`
  width: 100%;
  margin: 0 10px;
  .ant-card-body {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .ant-list {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    .ant-card-body {
      flex-flow: column wrap;
    }
  }
`;

export const AvatarWrapper = styled.div`
  min-width: 280px;
  padding-left: 15%;
  /* flex-grow: 1; */
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Avatar = styled.img`
  width: 280px;
  border-radius: 5px;
  flex-grow: 1;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const TextWrapper = styled.div`
  margin-left: 24px;
  width: 60%;
  flex-grow: 2;
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 24px;
  }
`;

export const Text = styled.p`
  margin: 0;
  padding: 0;
  text-indent: 24px;
`;
