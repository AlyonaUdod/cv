import { StyledNavLink, NavLinksWrapper, NavBtn } from './Navigation.styled';
import { useTranslation } from 'react-i18next';
import useWindowSizes from 'hooks/useWindowSizes';
import { Dropdown, theme } from 'antd';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Navigation() {

  const location = useLocation();
  const [activeLink, setActiveLink] = useState(
    location?.pathname?.slice(1) ?? 'home'
  );

  useEffect(() => {
    if (location?.pathname.slice(1)) {
      setActiveLink(location?.pathname?.slice(1));
    } else {
      setActiveLink('home');
    };
  }, [location.pathname]);

  const { t } = useTranslation();
  const {
    token: { colorPrimary },
  } = theme.useToken();

  const { width } = useWindowSizes();

  const items = [
    {
      key: '1',
      label: <StyledNavLink to="/" colorprimary={colorPrimary} key='1'>{t('navigation.home')}</StyledNavLink>,
    },
    {
      key: '2',
      label: (
        <StyledNavLink to="skills" colorprimary={colorPrimary} key='2'>
          {t('navigation.skills')}
        </StyledNavLink>
      ),
    },
    {
      key: '3',
      label: (
        <StyledNavLink to="work-experience" colorprimary={colorPrimary} key='3'>
          {t('navigation.work-experience')}
        </StyledNavLink>
      ),
    },
    {
      key: '4',
      label: (
        <StyledNavLink to="about" colorprimary={colorPrimary} key='4'>
          {t('navigation.about')}
        </StyledNavLink>
      ),
    },
    {
      key: '5',
      label: (
        <StyledNavLink to="contacts" colorprimary={colorPrimary} key='5'>
          {t('navigation.contacts')}
        </StyledNavLink>
      ),
    },
  ];

  return (
    <>
      {width > 768 ? (
        <NavLinksWrapper>{items.map(el => el.label)}</NavLinksWrapper>
      ) : (
        <Dropdown
          menu={{
            items,
          }}
          placement="bottomLeft"
        >
          <NavBtn type="link" colorprimary={colorPrimary}>
            {t('navigation.' + activeLink)}
          </NavBtn>
        </Dropdown>
      )}
    </>
  );
}
