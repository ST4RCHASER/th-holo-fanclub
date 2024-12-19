import { useMutation } from '@tanstack/react-query'

import { api } from '@/lib/apiClient'
import { MutationConfig } from '@/lib/reactQuery'

export const uploadImages = async (
	{
		body,
	}: {
		body: File[]
	},
): Promise<string[]> => {
	const form = new FormData()
	body.forEach(file => {
		form.append('file', file)
	})
	const uploaded: string[] = []
	for (const file of body) {
		const form = new FormData()
		form.append('file', file)
		form.append('uploadType', '0')
		const up = await api.post(`https://up.m1r.ai/upload`, form)
		// @ts-expect-error - url is a valid property
		uploaded.push(up?.url || null)
	}
	return uploaded
}

type uploadImageMutationOptions = {
	mutationConfig?: MutationConfig<typeof uploadImages>
}

export const useUploadImages = ({
	mutationConfig,
}: uploadImageMutationOptions = {}) => {
	return useMutation({
		...mutationConfig,
		mutationKey: ['uploadImages'],
		mutationFn: ({ body }) => uploadImages({ body }),
	})
}
