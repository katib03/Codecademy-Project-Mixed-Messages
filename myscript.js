const authorList = [{
  saying: 'Evil enters like a needle and spreads like an oak tree.',
  source: 'Ethiopian Proverb'
},
{
  saying: 'There is no shame in not knowing; the shame lies in not finding out.',
  source: 'Russian Proverb'
},
{
  saying: 'Measure a thousand times and cut once. ',
  source: 'Turkish Proverb'
},
{
  saying: 'Examine what is said, not who speaks.',
  source: 'Arab Proverb'
},
{
  saying: 'Two wrongs donnot make a right. ',
  source: 'English Proverb'
},
{
  saying: 'A large chair does not make a king. ',
  source: 'Sudanese Proverb'
},
{
  saying: 'Instruction in youth is like engraving in stone. ',
  source: 'Moroccan Proverb'
}];

function bas(){
  let sayi = Math.round(Math.random() * authorList.length);
  let randomSaying = authorList[sayi].saying;
  let randomSource = authorList[sayi].source;
  document.getElementById('proverb').innerHTML = randomSaying;
  document.getElementById('teller').innerHTML = randomSource;
}

const images = document.getElementsByTagName("img");
function resim(el) {
  el.style.border = "3px solid red";
  el.style.boxshadow = "1px 2px black";
}

function geriAl(){
  document.getElementById('teller').innerHTML = '';
  document.getElementById('proverb').innerHTML = '';
  images.style.border = "0px solid white";
}
