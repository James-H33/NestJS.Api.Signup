import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SignupController } from './controllers/signup/Signup.controller';
import { ControllersModule } from './controllers/Controllers.module';
import { ServicesModule } from './services/Services.module';

@Module({
  imports: [
    ServicesModule,
    ControllersModule
  ],
  controllers: [
    AppController, 
    SignupController
  ],
  providers: [
    AppService
  ],
})
export class AppModule {}
