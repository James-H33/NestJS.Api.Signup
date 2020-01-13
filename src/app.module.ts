import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './controllers/user/User.controller';
import { ControllersModule } from './controllers/Controllers.module';
import { ServicesModule } from './services/Services.module';

@Module({
  imports: [
    ServicesModule,
    ControllersModule
  ],
  controllers: [
    AppController, 
    UserController
  ],
  providers: [
    AppService
  ],
})
export class AppModule {}
