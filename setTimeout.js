// function delayMessage(message, delay) {
//   setTimeout(() => {
//     console.log(message);
//   }, delay);
// }

// delayMessage("Message 1", 2000);
// delayMessage("Message 2", 1000);
// delayMessage("Message 3", 3000);

// У вас есть список задач, которые необходимо выполнить в определенном порядке. Каждая задача должна быть выполнена через определенный промежуток времени, заданный в миллисекундах. Вам необходимо написать функцию, которая принимает список задач и интервал времени, а затем выполняет каждую задачу через определенный промежуток времени.

// const tasks = [
//   { name: "task 1", time: 1000 },
//   { name: "task 2", time: 2000 },
//   { name: "task 3", time: 3000 },
//   { name: "task 4", time: 4000 },
//   { name: "task 5", time: 5000 },
// ];

// let nowTime = 0;

// function taskHandler(name, time) {
//   setTimeout(() => {
//     console.log(name);
//   }, time);
// }

// tasks.forEach((task) => {
//   nowTime += task.time;
//   taskHandler(task.name, nowTime);
// });

// Напишите программу, которая загружает данные с сервера с использованием объекта XMLHttpRequest
// Создайте функцию loadData(url), которая принимает аргумент url (строка) - адрес сервера для загрузки данных.
// Внутри функции loadData() создайте объект XMLHttpRequest с помощью new XMLHttpRequest().
// Зарегистрируйте обработчик события onreadystatechange, который будет вызываться при изменении состояния запроса. Проверьте, если успешно выполнен запрос и успешный статус ответа сервера, то выведите полученные данные в консоль с помощью console.log(xhr.responseText).
// Откройте запрос с помощью xhr.open("GET", url, true).
// Отправьте запрос на сервер.

// function loadData(url) {
//     const xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function () {
//         if(xhr.status !== 200) {
//             console.log(`Error: ${xhr.status}: ${xhr.statusText}`);
//         } else {
//             console.log(xhr.responseText);
//         }
//     }

//     xhr.open("GET", url, true);
//     xhr.send();
// }

// loadData('https://jsonplaceholder.typicode.com/users')

// async function getData() {
//   let response = await fetch("https://jsonplaceholder.typicode.com/users");
//   if (response.ok) {
//     console.log("Request completed successfully");
//     let data = await response.json()
//     console.log(data);
//   } else {
//     console.log("Error");
//   }
// }
// getData();

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response1) => {
//     return response1.json();
//   })
//   .then((data) => {
//     console.log(data);
//     data.forEach((element) => {
//       const box = document.querySelector(".users");
//       console.log(element);
//       const user = `
//             <p>${element.id}</p>
//             <p>${element.name}</p>
//         `;
//       box.insertAdjacentHTML("beforebegin", user);
//     });
//     const names = [];
//     data.forEach((element) => {
//       names.push(element.name);
//     });
//     names.sort();
//     names.forEach((name) => {
//       const box = document.querySelector(".users");
//       const user = `
//             <p>${name}</p>

//         `;
//       box.insertAdjacentHTML("beforebegin", user);
//     });
//   });