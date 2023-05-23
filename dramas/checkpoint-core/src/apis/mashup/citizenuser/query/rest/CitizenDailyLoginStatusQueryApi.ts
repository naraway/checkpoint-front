import { FirstParameter, Offset, QueryParams, QueryResponse } from '@nara-way/accent';
import axios from 'axios';
import { CitizenDailyLoginStatus } from '~/models';
import {
  CitizenDailyLoginStatusDynamicQuery,
  CitizenDailyLoginStatusQuery,
  CitizenDailyLoginStatussDynamicQuery,
} from '../query';

const url = (path: string) => `/api/checkpoint/mashup/citizenuser/citizen-daily-login-status${path}`;

const executeCitizenDailyLoginStatus = <T = CitizenDailyLoginStatus>(params: { citizenDailyLoginStatusId: string }) => {
  const query = <CitizenDailyLoginStatusQuery>{ ...params };
  return axios.post<QueryResponse<T>>(url('/query'), query);
};

const executeCitizenDailyLoginStatusDynamic = <T = CitizenDailyLoginStatus>(params: {
  queryParams: QueryParams<T>;
}) => {
  const query = <CitizenDailyLoginStatusDynamicQuery>{ ...params };
  return axios.post<QueryResponse<T | undefined>>(url('/dynamic-single/query'), query);
};

const executeCitizenDailyLoginStatussDynamic = <T = CitizenDailyLoginStatus>(params: {
  queryParams: QueryParams<T>;
}) => {
  const query = <CitizenDailyLoginStatussDynamicQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/dynamic-multi/query'), query);
};

const executeCitizenDailyLoginStatussDynamicPaginated = <T = CitizenDailyLoginStatus>(params: {
  queryParams: QueryParams<T>;
  offset: Offset<T>;
}) => {
  const query = <CitizenDailyLoginStatussDynamicQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/dynamic-multi/query'), query);
};

export default {
  executeCitizenDailyLoginStatus,
  executeCitizenDailyLoginStatusDynamic,
  executeCitizenDailyLoginStatussDynamic,
  executeCitizenDailyLoginStatussDynamicPaginated,

  query: {
    executeCitizenDailyLoginStatus: (params?: FirstParameter<typeof executeCitizenDailyLoginStatus>) => ({
      queryKey: ['CitizenDailyLoginStatus', 'executeCitizenDailyLoginStatus', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await executeCitizenDailyLoginStatus(queryKey.slice().pop()))?.data,
    }),
    executeCitizenDailyLoginStatusDynamic: (params?: FirstParameter<typeof executeCitizenDailyLoginStatusDynamic>) => ({
      queryKey: ['CitizenDailyLoginStatus', 'executeCitizenDailyLoginStatusDynamic', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await executeCitizenDailyLoginStatusDynamic(queryKey.slice().pop()))?.data,
    }),
    executeCitizenDailyLoginStatussDynamic: (
      params?: FirstParameter<typeof executeCitizenDailyLoginStatussDynamic>,
    ) => ({
      queryKey: ['CitizenDailyLoginStatus', 'executeCitizenDailyLoginStatussDynamic', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await executeCitizenDailyLoginStatussDynamic(queryKey.slice().pop()))?.data,
    }),
    executeCitizenDailyLoginStatussDynamicPaginated: (
      params?: FirstParameter<typeof executeCitizenDailyLoginStatussDynamicPaginated>,
    ) => ({
      queryKey: ['CitizenDailyLoginStatus', 'executeCitizenDailyLoginStatussDynamicPaginated', params],
      queryFn: async ({ queryKey, pageParam }: { queryKey: readonly any[]; pageParam?: any }) =>
        (
          await executeCitizenDailyLoginStatussDynamicPaginated({
            ...queryKey.slice().pop(),
            offset: pageParam || queryKey.slice().pop().offset,
          })
        )?.data,
    }),
  },
};
