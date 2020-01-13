import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { IUserService } from './interfaces/IUser.service';
import { SignupUserDto } from 'src/controllers/models';
import { UsersContext } from 'src/data/context/Users.context';

@Injectable()
export class UserService implements IUserService {
    constructor(private userContext: UsersContext) {}

    public async SignupUser(user: SignupUserDto): Promise<boolean> {
        return await this.userContext.create(user);
    }

    public async DeleteById(id: string): Promise<boolean> {
        const userFound = await this.userContext.findOne(id);

        if (!userFound) {
            throw new HttpException('User not found.', HttpStatus.BAD_REQUEST);
        }

        return await this.userContext.deleteById(id);
    }

    public async GetAll(): Promise<any[]> {
        return Promise.resolve(await this.userContext.findAll());
    }
}