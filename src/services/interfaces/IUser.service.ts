import { SignupUserDto } from '../../controllers/models';

export interface IUserService {
    GetAll(): Promise<any[]>;
    DeleteById(id: string): Promise<boolean>
    SignupUser(user: SignupUserDto): Promise<boolean>;
}