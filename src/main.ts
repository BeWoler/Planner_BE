import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as cookieParser from 'cookie-parser'
import { getCorsConfig } from './config/cors.config'
import { PORT } from './constants'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	app.setGlobalPrefix('api')
	app.use(cookieParser())
	app.enableCors(getCorsConfig)

	await app.listen(PORT)
}
bootstrap()
