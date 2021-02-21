// Ex3.1 - Growth Of population
// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly
// increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the
// town. How many years does the town need to see its population greater or equal to p = 1200
// inhabitants?
let population= (p=1000)=>{
 let  counter=0;
  while (p<1200){
   p= Math.ceil((p*1.02)+50);
    counter++;
  }
  console.log(`the population is ${p}`);
  return counter;
}


console.log(population());