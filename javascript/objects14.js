// symbol use in objects
//const symbolinfo = Symbol("key1");//symbols  with objects


// object leteral

const UserObj ={

   namedata:"Abubakar",
   age:22,
   email:"abubakarjutt123@gmail.com",
   //[symbolinfo]:"myKey"//symbol use in objects with [] squar  braces
}
//console.log(UserObj)
//console.log(UserObj[symbolinfo]);


//***************change value with object*************

//UserObj.email = "chatgpt@gmail.com"

//console.log(UserObj)

//**********freez**************** *
//Object.freeze(UserObj)//it use to freeze over rideing value



//joining object with string

UserObj.greeting = function(){
     
       console.log(`Hollo Mr,${this.namedata}`);
}
console.log(UserObj.greeting());




