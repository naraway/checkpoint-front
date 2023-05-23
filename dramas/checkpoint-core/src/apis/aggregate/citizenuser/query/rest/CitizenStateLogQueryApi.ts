import { FirstParameter, Offset, QueryParams, QueryResponse } from '@nara-way/accent';
import axios from 'axios';
import { CitizenStateLog } from '~/models';
import { CitizenStateLogDynamicQuery, CitizenStateLogQuery, CitizenStateLogsDynamicQuery } from '../query';

const url = (path: string) => `/api/checkpoint/aggregate/citizenuser${path}`;

const executeCitizenStateLog = <T = CitizenStateLog>(params: { citizenStateLogId: string }) => {
  const query = <CitizenStateLogQuery>{ ...params };
  return axios.post<QueryResponse<T>>(url('/citizen-state-log/query'), query);
};

const executeCitizenStateLogDynamic = <T = CitizenStateLog>(params: { queryParams: QueryParams<T> }) => {
  const query = <CitizenStateLogDynamicQuery>{ ...params };
  return axios.post<QueryResponse<T | undefined>>(url('/citizen-state-log/dynamic-single/query'), query);
};

const executeCitizenStateLogsDynamic = <T = CitizenStateLog>(params: { queryParams: QueryParams<T> }) => {
  const query = <CitizenStateLogsDynamicQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/citizen-state-log/dynamic-multi/query'), query);
};

const executeCitizenStateLogsDynamicPaginated = <T = CitizenStateLog>(params: {
  queryParams: QueryParams<T>;
  offset: Offset<T>;
}) => {
  const query = <CitizenStateLogsDynamicQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/citizen-state-log/dynamic-multi/query'), query);
};

export default {
  executeCitizenStateLog,
  executeCitizenStateLogDynamic,
  executeCitizenStateLogsDynamic,
  executeCitizenStateLogsDynamicPaginated,

  query: {
    executeCitizenStateLog: (params?: FirstParameter<typeof executeCitizenStateLog>) => ({
      queryKey: ['CitizenStateLog', 'executeCitizenStateLog', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await executeCitizenStateLog(queryKey.slice().pop()))?.data,
    }),
    executeCitizenStateLogDynamic: (params?: FirstParameter<typeof executeCitizenStateLogDynamic>) => ({
      queryKey: ['CitizenStateLog', 'executeCitizenStateLogDynamic', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await executeCitizenStateLogDynamic(queryKey.slice().pop()))?.data,
    }),
    executeCitizenStateLogsDynamic: (params?: FirstParameter<typeof executeCitizenStateLogsDynamic>) => ({
      queryKey: ['CitizenStateLog', 'executeCitizenStateLogsDynamic', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await executeCitizenStateLogsDynamic(queryKey.slice().pop()))?.data,
    }),
    executeCitizenStateLogsDynamicPaginated: (
      params?: FirstParameter<typeof executeCitizenStateLogsDynamicPaginated>,
    ) => ({
      queryKey: ['CitizenStateLog', 'executeCitizenStateLogsDynamicPaginated', params],
      queryFn: async ({ queryKey, pageParam }: { queryKey: readonly any[]; pageParam?: any }) =>
        (
          await executeCitizenStateLogsDynamicPaginated({
            ...queryKey.slice().pop(),
            offset: pageParam || queryKey.slice().pop().offset,
          })
        )?.data,
    }),
  },
};
