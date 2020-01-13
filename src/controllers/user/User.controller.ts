import { Controller, Get, Post, HttpStatus, Body, Delete, Param, ParamData, Query, HttpCode, HttpException } from '@nestjs/common';
import { UserService } from 'src/services/User.service';
import { SignupUserDto } from '../models';

@Controller('user')
export class UserController {

    constructor(private userService: UserService) {}

    @Get()
    public async GetModel() {
        const users = await this.userService.GetAll();
        return users;
    }

    @Post('signup')
    public async Signup(@Body() user: SignupUserDto) {
        const wasCreated = await this.userService.SignupUser(user);
        
        if (wasCreated) {
            return { status: HttpStatus.CREATED, message: 'Success' };
        } else {
            return { status: HttpStatus.BAD_REQUEST, message: 'Failed' };
        }
    }

    @Delete(':id')
    public async DeleteById(@Param('id') id: string) {
        var wasDeleted = await this.userService.DeleteById(id);

        if (wasDeleted) {
            return { status: HttpStatus.OK, message: 'Success' };
        } else {
            return new HttpException("Internal Server Error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
