//**********THIS********** */
// this is use to find current value
//this not deffine in arrow function
const obj={

   name:"ali",
   price:"30Rs",
   printing : function(){
       console.log(`my value ${this.price}`);
   }
}
obj.printing()
obj.price = "50rs";//changing value 
obj.printing()

