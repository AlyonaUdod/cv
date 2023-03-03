import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, Progress, Row, Col, List } from 'antd';
import { StyledListItem, StyledItemTitle } from 'common/CommonStyledComponents.styled'
import { languages, skills } from 'common/source';

const Skills = () => {
  const { t } = useTranslation();

  return (
    <Row gutter={24}>
      <Col xs={24} lg={8}>
        <Card title={t('skills.tech')}>
        <List
            bordered
            dataSource={skills}
            renderItem={item => (
              <StyledListItem>
                <StyledItemTitle>- {t('skills.techs.tech' + item)}</StyledItemTitle>
              </StyledListItem>
            )}
          />
        </Card>
      </Col>
      <Col xs={24} lg={8}>
        <Card title={t('skills.lang')}>
        <List
            bordered
            dataSource={languages}
            renderItem={item => (
              <StyledListItem>
                <StyledItemTitle>{t('skills.languages.' + item.title)}</StyledItemTitle>
                <Progress percent={item.percent} showInfo={false} status='active'/>
              </StyledListItem>
            )}
          />
        </Card>
      </Col>
      <Col xs={24} lg={8}>
        <Card title={t('skills.soft')}>
        <List
            bordered
            dataSource={skills}
            renderItem={item => (
              <StyledListItem>
                <StyledItemTitle>- {t('skills.softs.soft' + item)}</StyledItemTitle>
              </StyledListItem>
            )}
          />
        </Card>
      </Col>
    </Row>
  );
};

export default Skills;