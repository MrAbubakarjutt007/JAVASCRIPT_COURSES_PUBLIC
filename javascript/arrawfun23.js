//*******arraw function*********** */
//explict  arrow function with return
const fun=(n1,n2)=>{

       return n1+n2       
}

console.log(fun(2,3));
//****ARROW FUNCTION WITH SINGLE LINE */
//Single line arrow function using no return
// code  in single line 
//object return with({object})

const FunctionInfo=(a1,a2)=> (a1+a2) 
console.log(FunctionInfo(5,3));
//********object return********** */

const FunctionData=()=> ({
    name:"abubakar",
    age:22
}) 
console.log(FunctionData());