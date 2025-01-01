import { useMutation } from '@tanstack/react-query'

import { api } from '@/lib/apiClient'
import { MutationConfig } from '@/lib/reactQuery'

type submitBoardType = {
    type: string,
    talent: string,
    name: string,
    image: string,
    drawImage: string,
    message: string,
}

export const submitBoard = ({
    body,
}: {
    body: submitBoardType
}) => {
    return api.post(`https://holofc-2024-eg1.yue-n-2.workers.dev`, body)
}

type createSubmitMutationOptions = {
    mutationConfig?: MutationConfig<typeof submitBoard>
}

export const useSubmitBoard = ({
    mutationConfig,
}: createSubmitMutationOptions = {}) => {
    return useMutation({
        ...mutationConfig,
        mutationKey: ['submitBoard'],
        mutationFn: ({ body }) =>
            submitBoard({ body }),
    })
}
