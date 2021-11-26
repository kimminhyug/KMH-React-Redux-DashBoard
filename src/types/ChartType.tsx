// export type ChartType = "BAR" | "LINE";

export const ChartType = {
    BAR: 'Bar',
    LINE: 'Line'
  } as const;
export type ChartTypes = typeof ChartType[keyof typeof ChartType]; 

export type chart = {
    type: ChartTypes;
    data:[any]
}

// export enum ChartType {
//     Bar,
//     Line,
// }
   
export interface bar extends chart{
    
    
}



export interface Line extends chart{
    
    
}

// let cd: Bar = {
//     type: Chart.Bar,
//     data: {x:0,y:0},
//   };