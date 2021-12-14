export type MatchMetadata = {
    dataVersion: string
    matchId: string
    participants: string[]
 }
export const MatchMetadataInitialize:MatchMetadata = {
    dataVersion: '',
    matchId: '',
    participants: []
}