import { FirstParameter, Offset, QueryParams, QueryResponse } from '@nara-way/accent';
import axios from 'axios';
import { CitizenSession } from '~/models';
import { CitizenSessionDynamicQuery, CitizenSessionQuery, CitizenSessionsDynamicQuery } from '../query';

const url = (path: string) => `/api/checkpoint/aggregate/citizenuser${path}`;

const executeCitizenSession = <T = CitizenSession>(params: { citizenSessionId: string }) => {
  const query = <CitizenSessionQuery>{ ...params };
  return axios.post<QueryResponse<T>>(url('/citizen-session/query'), query);
};

const executeCitizenSessionDynamic = <T = CitizenSession>(params: { queryParams: QueryParams<T> }) => {
  const query = <CitizenSessionDynamicQuery>{ ...params };
  return axios.post<QueryResponse<T | undefined>>(url('/citizen-session/dynamic-single/query'), query);
};

const executeCitizenSessionsDynamic = <T = CitizenSession>(params: { queryParams: QueryParams<T> }) => {
  const query = <CitizenSessionsDynamicQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/citizen-session/dynamic-multi/query'), query);
};

const executeCitizenSessionsDynamicPaginated = <T = CitizenSession>(params: {
  queryParams: QueryParams<T>;
  offset: Offset<T>;
}) => {
  const query = <CitizenSessionsDynamicQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/citizen-session/dynamic-multi/query'), query);
};

export default {
  executeCitizenSession,
  executeCitizenSessionDynamic,
  executeCitizenSessionsDynamic,
  executeCitizenSessionsDynamicPaginated,

  query: {
    executeCitizenSession: (params?: FirstParameter<typeof executeCitizenSession>) => ({
      queryKey: ['CitizenSession', 'executeCitizenSession', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await executeCitizenSession(queryKey.slice().pop()))?.data,
    }),
    executeCitizenSessionDynamic: (params?: FirstParameter<typeof executeCitizenSessionDynamic>) => ({
      queryKey: ['CitizenSession', 'executeCitizenSessionDynamic', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await executeCitizenSessionDynamic(queryKey.slice().pop()))?.data,
    }),
    executeCitizenSessionsDynamic: (params?: FirstParameter<typeof executeCitizenSessionsDynamic>) => ({
      queryKey: ['CitizenSession', 'executeCitizenSessionsDynamic', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await executeCitizenSessionsDynamic(queryKey.slice().pop()))?.data,
    }),
    executeCitizenSessionsDynamicPaginated: (
      params?: FirstParameter<typeof executeCitizenSessionsDynamicPaginated>,
    ) => ({
      queryKey: ['CitizenSession', 'executeCitizenSessionsDynamicPaginated', params],
      queryFn: async ({ queryKey, pageParam }: { queryKey: readonly any[]; pageParam?: any }) =>
        (
          await executeCitizenSessionsDynamicPaginated({
            ...queryKey.slice().pop(),
            offset: pageParam || queryKey.slice().pop().offset,
          })
        )?.data,
    }),
  },
};
