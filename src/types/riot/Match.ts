import { MatchInfo, MatchInfoInitialize } from "./MatchInfo"
import { MatchMetadata, MatchMetadataInitialize } from "./MatchMetadata"





export type Match = {
    info : MatchInfo
    metadata : MatchMetadata
}

export const MatchInitialize:Match =  {
    info : MatchInfoInitialize,
    metadata : MatchMetadataInitialize,
 }