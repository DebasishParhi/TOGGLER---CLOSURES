function toggler(one, two, three) {
   let i=0
    function first(){
       i++
     console.log(i)
 }
  return first
}

const toggle = toggler(1, 2, 3);

toggle(); //1

toggle();//

toggle();//
