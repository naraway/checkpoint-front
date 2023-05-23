import { FirstParameter, Offset, QueryParams, QueryResponse } from '@nara-way/accent';
import axios from 'axios';
import { CitizenMonthlyLoginStatus } from '~/models';
import {
  CitizenMonthlyLoginStatusDynamicQuery,
  CitizenMonthlyLoginStatusQuery,
  CitizenMonthlyLoginStatussDynamicQuery,
} from '../query';

const url = (path: string) => `/api/checkpoint/mashup/citizenuser/citizen-monthly-login-status${path}`;

const executeCitizenMonthlyLoginStatus = <T = CitizenMonthlyLoginStatus>(params: {
  citizenMonthlyLoginStatusId: string;
}) => {
  const query = <CitizenMonthlyLoginStatusQuery>{ ...params };
  return axios.post<QueryResponse<T>>(url('/query'), query);
};

const executeCitizenMonthlyLoginStatusDynamic = <T = CitizenMonthlyLoginStatus>(params: {
  queryParams: QueryParams<T>;
}) => {
  const query = <CitizenMonthlyLoginStatusDynamicQuery>{ ...params };
  return axios.post<QueryResponse<T | undefined>>(url('/dynamic-single/query'), query);
};

const executeCitizenMonthlyLoginStatussDynamic = <T = CitizenMonthlyLoginStatus>(params: {
  queryParams: QueryParams<T>;
}) => {
  const query = <CitizenMonthlyLoginStatussDynamicQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/dynamic-multi/query'), query);
};

const executeCitizenMonthlyLoginStatussDynamicPaginated = <T = CitizenMonthlyLoginStatus>(params: {
  queryParams: QueryParams<T>;
  offset: Offset<T>;
}) => {
  const query = <CitizenMonthlyLoginStatussDynamicQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/dynamic-multi/query'), query);
};

export default {
  executeCitizenMonthlyLoginStatus,
  executeCitizenMonthlyLoginStatusDynamic,
  executeCitizenMonthlyLoginStatussDynamic,
  executeCitizenMonthlyLoginStatussDynamicPaginated,

  query: {
    executeCitizenMonthlyLoginStatus: (params?: FirstParameter<typeof executeCitizenMonthlyLoginStatus>) => ({
      queryKey: ['CitizenMonthlyLoginStatus', 'executeCitizenMonthlyLoginStatus', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await executeCitizenMonthlyLoginStatus(queryKey.slice().pop()))?.data,
    }),
    executeCitizenMonthlyLoginStatusDynamic: (
      params?: FirstParameter<typeof executeCitizenMonthlyLoginStatusDynamic>,
    ) => ({
      queryKey: ['CitizenMonthlyLoginStatus', 'executeCitizenMonthlyLoginStatusDynamic', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await executeCitizenMonthlyLoginStatusDynamic(queryKey.slice().pop()))?.data,
    }),
    executeCitizenMonthlyLoginStatussDynamic: (
      params?: FirstParameter<typeof executeCitizenMonthlyLoginStatussDynamic>,
    ) => ({
      queryKey: ['CitizenMonthlyLoginStatus', 'executeCitizenMonthlyLoginStatussDynamic', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await executeCitizenMonthlyLoginStatussDynamic(queryKey.slice().pop()))?.data,
    }),
    executeCitizenMonthlyLoginStatussDynamicPaginated: (
      params?: FirstParameter<typeof executeCitizenMonthlyLoginStatussDynamicPaginated>,
    ) => ({
      queryKey: ['CitizenMonthlyLoginStatus', 'executeCitizenMonthlyLoginStatussDynamicPaginated', params],
      queryFn: async ({ queryKey, pageParam }: { queryKey: readonly any[]; pageParam?: any }) =>
        (
          await executeCitizenMonthlyLoginStatussDynamicPaginated({
            ...queryKey.slice().pop(),
            offset: pageParam || queryKey.slice().pop().offset,
          })
        )?.data,
    }),
  },
};
