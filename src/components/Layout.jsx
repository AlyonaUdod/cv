import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import { useTranslation } from 'react-i18next';
import {
  HeaderMenu,
  StyledFooter,
  StyledFooterLink,
  StyledFooterText,
} from './Layout.styled';
import LangMenu from './LangMenu/LangMenu';
import { Layout, theme } from 'antd';
import React from 'react';
import useWindowSizes from 'hooks/useWindowSizes';
import Loader from './Loader/Loader';
const { Header, Content } = Layout;

export default function AppLayout() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { height } = useWindowSizes();
  const { t } = useTranslation();

  return (
    <>
      <Layout>
        <Layout>
          <Header
            style={{
              padding: '0 20px',
              background: colorBgContainer,
              position: 'sticky',
              top: 0,
              zIndex: 1,
              width: '100%',
            }}
          >
            <HeaderMenu>
              <Navigation />
              <LangMenu />
            </HeaderMenu>
          </Header>
          <Content
            style={{
              margin: '24px 16px 0',
            }}
          >
            <div
              style={{
                padding: 24,
                minHeight: height - 155,
                background: colorBgContainer,
                overflow: 'auto'
              }}
            >
              <Suspense fallback={<Loader />}>
                <Outlet />
              </Suspense>
            </div>
          </Content>
          <StyledFooter style={{ padding: '24px 20px' }}>
            <StyledFooterLink
              href="https://drive.google.com/file/d/1ZCBMMi2Wvlm0eyExG8Oe1nSwfTEdFPMC/view?usp=sharing"
              rel="noreferrer"
              target="_blank"
            >
              {t('footer.pdf-cv')}
            </StyledFooterLink>
            <StyledFooterLink
              href="https://github.com/AlyonaUdod/cv"
              rel="noreferrer"
              target="_blank"
            >
              {t('footer.source-code')}
            </StyledFooterLink>
            <StyledFooterText>{t('footer.name')}</StyledFooterText>
          </StyledFooter>
        </Layout>
      </Layout>
    </>
  );
}
