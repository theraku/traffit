import React, { useContext, useMemo } from 'react';
import DataTable from '@common/components/DataTable';
import { IDataTableProps } from '@common/components/DataTable/DataTable';
import { ICommentModel } from './models/CommentModel';
import CommentsContextProvider from '@routes/Comments/contexts/CommentsContext/CommentsContextProvider';
import { CommentsContext } from '@routes/Comments/contexts/CommentsContext/CommentsContext';

const CommentsComponent: React.FC = () => {
  const {
    actions: { getListAction },
    state: { data, isLoaded, isLoading }
  } = useContext(CommentsContext);

  const dataTableProps: IDataTableProps<ICommentModel> = useMemo(() => {
    return {
      rowKey: (record) => `comments-${record.id}`,
      columns: [
        { title: '#', dataIndex: 'id', key: 'id', width: 60 },
        { title: 'Name', dataIndex: 'name', key: 'name', ellipsis: true },
        {
          title: 'Body',
          dataIndex: 'body',
          key: 'body',
          ellipsis: true,
          responsive: ['sm']
        },
        {
          title: 'Address email',
          dataIndex: 'email',
          key: 'email',
          responsive: ['sm'],
          ellipsis: true,
          width: 300,
          render: (value, record) => <a href={`mailto:${record.email}`}>{record.email}</a>
        }
      ]
    };
  }, []);

  return (
    <DataTable
      {...dataTableProps}
      fetchDataOptions={{
        resource: getListAction
      }}
      data={data}
      isLoaded={isLoaded}
      isLoading={isLoading}
    />
  );
};

const Comments = () => (
  <CommentsContextProvider>
    <CommentsComponent />
  </CommentsContextProvider>
);

export default Comments;
