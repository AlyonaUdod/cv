import React from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Col } from 'antd';
import {
  StyledInnerCard,
  StyledSubTitle,
  StyledText,
  StyledLink,
} from 'common/CommonStyledComponents.styled';

const WorkExperience = () => {
  const { t } = useTranslation();
  return (
    <Row gutter={24}>
      <Col xs={24}>
        {/* <Card title={t('navigation.education')}> */}
        <StyledInnerCard type="inner" title={t('work-experience.mentor')}>
          <StyledSubTitle>
            {t('months.february')} 2022 - {t('months.till-now')}
          </StyledSubTitle>
          <StyledText>
            {t('work-experience.content.mentor1')}
            <StyledLink
              href="https://goit.global/"
              target="_blank"
              rel="noreferrer"
            >
              GoIT
            </StyledLink>
            {t('work-experience.content.mentor2')}.
          </StyledText>
        </StyledInnerCard>
        <StyledInnerCard type="inner" title={t('work-experience.developer')}>
          <StyledSubTitle>
            {t('months.april')} 2019 - {t('months.february')} 2022
          </StyledSubTitle>
          <StyledText>{t('work-experience.content.developer')}.</StyledText>
        </StyledInnerCard>
        <StyledInnerCard type="inner" title={t('work-experience.dau')}>
          <StyledSubTitle>
            {t('months.august')} 2014 - {t('months.september')} 2018
          </StyledSubTitle>
          <StyledText>
            {t('work-experience.content.dau')}{' '}
            <StyledLink
              href="https://www.dau.com/en"
              target="_blank"
              rel="noreferrer"
            >
              DAU Project
            </StyledLink>
            .
          </StyledText>
        </StyledInnerCard>
        <StyledInnerCard type="inner" title={t('work-experience.films')}>
          <StyledSubTitle>
            2011 - 2018
          </StyledSubTitle>
          <StyledText>{t('work-experience.content.films')}.</StyledText>
        </StyledInnerCard>
        {/* </Card> */}
      </Col>
    </Row>
  );
};

export default WorkExperience;
