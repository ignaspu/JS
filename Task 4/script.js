/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

fetch(ENDPOINT)
.then(res => res.json())
.then(data => {
  data.forEach(cars => {
    const carDiv = document.createElement('div');
    const carHeading = document.createElement('h1');
    const carHeadingText = document.createTextNode(cars.brand);
    carHeading.appendChild(carHeadingText);
    const orderList = document.createElement('ol');
    cars.models.forEach(car => {
      const carList = document.createElement('li');
      const carListText = document.createTextNode(car);
      carList.appendChild(carListText);
      orderList.appendChild(carList);
    });
    carDiv.append(carHeading, orderList);
    document.querySelector('#output').appendChild(carDiv);
  });
});