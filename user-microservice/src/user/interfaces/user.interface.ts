import { Document } from 'mongoose';
import { IAddress } from './address.interface';
import { IFullname } from './fullname.interface';
import { IAvatar } from './avatar.interface';
import { ILocale } from './locale.interface';
import { ISocialMedia } from './socialMedia.interface';


export interface IUser extends Document {
    readonly id: string;
    email: string;
    steamId: string;
    fullName: IFullname;
    age: number;
    avatar: IAvatar;
    nickname: string;
    gender: string;
    address: IAddress;
    rank: string;
    roles: Array<string>;
    password: string;
    locale: ILocale;
    rating: number;
    socialMedia: ISocialMedia;
}