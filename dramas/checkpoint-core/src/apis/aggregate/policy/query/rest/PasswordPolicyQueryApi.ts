import { FirstParameter, Offset, QueryParams, QueryResponse } from '@nara-way/accent';
import axios from 'axios';
import { PasswordPolicy } from '~/models';
import { PasswordPolicyDynamicQuery, PasswordPolicyQuery, PasswordPolicysDynamicQuery } from '../query';

const url = (path: string) => `/api/checkpoint/aggregate/policy${path}`;

const executePasswordPolicy = <T = PasswordPolicy>(params: { passwordPolicyId: string }) => {
  const query = <PasswordPolicyQuery>{ ...params };
  return axios.post<QueryResponse<T>>(url('/password-policy/query'), query);
};

const executePasswordPolicyDynamic = <T = PasswordPolicy>(params: { queryParams: QueryParams<T> }) => {
  const query = <PasswordPolicyDynamicQuery>{ ...params };
  return axios.post<QueryResponse<T | undefined>>(url('/password-policy/dynamic-single/query'), query);
};

const executePasswordPolicysDynamic = <T = PasswordPolicy>(params: { queryParams: QueryParams<T> }) => {
  const query = <PasswordPolicysDynamicQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/password-policy/dynamic-multi/query'), query);
};

const executePasswordPolicysDynamicPaginated = <T = PasswordPolicy>(params: {
  queryParams: QueryParams<T>;
  offset: Offset<T>;
}) => {
  const query = <PasswordPolicysDynamicQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/password-policy/dynamic-multi/query'), query);
};

export default {
  executePasswordPolicy,
  executePasswordPolicyDynamic,
  executePasswordPolicysDynamic,
  executePasswordPolicysDynamicPaginated,

  query: {
    executePasswordPolicy: (params?: FirstParameter<typeof executePasswordPolicy>) => ({
      queryKey: ['PasswordPolicy', 'executePasswordPolicy', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await executePasswordPolicy(queryKey.slice().pop()))?.data,
    }),
    executePasswordPolicyDynamic: (params?: FirstParameter<typeof executePasswordPolicyDynamic>) => ({
      queryKey: ['PasswordPolicy', 'executePasswordPolicyDynamic', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await executePasswordPolicyDynamic(queryKey.slice().pop()))?.data,
    }),
    executePasswordPolicysDynamic: (params?: FirstParameter<typeof executePasswordPolicysDynamic>) => ({
      queryKey: ['PasswordPolicy', 'executePasswordPolicysDynamic', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await executePasswordPolicysDynamic(queryKey.slice().pop()))?.data,
    }),
    executePasswordPolicysDynamicPaginated: (
      params?: FirstParameter<typeof executePasswordPolicysDynamicPaginated>,
    ) => ({
      queryKey: ['PasswordPolicy', 'executePasswordPolicysDynamicPaginated', params],
      queryFn: async ({ queryKey, pageParam }: { queryKey: readonly any[]; pageParam?: any }) =>
        (
          await executePasswordPolicysDynamicPaginated({
            ...queryKey.slice().pop(),
            offset: pageParam || queryKey.slice().pop().offset,
          })
        )?.data,
    }),
  },
};
