import React from 'react';
import { useTranslation } from 'react-i18next';
import avatar from 'assets/avatar.jpg';
import { HomeCard, Avatar, TextWrapper, Text } from './Home.styled';
import { Card, Row, Col, List } from 'antd';
import {
  StyledListItem,
  StyledItemTitle,
} from 'common/CommonStyledComponents.styled';
import { skills } from 'common/source';

const Home = () => {
  const { t } = useTranslation();

  return (
    <Row gutter={24}>
      <Col xs={24} xl={16}>
        <HomeCard>
          <Avatar src={avatar} alt="avatar" />
          <TextWrapper>
            <Card>
              <Text>{t('home.summary')}</Text>
            </Card>
            <Card style={{ marginTop: '24px' }} title={t('home.principle')}>
              <List
                bordered
                dataSource={[1, 2, 3, 4]}
                renderItem={item => (
                  <StyledListItem>
                    <StyledItemTitle>
                      - {t('home.principles.principle' + item)}
                    </StyledItemTitle>
                  </StyledListItem>
                )}
              />
            </Card>
          </TextWrapper>
        </HomeCard>
      </Col>
      <Col xs={24} xl={8}>
        <Card title={t('home.fact')}>
          <List
            bordered
            dataSource={skills}
            renderItem={item => (
              <StyledListItem>
                <StyledItemTitle>
                  - {t('home.facts.fact' + item)}
                </StyledItemTitle>
              </StyledListItem>
            )}
          />
        </Card>
      </Col>
    </Row>
  );
};

export default Home;
