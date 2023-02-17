import { StyledNavLink, NavLinksWrapper, NavBtn } from './Navigation.styled';
import { useTranslation } from 'react-i18next';
import useWindowWidth from 'hooks/useWindowWidth';
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
    }
  }, [location.pathname]);

  const { t } = useTranslation();
  const {
    token: { colorPrimary },
  } = theme.useToken();

  const { width } = useWindowWidth();

  const items = [
    {
      key: '1',
      label: <StyledNavLink to="/">{t('navigation.home')}</StyledNavLink>,
    },
    {
      key: '2',
      label: (
        <StyledNavLink
          to="skills"
          colorprimary={colorPrimary}
        >
          {t('navigation.skills')}
        </StyledNavLink>
      ),
    },
    {
      key: '3',
      label: (
        <StyledNavLink
          to="work-experience"
          colorprimary={colorPrimary}
        >
          {t('navigation.work-experience')}
        </StyledNavLink>
      ),
    },
    {
      key: '4',
      label: (
        <StyledNavLink
          to="about"
          colorprimary={colorPrimary}
        >
          {t('navigation.about')}
        </StyledNavLink>
      ),
    },
    {
      key: '5',
      label: (
        <StyledNavLink
          to="contacts"
          colorprimary={colorPrimary}
        >
          {t('navigation.contacts')}
        </StyledNavLink>
      ),
    },
  ];

  return (
    <>
      {width > 768 ? (
        <NavLinksWrapper>
          <StyledNavLink
            to="/"
            colorprimary={colorPrimary}
          >
            {t('navigation.home')}
          </StyledNavLink>
          <StyledNavLink
            to="skills"
            colorprimary={colorPrimary}
          >
            {t('navigation.skills')}
          </StyledNavLink>
          <StyledNavLink
            to="work-experience"
            colorprimary={colorPrimary}
          >
            {t('navigation.work-experience')}
          </StyledNavLink>
          <StyledNavLink
            to="about"
            colorprimary={colorPrimary}
          >
            {t('navigation.about')}
          </StyledNavLink>
          <StyledNavLink
            to="contacts"
            colorprimary={colorPrimary}
          >
            {t('navigation.contacts')}
          </StyledNavLink>
        </NavLinksWrapper>
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
