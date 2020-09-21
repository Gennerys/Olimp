import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
//import * as bcrypt from 'bcrypt';
//import * as _ from 'lodash';

import { ITeam } from './interfaces/team.interface';
import { Model } from 'mongoose';

@Injectable()
export class TeamService {
    constructor(@InjectModel('Team') private readonly teamModel: Model<ITeam>){}


}
