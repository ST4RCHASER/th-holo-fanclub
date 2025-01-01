import { queryOptions, useQuery } from '@tanstack/react-query'

import { api } from '@/lib/apiClient'
import { QueryConfig } from '@/lib/reactQuery'


export const getSubmit = (): Promise<unknown[]> => {
    return api.get('/submits')
}

export const getSubmitQueryOptions = () => {
    return queryOptions({
        queryKey: ['submits'],
        queryFn: () => getSubmit(),
    })
}

type UseSubmitTypeOptions = {
    queryConfig?: QueryConfig<typeof getSubmitQueryOptions>
}

export const useSubmit = ({ queryConfig }: UseSubmitTypeOptions = {}) => {
    return useQuery({
        ...getSubmitQueryOptions(),
        ...queryConfig,
    })
}
