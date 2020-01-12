import { Module } from '@nestjs/common';
import { SignupController } from './signup/Signup.controller';
import { ServicesModule } from 'src/services/Services.module';

@Module({
    imports: [ 
        ServicesModule
    ],
    providers: [
        SignupController
    ]
})
export class ControllersModule {}