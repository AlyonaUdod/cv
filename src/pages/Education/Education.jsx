import React from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Col } from 'antd';
import {
  StyledInnerCard,
  StyledSubTitle,
  StyledText,
} from './Education.styled';

const Education = () => {
  const { t } = useTranslation();
  return (
    <Row gutter={24}>
      <Col xs={24}>
        {/* <Card title={t('navigation.education')}> */}
          <StyledInnerCard type="inner" title={t('education.fullstack')}>
            <StyledSubTitle>
              {t('education.months.september')} 2018 -{' '}
              {t('education.months.january')} 2019
            </StyledSubTitle>
            <StyledText>{t('education.content.fullstack')}.</StyledText>
          </StyledInnerCard>
          <StyledInnerCard type="inner" title={t('education.qa')}>
            <StyledSubTitle>
              {t('education.months.november')} 2014 -{' '}
              {t('education.months.january')} 2015
            </StyledSubTitle>
            <StyledText>{t('education.content.qa')}.</StyledText>
          </StyledInnerCard>
          <StyledInnerCard type="inner" title={t('education.sound')}>
            <StyledSubTitle>
              {t('education.months.september')} 2010 -{' '}
              {t('education.months.may')} 2014
            </StyledSubTitle>
            <StyledText>{t('education.content.sound')}.</StyledText>
          </StyledInnerCard>
        {/* </Card> */}
      </Col>
    </Row>
  );
};

export default Education;
