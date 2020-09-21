import * as mongoose from 'mongoose';

import { genderEnum } from '../enums/gender.enum';
import { rankEnum } from '../enums/rank.enum';
import { roleEnum } from '../enums/role.enum';
import { supportedLanguages } from '../enums/languages.enum';
import { supportedRegions } from '../enums/regions.enum';


export const UserSchema = new mongoose.Schema({
    id: {type: String, index: true, unique: true},
    email : {type: String, index: true, unique: true},
    steamId :{type: String},
    fullName : {
        firstName : {type: String, default: null},
        lastName : {type: String, default: null},
        middleName : {type: String, default: null}
    },
    age : {type: Number, default: null},
    avatar: {
        small: {type: String},
        medium : {type: String},
        large : {type: String}
    },
    nickname: {type: String},
    gender: {type: String, enum: Object.values(genderEnum)},
    address : {
        country: {type: String, default: null},
        city: {type: String, default: null},
        addressLine1: {type: String, default: null},
        addressLine2: {type: String, default: null}
    },
    rank : {type: String, enum: Object.values(rankEnum)},
    role : {type : [String], enum: Object.values(roleEnum)},
    password : {type: String, required: false},
    locale : {
        language: {type: String, enum: Object.values(supportedLanguages)},
        region : {type: String, enum:Object.values(supportedRegions)}
    },
    rating : {type : Number},
    socialMedia: {
        vk: {type: String, default: null},
        discord : {type: String, default: null},
        dotabuff: {type: String, default: null},
        facebook: {type :String, default: null}
    }
});
