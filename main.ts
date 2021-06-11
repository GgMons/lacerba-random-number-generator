console.log('\t\t🦐 Ruota estratta 🍙');
function RNG(min: number, max: number){
  const rng = Math.random();
  return Math.trunc(rng * (max-min) + min);
  // rng * (max - min) + min
  // rng = 0 => min
  // rng = 1 => max
}

function RNGSequence(len: number, min: number, max: number){
  if(len>max-min){
    throw new Error(`\tCannot find ${len} numbers between ${min} and ${max}`);
  }
  const res: number[] = [];
  while(res.length < len){
    const rn = RNG(min,max);
    if(res.includes(rn)){
      continue;
    }
    res.push(rn);
  }
return res;
}
const route = ['Bari', 'Cagliari', 'Firenze', 'Genova', 'Milano', 'Napoli', 'Palermo', 'Roma', 'Torino', 'Venezia', 'Nazionale'];
const estrazioni: {[ruota: string]: number[]} = {};

for(const ruota of route){
  const estrazione = RNGSequence(5,1,100);
  estrazioni[ruota] = estrazione; 
}
console.log(JSON.stringify(estrazioni, null, 2));

//console.log(`\t ${ruota} ${myArr}`);

//function rngDec(min: number, max: number, precision: number){
  //if(Number.isInteger(precision)){
    //throw new Error('Precision must be an integer number');
  //} else if(precision < 0){
    //throw new Error('Precision must be a positive number');
  //}
  //const pot = Math.pow(10, precision);
  //return  RNG(min * pot, max * pot)/pot;
//}
//console.log('\t⛷ 🇮🇹 Numeri random con decimali 🚀🇹🇷 🌊');
//console.log(`\t\t\t ${rngDec(5, 10, 0)}`);
//console.log(`\t\t\t ${rngDec(5, 10, 3.5)}`);
//console.log(`\t\t\t ${rngDec(5, 10, -4)}`);
//console.log(`\t\t\t ${rngDec(5, 10, -2.9)}`);
