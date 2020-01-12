import { SignupUserDto } from '../../controllers/models';

export interface IUserService {
    SignupUser(user: SignupUserDto): Promise<boolean>;
}