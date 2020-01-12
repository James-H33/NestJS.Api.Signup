import { Module } from '@nestjs/common';
import { UserService } from './User.service';
import { DataModule } from 'src/data/Data.module';

@Module({
    imports: [
        DataModule
    ],
    providers: [
        UserService
    ],
    exports: [
        UserService
    ]
})
export class ServicesModule {}
