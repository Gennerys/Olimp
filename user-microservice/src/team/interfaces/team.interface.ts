import { Document } from 'mongoose';
import * as mongoose from 'mongoose';


export interface ITeam extends Document {
    readonly id: string;
    teamName: string;
    rating : number;
    players?: mongoose.Schema.Types.ObjectId[];
}