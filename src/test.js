const users =[
    {firstname:"Akshay", lastname:"Saini", age:26},
    {firstname:"Donald", lastname:"Trump", age:75},
    {firstname:"Elon", lastname:"Musk", age:50},
    {firstname:"Deepika", lastname:"Padukone", age:26},
];

const output=users.reduce((acc,curr)=>{
if(curr.age<30){
    acc=curr.firstname
}
return acc;
},[])

console.log(output)