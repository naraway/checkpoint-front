import { FirstParameter, QueryResponse } from '@nara-way/accent';
import axios from 'axios';
import { FindCitizenSessionTimeoutMinutesQuery } from '../query';

const url = (path: string) => `/api/checkpoint/feature/citizenuser${path}`;

const findCitizenUserTimeoutMinutes = <T = number>(params: { pavilionId: string }) => {
  const query = <FindCitizenSessionTimeoutMinutesQuery>{ ...params };
  return axios.post<QueryResponse<T>>(url('/find-citizen-session-timeout-minutes/query'), query);
};

export default {
  findCitizenUserTimeoutMinutes,

  query: {
    findCitizenUserTimeoutMinutes: (params: FirstParameter<typeof findCitizenUserTimeoutMinutes>) => ({
      queryKey: ['citizenuser', 'findCitizenUserTimeoutMinutes', params],
      queryFn: async ({ queryKey }: { queryKey: any[] }) =>
        (await findCitizenUserTimeoutMinutes(queryKey.slice().pop()))?.data,
    }),
  },
};
