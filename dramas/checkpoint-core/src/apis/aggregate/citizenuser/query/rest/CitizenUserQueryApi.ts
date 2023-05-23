import { FirstParameter, Offset, QueryParams, QueryResponse } from '@nara-way/accent';
import axios from 'axios';
import { CitizenUser } from '~/models';
import { CitizenUserDynamicQuery, CitizenUserQuery, CitizenUsersDynamicQuery } from '../query';

const url = (path: string) => `/api/checkpoint/aggregate/citizenuser${path}`;

const executeCitizenUser = <T = CitizenUser>(params: { citizenUserId: string }) => {
  const query = <CitizenUserQuery>{ ...params };
  return axios.post<QueryResponse<T>>(url('/citizen-user/query'), query);
};

const executeCitizenUserDynamic = <T = CitizenUser>(params: { queryParams: QueryParams<T> }) => {
  const query = <CitizenUserDynamicQuery>{ ...params };
  return axios.post<QueryResponse<T | undefined>>(url('/citizen-user/dynamic-single/query'), query);
};

const executeCitizenUsersDynamic = <T = CitizenUser>(params: { queryParams: QueryParams<T> }) => {
  const query = <CitizenUsersDynamicQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/citizen-user/dynamic-multi/query'), query);
};

const executeCitizenUsersDynamicPaginated = <T = CitizenUser>(params: {
  queryParams: QueryParams<T>;
  offset: Offset<T>;
}) => {
  const query = <CitizenUsersDynamicQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/citizen-user/dynamic-multi/query'), query);
};

export default {
  executeCitizenUser,
  executeCitizenUserDynamic,
  executeCitizenUsersDynamic,
  executeCitizenUsersDynamicPaginated,

  query: {
    executeCitizenUser: (params?: FirstParameter<typeof executeCitizenUser>) => ({
      queryKey: ['CitizenUser', 'executeCitizenUser', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await executeCitizenUser(queryKey.slice().pop()))?.data,
    }),
    executeCitizenUserDynamic: (params?: FirstParameter<typeof executeCitizenUserDynamic>) => ({
      queryKey: ['CitizenUser', 'executeCitizenUserDynamic', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await executeCitizenUserDynamic(queryKey.slice().pop()))?.data,
    }),
    executeCitizenUsersDynamic: (params?: FirstParameter<typeof executeCitizenUsersDynamic>) => ({
      queryKey: ['CitizenUser', 'executeCitizenUsersDynamic', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await executeCitizenUsersDynamic(queryKey.slice().pop()))?.data,
    }),
    executeCitizenUsersDynamicPaginated: (params?: FirstParameter<typeof executeCitizenUsersDynamicPaginated>) => ({
      queryKey: ['CitizenUser', 'executeCitizenUsersDynamicPaginated', params],
      queryFn: async ({ queryKey, pageParam }: { queryKey: readonly any[]; pageParam?: any }) =>
        (
          await executeCitizenUsersDynamicPaginated({
            ...queryKey.slice().pop(),
            offset: pageParam || queryKey.slice().pop().offset,
          })
        )?.data,
    }),
  },
};
