export type Objectives = {
    baron: ObjectDefine
    champion: ObjectDefine
    dragon: ObjectDefine
    inhibitor: ObjectDefine
    riftHerald: ObjectDefine
    tower: ObjectDefine
}

type ObjectDefine = {
    first: Boolean
    kills: number
}

const ObjectivesInitialize:ObjectDefine = {
    first : false,
    kills : 0
}
export const ObjectDefineInitailze:Objectives = {
    baron: ObjectivesInitialize,
    champion: ObjectivesInitialize,
    dragon: ObjectivesInitialize,
    inhibitor: ObjectivesInitialize,
    riftHerald: ObjectivesInitialize,
    tower: ObjectivesInitialize
}
