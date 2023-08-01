import { dataInfo } from "./index.js";

const div = document.querySelector('.content');
const data = JSON.parse(dataInfo);

console.log(data);





data.forEach(({ shoppingСart, fruits, price, photo }) => {
	const divCard = document.createElement('div');
	divCard.classList.add('card');
	div.appendChild(divCard);
	divCard.style.border = '1px solid green';
	divCard.style.padding = '20px';
	divCard.style.margin = '30px';
	divCard.style.borderRadius = '10px';



	const img = document.createElement('img');
	img.classList.add('img-profile');
	img.width = 300;
	img.height = 200;
	img.src = photo;
	divCard.appendChild(img);

	const cardBody = document.createElement('div');
	cardBody.classList.add('card-body');
	divCard.appendChild(cardBody);

	const title = document.createElement('h2');
	title.classList.add('card-title');
	title.textContent = `${fruits} `;
	cardBody.appendChild(title);

	const subtitle = document.createElement('p');
	subtitle.classList.add('card-subtitle');
	subtitle.textContent = price;
	cardBody.appendChild(subtitle);

	const btnPara = document.createElement('button');
	btnPara.classList.add('card-btn');
	btnPara.textContent = `Корзина ${shoppingСart}`;
	btnPara.style.color = 'black';
	btnPara.style.cursor = 'pointer';
	btnPara.style.backgroundColor = 'orange';
	btnPara.style.border = 'none';
	btnPara.style.borderRadius = '10px';
	btnPara.style.padding = '15px';
	cardBody.appendChild(btnPara);

});

