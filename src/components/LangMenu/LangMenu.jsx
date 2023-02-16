import React from 'react';
import { useTranslation } from 'react-i18next';
import { Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import en from 'assets/icons/en.png';
import ua from 'assets/icons/ua.png';
import no from 'assets/icons/no.png';

import { LangIcon, LangText, LangLabel } from './LangMenu.styled';

const LangMenu = () => {
  const { i18n } = useTranslation();
  const changeLanguageHandler = lang => {
    i18n.changeLanguage(lang.key);
  };

  const items = [
    {
      key: 'en',
      icon: <LangIcon src={en} alt="en-flag"/>,
      label:   <LangLabel> en</LangLabel>,
    },
    {
      key: 'ua',
      icon: <LangIcon src={ua} alt="ua-flag" onClick={() => changeLanguageHandler('ua')}/>,
      label: <LangLabel onClick={() => changeLanguageHandler('ua')}> ua</LangLabel>,
    },
    {
      key: 'no',
      icon: <LangIcon src={no} alt="no-flag" onClick={() => changeLanguageHandler('no')}/>,
      label: <LangLabel onClick={() => changeLanguageHandler('no')}> no</LangLabel>,
    },
  ];

  const menuProps = {
    items,
    onClick: changeLanguageHandler,
  };

  return (
    <div>
      <Dropdown.Button menu={menuProps} icon={<DownOutlined />}>
        <Space>
        <LangIcon
            src={require(`assets/icons/${i18n.language}.png`)}
            alt="ua-flag"
          />
        <LangText>{i18n.language}</LangText>
       
        </Space>
      </Dropdown.Button>
    </div>
  );
};

export default LangMenu;
