import * as mongoose from 'mongoose';



export const TeamSchema = new mongoose.Schema({
    id: {type: String, index: true, unique: true},
    teamName: {type: String, required: true, unique: true},
    rating : {type : Number},
    players: { type: [mongoose.Schema.Types.ObjectId], ref: 'User'},
    matchCount: { type: Number},
    tournamentCount: { type: Number}
    //locale и активные игроки(?) и аватар + хедер
});
