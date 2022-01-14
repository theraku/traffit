import React  from 'react';
import { Outlet } from 'react-router-dom';
import { ConfigProvider, Layout as AntdLayout } from 'antd';
import LayoutSider from '@common/components/LayoutSider';
import 'antd/dist/antd.less';
import styles from './Layout.module.less';

const { Content: AntdLayoutContent } = AntdLayout;

const Layout: React.FC = () => {
  return (
    <ConfigProvider>
      <AntdLayout className={styles.Layout}>
        <LayoutSider />
        <AntdLayoutContent className={styles.LayoutContent}>
          <Outlet />
        </AntdLayoutContent>
      </AntdLayout>
    </ConfigProvider>
  );
}

export default Layout;
