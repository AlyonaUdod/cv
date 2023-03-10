import React, { useState } from 'react';

import { List, Tooltip, Button, Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';
import {
  TooltipText,
  StyledCard,
  StyledListItem,
  StyledItemTitle,
} from './Contacts.styled';
import { contacts, links } from './sourse'

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
              <StyledListItem>
                <StyledItemTitle>{t('contacts.' + item.title)}</StyledItemTitle>
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
              </StyledListItem>
            )}
          />
        </StyledCard>
      </Col>
      <Col xs={24} lg={12}>
        <StyledCard title={t('contacts.links')}>
          <List
            bordered
            dataSource={links}
            renderItem={item => (
              <StyledListItem>
                <Button
                  type="link"
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.title}
                </Button>
              </StyledListItem>
            )}
          />
        </StyledCard>
      </Col>
    </Row>
  );
};

export default Contacts;
