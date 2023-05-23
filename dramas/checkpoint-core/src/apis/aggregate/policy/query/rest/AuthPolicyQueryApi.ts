import { FirstParameter, Offset, QueryParams, QueryResponse } from '@nara-way/accent';
import axios from 'axios';
import { AuthPolicy } from '~/models';
import { AuthPolicyDynamicQuery, AuthPolicyQuery, AuthPolicysDynamicQuery } from '../query';

const url = (path: string) => `/api/checkpoint/aggregate/policy${path}`;

const executeAuthPolicy = <T = AuthPolicy>(params: { authPolicyId: string }) => {
  const query = <AuthPolicyQuery>{ ...params };
  return axios.post<QueryResponse<T>>(url('/auth-policy/query'), query);
};

const executeAuthPolicyDynamic = <T = AuthPolicy>(params: { queryParams: QueryParams<T> }) => {
  const query = <AuthPolicyDynamicQuery>{ ...params };
  return axios.post<QueryResponse<T | undefined>>(url('/auth-policy/dynamic-single/query'), query);
};

const executeAuthPolicysDynamic = <T = AuthPolicy>(params: { queryParams: QueryParams<T> }) => {
  const query = <AuthPolicysDynamicQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/auth-policy/dynamic-multi/query'), query);
};

const executeAuthPolicysDynamicPaginated = <T = AuthPolicy>(params: {
  queryParams: QueryParams<T>;
  offset: Offset<T>;
}) => {
  const query = <AuthPolicysDynamicQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/auth-policy/dynamic-multi/query'), query);
};

export default {
  executeAuthPolicy,
  executeAuthPolicyDynamic,
  executeAuthPolicysDynamic,
  executeAuthPolicysDynamicPaginated,

  query: {
    executeAuthPolicy: (params?: FirstParameter<typeof executeAuthPolicy>) => ({
      queryKey: ['AuthPolicy', 'executeAuthPolicy', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await executeAuthPolicy(queryKey.slice().pop()))?.data,
    }),
    executeAuthPolicyDynamic: (params?: FirstParameter<typeof executeAuthPolicyDynamic>) => ({
      queryKey: ['AuthPolicy', 'executeAuthPolicyDynamic', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await executeAuthPolicyDynamic(queryKey.slice().pop()))?.data,
    }),
    executeAuthPolicysDynamic: (params?: FirstParameter<typeof executeAuthPolicysDynamic>) => ({
      queryKey: ['AuthPolicy', 'executeAuthPolicysDynamic', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await executeAuthPolicysDynamic(queryKey.slice().pop()))?.data,
    }),
    executeAuthPolicysDynamicPaginated: (params?: FirstParameter<typeof executeAuthPolicysDynamicPaginated>) => ({
      queryKey: ['AuthPolicy', 'executeAuthPolicysDynamicPaginated', params],
      queryFn: async ({ queryKey, pageParam }: { queryKey: readonly any[]; pageParam?: any }) =>
        (
          await executeAuthPolicysDynamicPaginated({
            ...queryKey.slice().pop(),
            offset: pageParam || queryKey.slice().pop().offset,
          })
        )?.data,
    }),
  },
};
