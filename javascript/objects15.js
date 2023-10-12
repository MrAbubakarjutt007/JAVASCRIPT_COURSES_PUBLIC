//singleton object

const obj = new Object();
//console.log(obj)


 obj.id="898data";
 obj.name ="Abubakar";
 obj.age =22;
 //console.log(obj)//singleton object


 //********************OBJECT WITH IN OBJECT************** */
const Getdata ={
          
    name:"ali",

    info:{
    age:22,
    idinfo: "era45",

    data:{
        myname:"abubakar",
        fathername:"abdulghaffar pasha"
    }

    }
}
//console.log(Getdata.info.data.myname)
//*****************MERGING OBJECTS****************** */
const mergeObj1 ={
    key:1,
    id:3,
    name:"Ali"
}
const mergeObj2 ={
      
    email:"aliraza123@gmail.com",
    ipm:"i am web develpor"
}
const mergeObj3 ={
      
    fathername:"abdulghaffar pasha",
    mothername:"ansar nasreen"
}
//const mergeObj3 = {mergeObj1,mergeObj2}

const mergeObj4 = Object.assign({},mergeObj1,mergeObj2,mergeObj3)//assign is use to merge all array
console.log(mergeObj4)














