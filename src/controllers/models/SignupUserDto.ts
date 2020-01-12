import { User } from './User';

export class SignupUserDto extends User {
    public password: string;

    constructor(data?: any) {
        super(data);
        
        const defaults = {
            password: '',
            ...data
        };

        this.password = defaults.password;
    }
}