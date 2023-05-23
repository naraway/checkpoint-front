import { FirstParameter, Offset, QueryParams, QueryResponse } from '@nara-way/accent';
import axios from 'axios';
import { PasswordStateLog } from '~/models';
import { PasswordStateLogDynamicQuery, PasswordStateLogQuery, PasswordStateLogsDynamicQuery } from '../query';

const url = (path: string) => `/api/checkpoint/aggregate/citizenuser${path}`;

const executePasswordStateLog = <T = PasswordStateLog>(params: { passwordStateLogId: string }) => {
  const query = <PasswordStateLogQuery>{ ...params };
  return axios.post<QueryResponse<T>>(url('/password-state-log/query'), query);
};

const executePasswordStateLogDynamic = <T = PasswordStateLog>(params: { queryParams: QueryParams<T> }) => {
  const query = <PasswordStateLogDynamicQuery>{ ...params };
  return axios.post<QueryResponse<T | undefined>>(url('/password-state-log/dynamic-single/query'), query);
};

const executePasswordStateLogsDynamic = <T = PasswordStateLog>(params: { queryParams: QueryParams<T> }) => {
  const query = <PasswordStateLogsDynamicQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/password-state-log/dynamic-multi/query'), query);
};

const executePasswordStateLogsDynamicPaginated = <T = PasswordStateLog>(params: {
  queryParams: QueryParams<T>;
  offset: Offset<T>;
}) => {
  const query = <PasswordStateLogsDynamicQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/password-state-log/dynamic-multi/query'), query);
};

export default {
  executePasswordStateLog,
  executePasswordStateLogDynamic,
  executePasswordStateLogsDynamic,
  executePasswordStateLogsDynamicPaginated,

  query: {
    executePasswordStateLog: (params?: FirstParameter<typeof executePasswordStateLog>) => ({
      queryKey: ['PasswordStateLog', 'executePasswordStateLog', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await executePasswordStateLog(queryKey.slice().pop()))?.data,
    }),
    executePasswordStateLogDynamic: (params?: FirstParameter<typeof executePasswordStateLogDynamic>) => ({
      queryKey: ['PasswordStateLog', 'executePasswordStateLogDynamic', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await executePasswordStateLogDynamic(queryKey.slice().pop()))?.data,
    }),
    executePasswordStateLogsDynamic: (params?: FirstParameter<typeof executePasswordStateLogsDynamic>) => ({
      queryKey: ['PasswordStateLog', 'executePasswordStateLogsDynamic', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await executePasswordStateLogsDynamic(queryKey.slice().pop()))?.data,
    }),
    executePasswordStateLogsDynamicPaginated: (
      params?: FirstParameter<typeof executePasswordStateLogsDynamicPaginated>,
    ) => ({
      queryKey: ['PasswordStateLog', 'executePasswordStateLogsDynamicPaginated', params],
      queryFn: async ({ queryKey, pageParam }: { queryKey: readonly any[]; pageParam?: any }) =>
        (
          await executePasswordStateLogsDynamicPaginated({
            ...queryKey.slice().pop(),
            offset: pageParam || queryKey.slice().pop().offset,
          })
        )?.data,
    }),
  },
};
