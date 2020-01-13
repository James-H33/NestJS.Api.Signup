import { Module } from '@nestjs/common';
import { UserController } from './user/User.controller';
import { ServicesModule } from 'src/services/Services.module';

@Module({
    imports: [ 
        ServicesModule
    ],
    providers: [
        UserController
    ]
})
export class ControllersModule {}