/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

fetch(ENDPOINT)
.then(res => res.json())
.then (data => {
  data.forEach(user => {
    document.querySelector('#btn').addEventListener('click', () => {
      const cardDiv = document.createElement('div');
      const avatarImg = document.createElement('img');
      avatarImg.setAttribute('src', user.avatar_url);
      const loginName = document.createElement('h1');
      const loginNameText = document.createTextNode(user.login);
      loginName.appendChild(loginNameText);
      cardDiv.append(avatarImg, loginName);
      document.querySelector('#output').appendChild(cardDiv);
      document.querySelector('#message').style.display = "none";
    });
  });
});