import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import PropagateLoader from 'react-spinners/PropagateLoader';
import Navigation from './Navigation/Navigation';
import { HeaderMenu } from './Layout.styled';
import LangMenu from './LangMenu/LangMenu';
import { Layout, theme } from 'antd';
import React from 'react';
const { Header, Content, Footer } = Layout;

export default function AppLayout() {
  const {
    token: { colorBgContainer, colorPrimary },
  } = theme.useToken();

  return (
    <>
      <Layout>
        {/* <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <Navigation />
        </Sider> */}
        <Layout>
          <Header
            style={{
              padding: '0 10px',
              background: colorBgContainer,
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
                minHeight: window.innerHeight - 155,
                background: colorBgContainer,
              }}
            >
              <Suspense fallback={<PropagateLoader color={colorPrimary} />}>
                <Outlet />
              </Suspense>
            </div>
          </Content>
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
            Ant Design ©2023 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
      {/* <HeaderMenu>
        <Navigation />
        <LangMenu/>
      </HeaderMenu>

      <Suspense fallback={<PropagateLoader color="#41d61f" />}>
        <Outlet />
      </Suspense> */}
    </>
  );
}

// import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
// import { Layout, Menu, theme } from 'antd';
// import React from 'react';
// const { Header, Content, Footer, Sider } = Layout;
// const App = () => {
//   const {
//     token: { colorBgContainer },
//   } = theme.useToken();
//   return (
//     <Layout>
//       <Sider
//         breakpoint="lg"
//         collapsedWidth="0"
//         onBreakpoint={(broken) => {
//           console.log(broken);
//         }}
//         onCollapse={(collapsed, type) => {
//           console.log(collapsed, type);
//         }}
//       >
//         <div className="logo" />
//         <Menu
//           theme="dark"
//           mode="inline"
//           defaultSelectedKeys={['4']}
//           items={[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
//             (icon, index) => ({
//               key: String(index + 1),
//               icon: React.createElement(icon),
//               label: `nav ${index + 1}`,
//             }),
//           )}
//         />
//       </Sider>
//       <Layout>
//         <Header
//           style={{
//             padding: 0,
//             background: colorBgContainer,
//           }}
//         />
//         <Content
//           style={{
//             margin: '24px 16px 0',
//           }}
//         >
//           <div
//             style={{
//               padding: 24,
//               minHeight: 360,
//               background: colorBgContainer,
//             }}
//           >
//             content
//           </div>
//         </Content>
//         <Footer
//           style={{
//             textAlign: 'center',
//           }}
//         >
//           Ant Design ©2023 Created by Ant UED
//         </Footer>
//       </Layout>
//     </Layout>
//   );
// };
// export default App;
