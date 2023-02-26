import React from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';
import { theme } from 'antd';

const Loader = () => {
  const {
    token: { colorPrimary },
  } = theme.useToken();
  return <PropagateLoader color={colorPrimary} style={{ marginLeft: '50%' }} />;
};

export default Loader;
