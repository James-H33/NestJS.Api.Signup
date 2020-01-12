import { Controller, Get, Post, HttpStatus, Body } from '@nestjs/common';
import { UserService } from 'src/services/User.service';
import { SignupUserDto } from '../models';

@Controller('signup')
export class SignupController {

    constructor(private userService: UserService) {}

    @Get()
    public async GetModel() {
        const users = await this.userService.GetAll();
        return users;
    }

    @Post()
    public async SignupUser(@Body() user: SignupUserDto) {
        const wasCreated = await this.userService.SignupUser(user);
        
        if (wasCreated) {
            return { status: HttpStatus.CREATED, message: 'Success' };
        } else {
            return { status: HttpStatus.CREATED, message: 'Success' };
        }
    }
}
