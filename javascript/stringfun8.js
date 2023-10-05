const InTo = "Ali";
const repodata =50;

//console.log(InTo+repodata+"it my Repo");//old method to use
//console.log(`my name is ${InTo} and my git repo ${repodata}`);//new method to use sting.
const datainfo = new String("  AliRaza  ");
//console.log(datainfo);
//***************important Function***********

console.log(datainfo[2]);//it use to find string
console.log(datainfo.length);//it is used to find length of string
console.log(datainfo.toUpperCase());//convert string into upperCase
console.log(datainfo.toLowerCase());//convert string into LowerCase
console.log(datainfo.charAt(2));//it is used to find chrater 
console.log(datainfo.indexOf('R'));//it is used to find the index of value
console.log(datainfo.substring(0, 4));//it is used to find thre part of string
console.log(datainfo.trim());//it is use to remove the spaces
console.log(datainfo.slice(-7,2));//it is use to chack the slice of string
const FunDataInfo = "my name is Ali you now";
console.log(FunDataInfo.replace('Ali', 'Abubakar'));
console.log(FunDataInfo.includes('Ali'));
console.log(FunDataInfo.split('_'));


