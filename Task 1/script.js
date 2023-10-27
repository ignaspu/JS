/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

document
.querySelector('main > div > form')
.addEventListener('submit', e => {
  e.preventDefault();
  const kg = e.target.elements.search.value;
  const lb = kg * 2.2046;
  const gram = kg / 0.0010000;
  const oz = kg * 35.274;
  if(kg == 0 || isNaN(kg)){
    const wrong = document.createElement('h1');
    const wrongText = document.createTextNode('You have entered an incorrect number');
    wrong.appendChild(wrongText);
    document.querySelector('#output').appendChild(wrong);
  }else{
    const field = document.createElement('h1');
    const fieldText = document.createTextNode(`${kg} kg is equal to:`);
    field.appendChild(fieldText);
    const answerField = document.createElement('h1');
    const answerFieldText = document.createTextNode(`Pounds (lb) = ${lb}, Grams (g) = ${gram}, Ounces (oz) = ${oz}`);
    answerField.appendChild(answerFieldText);
    document.querySelector('#output').append(field, answerField);
  }
  document.querySelector('form').reset();
});