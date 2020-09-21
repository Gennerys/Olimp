import { IFullname } from "../interfaces/fullname.interface";
import { IAvatar } from "../interfaces/avatar.interface";
import { IAddress } from "../interfaces/address.interface";
import { ILocale } from "../interfaces/locale.interface";
import { ISocialMedia } from "../interfaces/socialMedia.interface";


export class CreateUserDto{
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