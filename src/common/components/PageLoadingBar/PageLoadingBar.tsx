import * as React from 'react';
import { Spin } from 'antd';
import styles from './PageLoadingBar.module.less';

const PageLoadingBar: React.FC = () => {
  return <Spin size="large" className={styles.Spinner} />;
};

export default PageLoadingBar;
