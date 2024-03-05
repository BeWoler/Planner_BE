import { ConfigService } from '@nestjs/config'

export const getCorsConfig = async (
	configService: ConfigService
): Promise<{
	origin: string
	credentials: boolean
	exposeHeaders: string
}> => ({
	origin: configService.get('CLIENT_URL'),
	credentials: true,
	exposeHeaders: 'Content-Disposition'
})
