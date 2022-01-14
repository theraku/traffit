import React from 'react';
import { Table as AntdTable, TableProps as AntdTableProps } from 'antd';
import axios, { AxiosRequestConfig, CancelTokenSource } from 'axios';
import { useEffectOnce } from '@common/hooks/useEffectOnce';
import PageLoadingBar from '@common/components/PageLoadingBar';

const { CancelToken } = axios;

export interface IDataTableProps<Item> extends Omit<AntdTableProps<Item>, 'dataSource' | 'loading'> {}

export interface IDataTableFetchOptions {
  resource: (config: AxiosRequestConfig) => Promise<void>;
  params?: { [key: string]: string | number };
}

interface IProps<Item> extends IDataTableProps<Item> {
  data: Item[];
  isLoaded: boolean;
  isLoading: boolean;
  fetchDataOptions: IDataTableFetchOptions;
}

const DataTable = <Item extends {}>({
  data = [],
  isLoaded,
  isLoading,
  fetchDataOptions: { params, resource },
  ...props
}: IProps<Item>) => {
  const source = React.useRef<CancelTokenSource>();

  const fetchData = async () => {
    try {
      if (source.current) {
        source.current.cancel();
      }

      source.current = CancelToken.source();

      await resource({
        params,
        cancelToken: source.current.token
      });
    } catch (e) {}
  };

  useEffectOnce(() => {
    fetchData();
  });

  if (!isLoaded) {
    return <PageLoadingBar />;
  }

  return (
    <AntdTable<Item>
      {...props}
      dataSource={data}
      showHeader={isLoaded && data.length > 0}
      pagination={{ hideOnSinglePage: true }}
      loading={isLoading}
    />
  );
};

export default DataTable;
