const num= 400;//it is number 
console.log(num);

const numberData = new Number(400);//it is use to conferm the number
console.log(numberData);


const numberDate = new Number(400);//it is use to conferm the number
console.log(numberDate.toString().length);//converting the number into string


const fixData = 659.00;
console.log(fixData.toFixed());//it is use to remove the dasimalPont


const fixDataInfo = 657.999;//it is used for round of values
console.log(fixDataInfo.toPrecision(4));

const fix = 100000000000;//it is used to devied value with commas
console.log(fix.toLocaleString());