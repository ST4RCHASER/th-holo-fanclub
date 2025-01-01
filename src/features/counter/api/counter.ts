import { queryOptions, useQuery } from '@tanstack/react-query'

import { emptyApi } from '@/lib/apiClient'
import { QueryConfig } from '@/lib/reactQuery'


export interface CounterResponse {
    id: number
    name: string
    count: number
    created_at: string
    updated_at: string
    namespace_id: number
    namespace: CounterNamespace
}

export interface CounterNamespace {
    id: number
    name: string
    created_at: string
    updated_at: string
}


export const getCounter = (id: string): Promise<CounterResponse> => {
    return emptyApi.get(`https://api.counterapi.dev/v1/${id}/counter/up`).then((res) => res.data)
}

export const getCounterQueryOptions = (id: string) => {
    return queryOptions({
        queryKey: ['counter'],
        queryFn: () => getCounter(id),
    })
}

type UseCounterOptions = {
    queryConfig?: QueryConfig<typeof getCounterQueryOptions>
    id: string
}

export const useCounter = ({ queryConfig, id }: UseCounterOptions = { id: 'holofanth' }) => {
    return useQuery({
        ...getCounterQueryOptions(id),
        ...queryConfig,
    })
}
