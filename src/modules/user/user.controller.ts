import {
	Body,
	Controller,
	Get,
	HttpCode,
	Put,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { UserService } from './user.service'
import { CurrentUser } from 'src/decorators/user.decorator'
import { Auth } from 'src/decorators/auth.decorator'
import { UserDto } from './dto/user.dto'

@Controller('user/profile')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Get()
	@Auth()
	async profile(@CurrentUser('id') id: string) {
		return this.userService.getProfile(id)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Put()
	@Auth()
	async updateProfile(@CurrentUser('id') id: string, @Body() dto: UserDto) {
		return this.userService.update(id, dto)
	}
}
