export const barData1 = [
    {sequence: 1, earnings: 13000 ,name:"데이터1"},
    {sequence: 2, earnings: 16500 ,name:"데이터2"},
    {sequence: 3, earnings: 14250 ,name:"데이터3"},
    {sequence: 4, earnings: 19000 ,name:"데이터4"}
];

export const barData2 = [
    {sequence: 1, earnings: 19000 ,name:"데이터1"},
    {sequence: 2, earnings: 16500 ,name:"데이터2"},
    {sequence: 3, earnings: 4500 ,name:"데이터3"},
    {sequence: 4, earnings: 9900 ,name:"데이터4"}
];

 const barData3 = [
    {sequence: 1, earnings: 3222 ,name:"데이터1"},
    {sequence: 2, earnings: 8996 ,name:"데이터2"},
    {sequence: 3, earnings: 5662 ,name:"데이터3"},
    {sequence: 4, earnings: 13000 ,name:"데이터4"}
];

export const barProps1 = {
    data : barData1,
    type: "Bar",
    x:"sequence",
    y:"earnings",
    tickFormat:(x) => (`$${x / 1000}k`)
}

export const barProps2 = {
    data : barData2,
    type: "Bar",
    x:"sequence",
    y:"earnings",
}

export const barProps3 = {
    data : barData3,
    type: "Bar",
    x:"sequence",
    y:"earnings",
}