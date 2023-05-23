import { FirstParameter, Offset, QueryParams, QueryResponse } from '@nara-way/accent';
import axios from 'axios';
import { CitizenWeeklyLoginStatus } from '~/models';
import {
  CitizenWeeklyLoginStatusDynamicQuery,
  CitizenWeeklyLoginStatusQuery,
  CitizenWeeklyLoginStatussDynamicQuery,
} from '../query';

const url = (path: string) => `/api/checkpoint/mashup/citizenuser/citizen-weekly-login-status${path}`;

const executeCitizenWeeklyLoginStatus = <T = CitizenWeeklyLoginStatus>(params: {
  citizenWeeklyLoginStatusId: string;
}) => {
  const query = <CitizenWeeklyLoginStatusQuery>{ ...params };
  return axios.post<QueryResponse<T>>(url('/query'), query);
};

const executeCitizenWeeklyLoginStatusDynamic = <T = CitizenWeeklyLoginStatus>(params: {
  queryParams: QueryParams<T>;
}) => {
  const query = <CitizenWeeklyLoginStatusDynamicQuery>{ ...params };
  return axios.post<QueryResponse<T | undefined>>(url('/dynamic-single/query'), query);
};

const executeCitizenWeeklyLoginStatussDynamic = <T = CitizenWeeklyLoginStatus>(params: {
  queryParams: QueryParams<T>;
}) => {
  const query = <CitizenWeeklyLoginStatussDynamicQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/dynamic-multi/query'), query);
};

const executeCitizenWeeklyLoginStatussDynamicPaginated = <T = CitizenWeeklyLoginStatus>(params: {
  queryParams: QueryParams<T>;
  offset: Offset<T>;
}) => {
  const query = <CitizenWeeklyLoginStatussDynamicQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/dynamic-multi/query'), query);
};

export default {
  executeCitizenWeeklyLoginStatus,
  executeCitizenWeeklyLoginStatusDynamic,
  executeCitizenWeeklyLoginStatussDynamic,
  executeCitizenWeeklyLoginStatussDynamicPaginated,

  query: {
    executeCitizenWeeklyLoginStatus: (params?: FirstParameter<typeof executeCitizenWeeklyLoginStatus>) => ({
      queryKey: ['CitizenWeeklyLoginStatus', 'executeCitizenWeeklyLoginStatus', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await executeCitizenWeeklyLoginStatus(queryKey.slice().pop()))?.data,
    }),
    executeCitizenWeeklyLoginStatusDynamic: (
      params?: FirstParameter<typeof executeCitizenWeeklyLoginStatusDynamic>,
    ) => ({
      queryKey: ['CitizenWeeklyLoginStatus', 'executeCitizenWeeklyLoginStatusDynamic', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await executeCitizenWeeklyLoginStatusDynamic(queryKey.slice().pop()))?.data,
    }),
    executeCitizenWeeklyLoginStatussDynamic: (
      params?: FirstParameter<typeof executeCitizenWeeklyLoginStatussDynamic>,
    ) => ({
      queryKey: ['CitizenWeeklyLoginStatus', 'executeCitizenWeeklyLoginStatussDynamic', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await executeCitizenWeeklyLoginStatussDynamic(queryKey.slice().pop()))?.data,
    }),
    executeCitizenWeeklyLoginStatussDynamicPaginated: (
      params?: FirstParameter<typeof executeCitizenWeeklyLoginStatussDynamicPaginated>,
    ) => ({
      queryKey: ['CitizenWeeklyLoginStatus', 'executeCitizenWeeklyLoginStatussDynamicPaginated', params],
      queryFn: async ({ queryKey, pageParam }: { queryKey: readonly any[]; pageParam?: any }) =>
        (
          await executeCitizenWeeklyLoginStatussDynamicPaginated({
            ...queryKey.slice().pop(),
            offset: pageParam || queryKey.slice().pop().offset,
          })
        )?.data,
    }),
  },
};
