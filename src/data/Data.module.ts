import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersContext } from './context/Users.context';
import { Schemas } from './schemas/Schemas';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost/nest'),
        MongooseModule.forFeature(Schemas)
    ],
    providers: [
        UsersContext
    ],
    exports: [
        UsersContext
    ]
})
export class DataModule { }