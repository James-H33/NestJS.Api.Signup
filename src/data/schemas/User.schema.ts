import { Schema } from 'mongoose';

export const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    username: String,
    age: Number,
    gender: String,
    password: String,
    address: String,
    city: String,
    zip: String,
    state: String,
    photo: String
});