import { FirstParameter, Offset, QueryParams, QueryResponse } from '@nara-way/accent';
import axios from 'axios';
import { LoginPolicy } from '~/models';
import { LoginPolicyDynamicQuery, LoginPolicyQuery, LoginPolicysDynamicQuery } from '../query';

const url = (path: string) => `/api/checkpoint/aggregate/policy${path}`;

const executeLoginPolicy = <T = LoginPolicy>(params: { loginPolicyId: string }) => {
  const query = <LoginPolicyQuery>{ ...params };
  return axios.post<QueryResponse<T>>(url('/login-policy/query'), query);
};

const executeLoginPolicyDynamic = <T = LoginPolicy>(params: { queryParams: QueryParams<T> }) => {
  const query = <LoginPolicyDynamicQuery>{ ...params };
  return axios.post<QueryResponse<T | undefined>>(url('/login-policy/dynamic-single/query'), query);
};

const executeLoginPolicysDynamic = <T = LoginPolicy>(params: { queryParams: QueryParams<T> }) => {
  const query = <LoginPolicysDynamicQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/login-policy/dynamic-multi/query'), query);
};

const executeLoginPolicysDynamicPaginated = <T = LoginPolicy>(params: {
  queryParams: QueryParams<T>;
  offset: Offset<T>;
}) => {
  const query = <LoginPolicysDynamicQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/login-policy/dynamic-multi/query'), query);
};

export default {
  executeLoginPolicy,
  executeLoginPolicyDynamic,
  executeLoginPolicysDynamic,
  executeLoginPolicysDynamicPaginated,

  query: {
    executeLoginPolicy: (params?: FirstParameter<typeof executeLoginPolicy>) => ({
      queryKey: ['LoginPolicy', 'executeLoginPolicy', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await executeLoginPolicy(queryKey.slice().pop()))?.data,
    }),
    executeLoginPolicyDynamic: (params?: FirstParameter<typeof executeLoginPolicyDynamic>) => ({
      queryKey: ['LoginPolicy', 'executeLoginPolicyDynamic', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await executeLoginPolicyDynamic(queryKey.slice().pop()))?.data,
    }),
    executeLoginPolicysDynamic: (params?: FirstParameter<typeof executeLoginPolicysDynamic>) => ({
      queryKey: ['LoginPolicy', 'executeLoginPolicysDynamic', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await executeLoginPolicysDynamic(queryKey.slice().pop()))?.data,
    }),
    executeLoginPolicysDynamicPaginated: (params?: FirstParameter<typeof executeLoginPolicysDynamicPaginated>) => ({
      queryKey: ['LoginPolicy', 'executeLoginPolicysDynamicPaginated', params],
      queryFn: async ({ queryKey, pageParam }: { queryKey: readonly any[]; pageParam?: any }) =>
        (
          await executeLoginPolicysDynamicPaginated({
            ...queryKey.slice().pop(),
            offset: pageParam || queryKey.slice().pop().offset,
          })
        )?.data,
    }),
  },
};
