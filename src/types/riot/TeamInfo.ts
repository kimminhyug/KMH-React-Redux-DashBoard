import { Objectives, ObjectDefineInitailze } from "./Objectives"

export type TeamInfo = {
    bans: any[]
    objectives: Objectives
    teamId: number
    win: Boolean
 }

 export const TeamInfoInitialize:TeamInfo = {
    bans: [],
    objectives: ObjectDefineInitailze,
    teamId: 0,
    win: false,
 }