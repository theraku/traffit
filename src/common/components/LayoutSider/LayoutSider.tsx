import React from 'react';
import { Menu, Layout } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import { Paths } from '@common/constants/Paths';
import styles from './LayoutSider.module.less';

const { Sider } = Layout;

const navigationItems = [
  {
    key: Paths.users,
    path: Paths.users,
    label: 'Users',
    icon: faUsers
  },
  {
    key: Paths.comments,
    path: Paths.comments,
    label: 'Comments',
    icon: faComments
  }
];

const LayoutSider: React.FC = () => {
  const location = useLocation();

  return (
    <Sider width={200}>
      <Menu mode="inline" className={styles.Menu} selectedKeys={[location.pathname]}>
        {navigationItems.map((i) => (
          <Menu.Item key={i.key} icon={<FontAwesomeIcon icon={i.icon} />}>
            <Link to={i.path}>{i.label}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};

export default LayoutSider;
