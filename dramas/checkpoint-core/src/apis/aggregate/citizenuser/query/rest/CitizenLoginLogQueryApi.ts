import { FirstParameter, Offset, QueryParams, QueryResponse } from '@nara-way/accent';
import axios from 'axios';
import { CitizenLoginLog } from '~/models';
import { CitizenLoginLogDynamicQuery, CitizenLoginLogQuery, CitizenLoginLogsDynamicQuery } from '../query';

const url = (path: string) => `/api/checkpoint/aggregate/citizenuser${path}`;

const executeCitizenLoginLog = <T = CitizenLoginLog>(params: { citizenLoginLogId: string }) => {
  const query = <CitizenLoginLogQuery>{ ...params };
  return axios.post<QueryResponse<T>>(url('/citizen-login-log/query'), query);
};

const executeCitizenLoginLogDynamic = <T = CitizenLoginLog>(params: { queryParams: QueryParams<T> }) => {
  const query = <CitizenLoginLogDynamicQuery>{ ...params };
  return axios.post<QueryResponse<T | undefined>>(url('/citizen-login-log/dynamic-single/query'), query);
};

const executeCitizenLoginLogsDynamic = <T = CitizenLoginLog>(params: { queryParams: QueryParams<T> }) => {
  const query = <CitizenLoginLogsDynamicQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/citizen-login-log/dynamic-multi/query'), query);
};

const executeCitizenLoginLogsDynamicPaginated = <T = CitizenLoginLog>(params: {
  queryParams: QueryParams<T>;
  offset: Offset<T>;
}) => {
  const query = <CitizenLoginLogsDynamicQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/citizen-login-log/dynamic-multi/query'), query);
};

export default {
  executeCitizenLoginLog,
  executeCitizenLoginLogDynamic,
  executeCitizenLoginLogsDynamic,
  executeCitizenLoginLogsDynamicPaginated,

  query: {
    executeCitizenLoginLog: (params?: FirstParameter<typeof executeCitizenLoginLog>) => ({
      queryKey: ['CitizenLoginLog', 'executeCitizenLoginLog', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await executeCitizenLoginLog(queryKey.slice().pop()))?.data,
    }),
    executeCitizenLoginLogDynamic: (params?: FirstParameter<typeof executeCitizenLoginLogDynamic>) => ({
      queryKey: ['CitizenLoginLog', 'executeCitizenLoginLogDynamic', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await executeCitizenLoginLogDynamic(queryKey.slice().pop()))?.data,
    }),
    executeCitizenLoginLogsDynamic: (params?: FirstParameter<typeof executeCitizenLoginLogsDynamic>) => ({
      queryKey: ['CitizenLoginLog', 'executeCitizenLoginLogsDynamic', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await executeCitizenLoginLogsDynamic(queryKey.slice().pop()))?.data,
    }),
    executeCitizenLoginLogsDynamicPaginated: (
      params?: FirstParameter<typeof executeCitizenLoginLogsDynamicPaginated>,
    ) => ({
      queryKey: ['CitizenLoginLog', 'executeCitizenLoginLogsDynamicPaginated', params],
      queryFn: async ({ queryKey, pageParam }: { queryKey: readonly any[]; pageParam?: any }) =>
        (
          await executeCitizenLoginLogsDynamicPaginated({
            ...queryKey.slice().pop(),
            offset: pageParam || queryKey.slice().pop().offset,
          })
        )?.data,
    }),
  },
};
