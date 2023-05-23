import { FirstParameter, Offset, QueryParams, QueryResponse } from '@nara-way/accent';
import axios from 'axios';
import { UsernamePolicy } from '~/models';
import { UsernamePolicyDynamicQuery, UsernamePolicyQuery, UsernamePolicysDynamicQuery } from '../query';

const url = (path: string) => `/api/checkpoint/aggregate/policy${path}`;

const executeUsernamePolicy = <T = UsernamePolicy>(params: { usernamePolicyId: string }) => {
  const query = <UsernamePolicyQuery>{ ...params };
  return axios.post<QueryResponse<T>>(url('/username-policy/query'), query);
};

const executeUsernamePolicyDynamic = <T = UsernamePolicy>(params: { queryParams: QueryParams<T> }) => {
  const query = <UsernamePolicyDynamicQuery>{ ...params };
  return axios.post<QueryResponse<T | undefined>>(url('/username-policy/dynamic-single/query'), query);
};

const executeUsernamePolicysDynamic = <T = UsernamePolicy>(params: { queryParams: QueryParams<T> }) => {
  const query = <UsernamePolicysDynamicQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/username-policy/dynamic-multi/query'), query);
};

const executeUsernamePolicysDynamicPaginated = <T = UsernamePolicy>(params: {
  queryParams: QueryParams<T>;
  offset: Offset<T>;
}) => {
  const query = <UsernamePolicysDynamicQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/username-policy/dynamic-multi/query'), query);
};

export default {
  executeUsernamePolicy,
  executeUsernamePolicyDynamic,
  executeUsernamePolicysDynamic,
  executeUsernamePolicysDynamicPaginated,

  query: {
    executeUsernamePolicy: (params?: FirstParameter<typeof executeUsernamePolicy>) => ({
      queryKey: ['UsernamePolicy', 'executeUsernamePolicy', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await executeUsernamePolicy(queryKey.slice().pop()))?.data,
    }),
    executeUsernamePolicyDynamic: (params?: FirstParameter<typeof executeUsernamePolicyDynamic>) => ({
      queryKey: ['UsernamePolicy', 'executeUsernamePolicyDynamic', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await executeUsernamePolicyDynamic(queryKey.slice().pop()))?.data,
    }),
    executeUsernamePolicysDynamic: (params?: FirstParameter<typeof executeUsernamePolicysDynamic>) => ({
      queryKey: ['UsernamePolicy', 'executeUsernamePolicysDynamic', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await executeUsernamePolicysDynamic(queryKey.slice().pop()))?.data,
    }),
    executeUsernamePolicysDynamicPaginated: (
      params?: FirstParameter<typeof executeUsernamePolicysDynamicPaginated>,
    ) => ({
      queryKey: ['UsernamePolicy', 'executeUsernamePolicysDynamicPaginated', params],
      queryFn: async ({ queryKey, pageParam }: { queryKey: readonly any[]; pageParam?: any }) =>
        (
          await executeUsernamePolicysDynamicPaginated({
            ...queryKey.slice().pop(),
            offset: pageParam || queryKey.slice().pop().offset,
          })
        )?.data,
    }),
  },
};
