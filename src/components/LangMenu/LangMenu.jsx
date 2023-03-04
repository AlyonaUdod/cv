import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import en from 'assets/icons/en.png';
import ua from 'assets/icons/ua.png';
import no from 'assets/icons/no.png';

import { LangIcon, LangText, LangLabel, LangWrapper } from './LangMenu.styled';

const LangMenu = () => {
  const { i18n } = useTranslation();
  const changeLanguageHandler = lang => {
    i18n.changeLanguage(lang.key);
  };

  useEffect(() => {
    localStorage.setItem('lang', JSON.stringify(i18n.language));
  }, [i18n.language]);

  const items = [
    {
      key: 'en',
      icon: <LangIcon src={en} alt="en-flag" />,
      label: <LangLabel> en</LangLabel>,
    },
    {
      key: 'ua',
      icon: <LangIcon src={ua} alt="ua-flag" />,
      label: <LangLabel> ua</LangLabel>,
    },
    {
      key: 'no',
      icon: <LangIcon src={no} alt="no-flag" />,
      label: <LangLabel> no</LangLabel>,
    },
  ];

  const menuProps = {
    items,
    onClick: changeLanguageHandler,
  };

  return (
    <div>
      <Dropdown.Button menu={menuProps} icon={<DownOutlined />}>
        <LangWrapper>
          <LangIcon
            src={require(`assets/icons/${i18n.language}.png`)}
            alt="ua-flag"
          />
          <LangText>{i18n.language}</LangText>
        </LangWrapper>
      </Dropdown.Button>
    </div>
  );
};

export default LangMenu;
