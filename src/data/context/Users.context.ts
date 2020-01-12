import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { SignupUserDto } from 'src/controllers/models';

@Injectable()
export class UsersContext {
  constructor(@InjectModel('User') private readonly userModel: Model<SignupUserDto>) {}

  async create(user: SignupUserDto): Promise<boolean> {
    const createdUser = new this.userModel(user);
    return await createdUser.save();
  }

  async findAll(): Promise<SignupUserDto[]> {
    return await this.userModel.find().exec();
  }
}
