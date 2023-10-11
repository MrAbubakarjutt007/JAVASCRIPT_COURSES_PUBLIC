const myArray= [1,2,3,4,5,6];
const myInfo= [8,9,10];
//console.log(myArray)
//console.log(myArray.push(myInfo))
// const mydata = myArray.concat(myInfo)
// console.log(mydata)

// const mydata = [...myArray,...myInfo]
// console.log(mydata)

const dataAre = [1,2,[3,4],[7,8]]

const mydata = dataAre.flat(Infinity)//it use to convert all array in single array
console.log(mydata)

console.log(Array.isArray(dataAre))//chack it is array or Not
console.log(Array.from(mydata))//gating arrays using from

let data1 = "ali";
let data2 = "Raza";
let data3 = "Omar";

console.log(Array.of(data1,data2,data3));//it use to convert data into array.