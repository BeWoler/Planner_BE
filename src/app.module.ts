import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './auth/auth.module'
import { UserModule } from './modules/user/user.module'
import { TaskModule } from './modules/task/task.module'
import { TimeBlockModule } from './modules/time-block/time-block.module'
import { PomodoroModule } from './modules/pomodoro/pomodoro.module'

@Module({
	imports: [
		ConfigModule.forRoot(),
		AuthModule,
		UserModule,
		TaskModule,
		TimeBlockModule,
		PomodoroModule
	]
})
export class AppModule {}
