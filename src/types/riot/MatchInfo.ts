import { MatchPlayerInfo, MatchPlayerInfoInitialize } from "./MatchPlayerInfo"
import { TeamInfo, TeamInfoInitialize } from "./TeamInfo"




export type MatchInfo = {
    gameCreation: number
    gameDuration: number
    gameEndTimestamp: number
    gameId: number
    gameMode: string
    gameName: string
    gameStartTimestamp: number
    gameType: string
    gameVersion: string
    mapId: number
    participants: MatchPlayerInfo[]
    platformId: string
    queueId: number
    teams: TeamInfo[]
    tournamentCode: string
 }
export const MatchInfoInitialize:MatchInfo =  {
    gameCreation: 1639204804000,
    gameDuration: 728,
    gameEndTimestamp: 1639205592776,
    gameId: 5619101611,
    gameMode: "ARAM",
    gameName: "teambuilder-match-5619101611",
    gameStartTimestamp: 1639204864716,
    gameType: "MATCHED_GAME",
    gameVersion: "11.24.413.2485",
    mapId: 12,
    participants: [MatchPlayerInfoInitialize],
    platformId: "KR",
    queueId: 450,
    teams: [TeamInfoInitialize],
    tournamentCode: ""
}
