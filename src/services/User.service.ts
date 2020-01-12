import { Injectable } from '@nestjs/common';
import { IUserService } from './interfaces/IUser.service';
import { SignupUserDto } from 'src/controllers/models';
import { UsersContext } from 'src/data/context/Users.context';

@Injectable()
export class UserService implements IUserService {
    constructor(private userContext: UsersContext) {}

    public async SignupUser(user: SignupUserDto): Promise<boolean> {
        console.log(user);
        return Promise.resolve(await this.userContext.create(user));
    }

    public async GetAll(): Promise<any[]> {
        return Promise.resolve(await this.userContext.findAll());
    }
}