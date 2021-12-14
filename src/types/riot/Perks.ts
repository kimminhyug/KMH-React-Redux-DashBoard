export type Perks  = {
    statPerks : StatPerks
    styles : Styles
}

export type StatPerks = {
    defense: number
    flex: number
    offense: number
}
export type Styles = {
    description: string
    selections: Selections[]
    style: number
}

type Selections = {
    perk: number
    var1: number
    var2: number
    var3: number
}

export const StatPerksInitialize = {
    defense: 0,
    flex: 0,
    offense: 0,
}

export const SelectionsInitialze = {
    perk: 0,
    var1: 0,
    var2: 0,
    var3: 0,
}

const StylesInitialize = {
    description: '',
    selections: [SelectionsInitialze],
    style: 0
}

export const PerksInitialize = {
    statPerks : StatPerksInitialize,
    styles : StylesInitialize
}