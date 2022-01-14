import React, { useContext, useMemo } from 'react';
import DataTable from '@common/components/DataTable';
import { IDataTableProps } from '@common/components/DataTable/DataTable';
import { IUserModel } from './models/UserModel';
import UsersContextProvider from '@routes/Users/contexts/UsersContext/UsersContextProvider';
import { UsersContext } from '@routes/Users/contexts/UsersContext/UsersContext';
import { Tag } from 'antd';

const UsersComponent: React.FC = () => {
  const {
    actions: { getListAction },
    state: { data, isLoaded, isLoading }
  } = useContext(UsersContext);

  const dataTableProps: IDataTableProps<IUserModel> = useMemo(
    () => ({
      fetchDataOptions: {
        resource: getListAction
      },
      rowKey: (record) => `users-${record.id}`,
      columns: [
        { title: '#', dataIndex: 'id', key: 'id', width: 60 },
        { title: 'Name', dataIndex: 'name', key: 'name' },
        {
          title: 'Address email',
          dataIndex: 'email',
          key: 'email',
          responsive: ['sm'],
          render: (value, record) => <a href={`mailto:${record.email}`}>{record.email}</a>
        },
        { title: 'Phone number', dataIndex: 'phone', key: 'phone', responsive: ['sm'] },
        { title: 'Username', dataIndex: 'username', key: 'username', responsive: ['xl'] },
        {
          title: 'Company',
          dataIndex: 'company',
          key: 'company',
          responsive: ['xl'],
          render: (value, record) => <Tag color="magenta">{record.company.name}</Tag>
        },
        {
          title: 'Website',
          dataIndex: 'website',
          key: 'website',
          responsive: ['sm'],
          render: (value) => (
            <a href={`http://${value}`} target="_blank" rel="noreferrer">
              {value}
            </a>
          )
        }
      ]
    }),
    [getListAction]
  );

  return (
    <DataTable
      {...dataTableProps}
      fetchDataOptions={{ resource: getListAction }}
      data={data}
      isLoaded={isLoaded}
      isLoading={isLoading}
    />
  );
};

const Users = () => (
  <UsersContextProvider>
    <UsersComponent />
  </UsersContextProvider>
);

export default Users;
