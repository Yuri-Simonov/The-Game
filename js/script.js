//Адаптация изображений под формат WEBP, если браузер его подерживает

function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});

//==================================

$(document).ready(function () {
	$(".slider").slick({
		//Автоматическая адаптивная высота слайдера. false - по умолчанию.
		adaptiveHeight: true,
		//Количество слайдов, которое будет отображаться за 1 раз.
		slidesToShow: 8,
		//Количество слайдов, которые будут пролистываться за 1 нажатие.
		slidesToScroll: 1,
		//Скорость пролистывания слайдов. 300 мс - по умолчанию.
		speed: 1500,
		//Тип анимации при смене слайда. linear - по умолчанию.
		easing: 'ease-in-out',
		//Постановка на паузу при клике, наведении и наведении на точки. Всё true - по умолчанию.
		pauseOnFocus: true,
		pauseOnHover: false,
		pauseOnDotsHover: false,
		//Разрешение свайпать слайды (без кнопок) на ПК и телефонах. true - по умолчанию.
		draggable: false,
		swipe: true,
		//Скорость, зависящая от свайда/кликов пользователя. true - по умолчанию. false - снимает ограничения скорости.
		waitForAnimate: false,
		//Количество слайдов в ряду.
		slidesPerRow: 1,
	});
});

//Открытие попапа====================================

let button = document.querySelector('#champions');
let popup = document.querySelector('#popup');
let closeButton = document.querySelector('#close')
let popapBody = document.querySelector('.popup__body');

button.addEventListener('click', openClose);
closeButton.addEventListener('click', openClose);

function openClose() {
	popup.classList.toggle('shown');
	popapBody.classList.toggle('shown');
}

//Анимация по клику====================================
let girl = document.querySelector('#girl')
let animationButton = document.querySelector('#inUniverse')
let count = 0;

animationButton.addEventListener('click', girlMove);

function girlMove() {
	count++;
	girl.classList.add(`animation_${count - 1}_to_${count}`)
	if (count == 1) {
		girl.style.bottom = 151;
		girl.style.left = 339;
	}
	if (count == 2) {
		girl.style.bottom = 110;
		girl.style.left = 265;
	}
	if (count == 3) {
		girl.style.bottom = 92;
		girl.style.left = 179;
	}
	if (count == 4) {
		girl.style.bottom = 119;
		girl.style.left = 100;
	}
	if (count == 5) {
		girl.style.bottom = 182;
		girl.style.left = 113;
	}
	if (count == 6) {
		girl.style.bottom = 239;
		girl.style.left = 132;
	}
	if (count == 7) {
		girl.style.bottom = 277;
		girl.style.left = 204;
	}
	if (count == 8) {
		girl.style.bottom = 349;
		girl.style.left = 165;
	}
	if (count == 9) {
		girl.style.bottom = 401;
		girl.style.left = 128;
	}
	if (count == 10) {
		girl.style.bottom = 432;
		girl.style.left = 191;
	}
}
//======================================================================

const data = {
	"rating": [
		{
			"id": "123",
			"name": "Владимир",
			"lastName": "Ларионов",
			"img": "./male.png",
			"points": "463"
		},
		{
			"id": "9",
			"name": "Владимир",
			"lastName": "Сергеев",
			"img": "./male.png",
			"points": "521"
		},
		{
			"id": "231",
			"name": "Вениамин",
			"lastName": "Васильев",
			"img": "./male.png",
			"points": "865"
		},
		{
			"id": "321",
			"name": "Мария",
			"lastName": "Логинова",
			"img": "./female.png",
			"points": "865"
		},
		{
			"id": "492",
			"name": "Борис",
			"lastName": "Казанцев",
			"img": "./male.png",
			"points": "784"
		},
		{
			"id": "452",
			"name": "Полина",
			"lastName": "Калинина",
			"img": "./female.png",
			"points": "225"
		},
		{
			"id": "796",
			"name": "Даниил",
			"lastName": "Воробьёв",
			"img": "./male.png",
			"points": "642"
		},
		{
			"id": "4",
			"name": "Эрик",
			"lastName": "Аксёнов",
			"img": "./male.png",
			"points": "150"
		},
		{
			"id": "1155",
			"name": "Иван",
			"lastName": "Иванов",
			"img": "./male.png",
			"points": "100"
		},
		{
			"id": "12145",
			"name": "Артем",
			"lastName": "Алексеев",
			"img": "./male.png",
			"points": "1000"
		},
		{
			"id": "122145",
			"name": "Филат",
			"lastName": "Бунько",
			"img": "./male.png",
			"points": "1100"
		},
		{
			"id": "122145",
			"name": "Анна",
			"lastName": "Старченко",
			"img": "./male.png",
			"points": "110"
		},
		{
			"id": "687",
			"name": "Елизавета",
			"lastName": "Сварченко",
			"img": "./male.png",
			"points": "790"
		},
	],
	"friends": [
		{
			"id": "9",
			"name": "Владимир",
			"lastName": "Сергеев",
			"img": "./male.png",
			"points": "1000"
		},
		{
			"id": "4",
			"name": "Эрик",
			"lastName": "Аксёнов",
			"img": "./male.png",
			"points": "1000"
		},
		{
			"id": "15411",
			"name": "Ирина",
			"lastName": "Чеснокова",
			"img": "./female.png",
			"points": "1000"
		},
		{
			"id": "15564",
			"name": "Карина",
			"lastName": "Боброва",
			"img": "./female.png",
			"points": "1000"
		},
		{
			"id": "12264",
			"name": "Петр",
			"lastName": "Петрунькин",
			"img": "./female.png",
			"points": "1200"
		},
		{
			"id": "322",
			"name": "Добрыня",
			"lastName": "Петруньков",
			"img": "./female.png",
			"points": "1400"
		},
		{
			"id": "115564",
			"name": "Алёша",
			"lastName": "Долбиков",
			"img": "./female.png",
			"points": "567"
		},
	]
}
let arr = [];  //Общий массив
for (let method in data) {
	for (let elem of data[method]) {
		for (let word in elem) {
			arr.push(elem[word]);
		}
	}
}
//console.log(arr);

let friends = data.friends;
let arrFriends = [];//Массив списка друзей
for (let elem of friends) {
	for (let word in elem) {
		arrFriends.push(elem[word]);
	}
}

//console.log(arrFriends);


//Разбиение на подмассивы ===========================================================================

let array = arr; //массив, можно использовать массив объектов
let size = 5; //размер подмассива
let subArray = []; //массив в который будет выведен результат.
for (let i = 0; i < arr.length / 5; i++) {
	subArray[i] = array.slice((i * size), (i * size) + size);
}
//console.log(subArray);

let arrFriendsNew = arrFriends; //массив, можно использовать массив объектов
size = 5; //размер подмассива
let subArrayFriends = []; //массив в который будет выведен результат.
for (let i = 0; i < arrFriends.length / 5; i++) {
	subArrayFriends[i] = arrFriends.slice((i * size), (i * size) + size);
}
//console.log(subArrayFriends);


//Сортировка Участников рейтинга по ID ===============================================================

let sortArr = subArray.sort(function (a, b) {
	return a[+0] - b[+0];
});

//console.log(sortArr);

//Удаление повторов по ID ============================================================================
function merge(...arrs) {
	return [].concat(...arrs)
}
let clearArr = merge(...sortArr)
for (let i = 0; i < clearArr.length; i += 5) {
	if (clearArr[i] == clearArr[i + 5]) {
		clearArr.splice(i, 5)
	}
}
//console.log(clearArr);

//Разбиение на подмассивы без повторов в массиве===========================================================================

let arrayNew = clearArr; //массив, можно использовать массив объектов
size = 5; //размер подмассива
let subArrayNew = []; //массив в который будет выведен результат.
for (let i = 0; i < clearArr.length / 5; i++) {
	subArrayNew[i] = arrayNew.slice((i * size), (i * size) + size);
}
//console.log(subArrayNew);


//Сортировка Участников рейтинга по ID ===============================================================

let sortArrNew = subArrayNew.sort(function (a, b) {
	return a[+0] - b[+0];
});
//console.log(sortArrNew);


//Добавление элементов на страницу==================================
let parent = document.querySelector('.popup__list-list')

for (let i = 0; i < sortArrNew.length; i++) {

	let popapListGamer = document.createElement('div');
	popapListGamer.classList.add('popup__list-gamer');
	//Добавление начинки в дивку ===
	let mesto = document.createElement('p');
	mesto.classList.add('mesto')
	mesto.textContent = sortArrNew[i][0]
	popapListGamer.appendChild(mesto);

	let img = document.createElement('img');
	img.classList.add('img')
	img.src = 'img/MMR/brownSq.png'
	popapListGamer.appendChild(img);

	let nameGamer = document.createElement('p');
	nameGamer.classList.add('name')
	nameGamer.textContent = sortArrNew[i][1]
	popapListGamer.appendChild(nameGamer);

	let lastNameGamer = document.createElement('p');
	lastNameGamer.classList.add('lastname')
	lastNameGamer.textContent = sortArrNew[i][2]
	popapListGamer.appendChild(lastNameGamer);

	let points = document.createElement('p');
	points.classList.add('points')
	points.textContent = sortArrNew[i][4]
	popapListGamer.appendChild(points);
	//==
	parent.appendChild(popapListGamer);

	for (let j = 0; j < subArrayFriends.length; j++) {
		if (sortArrNew[i][0] == subArrayFriends[j][0]) {
			popapListGamer.classList.add('friends');
		}
	}

}
//console.log(subArrayFriends);
//console.log(sortArrNew);
