import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './auth/auth.module'
import { UserModule } from './modules/user/user.module'
import { TaskModule } from './modules/task/task.module'

@Module({
	imports: [ConfigModule.forRoot(), AuthModule, UserModule, TaskModule]
})
export class AppModule {}
