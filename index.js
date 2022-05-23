function toggler(one, two, three) {
   
    function first(){
     console.log(one)
       function second(){
         console.log(two)
         function third(){
             console.log(three)
         }
         third()
     }
     second()
 }
  return first
}

const toggle = toggler(1, 2, 3);

toggle(); //1

toggle();//

toggle();//




  
