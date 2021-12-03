export const lineData1 = [
    {month: "Jan", data: 13000 ,name:"데이터1"},
    {month: "Feb", data: 16500 ,name:"데이터2"},
    {month: "Mar", data: 14250 ,name:"데이터3"},
    {month: "Apr", data: 19000 ,name:"데이터4"},
    {month: "May", data: 23000 ,name:"데이터5"},
    {month: "Jun", data: 10000 ,name:"데이터6"},
    {month: "Jul", data: 13000 ,name:"데이터7"},
    {month: "Aug", data: 12500 ,name:"데이터8"},
    {month: "Sep", data: 11000 ,name:"데이터9"},
    {month: "Oct", data: 9000 ,name:"데이터10"},
    {month: "Nov", data: 6000 ,name:"데이터11"},
    {month: "Dec", data: 10000 ,name:"데이터12"},
    
];

export const lineProps1 = {
    data : lineData1,
    type: "Line",
    x:"month",
    y:"data",
}

const data = [
    { x: "Jan", y: 43 },
    { x: "Feb", y: 44 },
    { x: "Mar", y: 47 },
    { x: "Apr", y: 51 },
    { x: "May", y: 57 },
    { x: "Jun", y: 62 },
    { x: "Jul", y: 67 },
    { x: "Aug", y: 68 },
    { x: "Sep", y: 63 },
    { x: "Oct", y: 54 },
    { x: "Nov", y: 47 },
    { x: "Dec", y: 42 }
  ];
  const temperatures = data.map(({ y }) => y);
  const min = Math.min(...temperatures);
  const max = Math.max(...temperatures);