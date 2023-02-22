import React, { useState } from 'react';

import { List, Tooltip, Button, Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';
import { TooltipText, StyledCard } from './Contacts.styled';

const contacts = [
  { title: 'mobile-no', value: '+4793945868' },
  { title: 'mobile-ua', value: '+380630679969' },
  { title: 'e-mail', value: 'alyona.udod.ua@gmail.com' },
];

const links = [
  {
    id: 2,
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/alyona-udod-168604179/',
  },
  { id: 1, title: 'GitHub', link: 'https://github.com/AlyonaUdod' },
  { id: 1, title: 'Telegram', link: 'https://t.me/alyonaudod' },
];

const Contacts = () => {
  const { t } = useTranslation();
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipBoard = async copyMe => {
    if (copySuccess !== copyMe) {
      try {
        await navigator.clipboard.writeText(copyMe);
        setCopySuccess(copyMe);
      } catch (err) {
        setCopySuccess(false);
      }
    }
  };

  return (
    <Row gutter={24}>
      <Col xs={24} lg={12}>
        <StyledCard title={t('contacts.contacts')}>
          <List
            bordered
            dataSource={contacts}
            renderItem={item => (
              <List.Item>
                <span>{t('contacts.' + item.title)}</span>
                <Tooltip
                  color="blue"
                  placement="topRight"
                  title={
                    <TooltipText>
                      {copySuccess === item.value
                        ? t('contacts.copied')
                        : t('contacts.copy')}
                    </TooltipText>
                  }
                >
                  <Button onClick={() => copyToClipBoard(item.value)}>
                    {item.value}
                  </Button>
                </Tooltip>
              </List.Item>
            )}
          />
          </StyledCard>
        </Col>
      <Col xs={24} lg={12}>
      <StyledCard
        title={t('contacts.links')}
      >
        <List
          bordered
          dataSource={links}
          renderItem={item => (
            <List.Item>
              <Button type='link' href={item.link} target="_blank" rel="noreferrer">
                {item.title}
              </Button>
            </List.Item>
          )}
        />
        </StyledCard>
        </Col>
  </Row>
  );
};

export default Contacts;
