import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { UserModule } from 'src/modules/user/user.module'
import { JwtStrategy } from 'src/strategy/jwt.strategy'
import { JwtModule } from '@nestjs/jwt'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { getJwtConfig } from 'src/config/jwt.config'

@Module({
	imports: [
		UserModule,
    ConfigModule,
		JwtModule.registerAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getJwtConfig
		})
	],
	controllers: [AuthController],
	providers: [AuthService, JwtStrategy]
})
export class AuthModule {}
