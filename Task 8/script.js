/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klasę "Calculator", kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą;
subtraction() - priima du skaičius ir grąžina jų skirtumą;
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
class Calculator{
  constructor(a, b){
    this.a = a;
    this.b = b;
  }
  sum(){
    return this.a + this.b;
  }
  subtraction(){
    return this.a - this.b;
  }
  multiplication(){
    return this.a * this.b;
  }
  division(){
    return this.a / this.b;
  }
}