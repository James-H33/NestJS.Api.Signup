import { Gender } from "../enums";

export class User {
    public id: string;
    public firstName: string;
    public lastName: string;
    public age: number;
    public username: string;
    public gender: Gender;
    public address: string;
    public city: string;
    public zip: string;
    public state: string;
    public photo: string;

    constructor(data?: any) {
        const defaults = {
            _id: '',
            firstName: '',
            lastName: '',
            age: 1,
            username: '',
            gender: '',
            address: '',
            city: '',
            zip: '',
            state: '',
            photo: '',
            ...data
        };

        this.id = defaults.id;
        this.firstName = defaults.firstName;
        this.lastName = defaults.lastName;
        this.age = defaults.age;
        this.username = defaults.username;
        this.gender = this.getGender(defaults.gender);
        this.address = defaults.address;
        this.city = defaults.city;
        this.zip = defaults.zip;
        this.state = defaults.state;
        this.photo = defaults.photo;
    }

    private getGender(value: string) {
        const targetGender = value ? value.toLowerCase() : '';
        const keys = Object.keys(Gender);
        const type = keys.find(item => item.toLowerCase() === targetGender);

        return type && Gender[type] ? Gender[type] : Gender.Male;
    }
}