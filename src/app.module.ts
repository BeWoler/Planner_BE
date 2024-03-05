import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './auth/auth.module'
import { UserModule } from './modules/user/user.module'

@Module({
	imports: [ConfigModule.forRoot(), AuthModule, UserModule]
})
export class AppModule {}
