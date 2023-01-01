const authorList = [{
  saying: 'Evil enters like a needle and spreads like an oak tree.',
  source: 'Ethiopian Proverb',
  point: 15
},
{
  saying: 'There is no shame in not knowing; the shame lies in not finding out.',
  source: 'Russian Proverb',
  point: 25
},
{
  saying: 'Measure a thousand times and cut once. ',
  source: 'Turkish Proverb',
  point: 45
},
{
  saying: 'Examine what is said, not who speaks.',
  source: 'Arab Proverb',
  point: 5
},
{
  saying: 'Two wrongs do not make a right. ',
  source: 'English Proverb',
  point: 55
},
{
  saying: 'A large chair does not make a king. ',
  source: 'Sudanese Proverb',
  point: 15
},
{
  saying: 'Instruction in youth is like engraving in stone. ',
  source: 'Moroccan Proverb',
  point: 25
}];

let total = 0;
let turn = 0;

function bas(){
  let sayi = Math.round(Math.random() * authorList.length);
  let randomSaying = authorList[sayi].saying;
  let randomSource = authorList[sayi].source;
  let randomTotal = authorList[sayi].point;
  document.getElementById('proverb').innerHTML = randomSaying;
  document.getElementById('teller').innerHTML = randomSource;
  total += randomTotal;
  document.getElementById('score').innerHTML = `Score: ${total}`;
  turn += 1;
  document.getElementById('turn').innerHTML = `Turn: ${turn}`;
}

const images = document.getElementsByTagName("img");
function resim(el) {
  el.style.border = "3px solid red";
  el.style.boxshadow = "1px 2px black";
}

function geriAl(){
  document.getElementById('teller').innerHTML = '---';
  document.getElementById('proverb').innerHTML = '---';
  document.getElementById('score').innerHTML = 0;
  document.getElementById('turn').innerHTML = 0;
  el.style.border = "0px solid white";
  if(total !== 100){ alert('Try again!')};
}



