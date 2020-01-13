import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { SignupUserDto } from 'src/controllers/models';
import { User } from 'src/controllers/models/User';

@Injectable()
export class UsersContext {
  constructor(@InjectModel('User') private readonly userModel: Model<any>) {}

  public async create(user: SignupUserDto): Promise<boolean> {
    const createdUser = new this.userModel(user);
    return await createdUser.save();
  }

  public async findAll(): Promise<SignupUserDto[]> {
    return await this.userModel.find().exec();
  }

  public async findOne(id: string): Promise<User> {
    return await this.userModel.findOne({ _id: id }).exec();
  }

  public async deleteById(id: string): Promise<boolean> {
    try {
      const request = this.userModel.findByIdAndDelete(id).exec();
      const user = await request;
      return user ? true : false;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
}
