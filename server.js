//Источник: https://github.com/EduardDanilov/GB/blob/master/JavaScript/JS/backJS/%D0%BF%D0%B0%D1%80%D1%81%D0%B8%D0%BD%D0%B3/script.js
// Пример объекта
const studentInfo = {
  name: "Ivan",
  surname: "Petrov",
  age: 20,
  classes: {
    mathematics: {
      hours: 50,
      mark: "ok",
    },
    physics: {
      hours: 100,
      mark: "ok",
    },
  },
  school: "school №2",
};

// Преобразование объекта в JSON формат
const setObjectToJson = JSON.stringify(studentInfo, null, 4);

// Получение данных из локального файла JSON.
// В HTML нужно указать модульный тип скрипта <script type="module" src="script.js"></script>
// При импорте данные автоматически преобразуются в объект
import jsonFile from "./data.json" assert { type: "json" };

// Получение данных с API
// В HTML нужно указать модульный тип скрипта <script type="module" src="script.js"></script>
const apiUrl = "https://api.github.com/users/octocat"; // Пример ссылки на API

const getDataFromApi = async (url) => {
  const response = await fetch(url); // Получает ответ с сервера
  if (response.ok) {
    // const jsonData = await response.text(); // Данные в формате JSON
    const parsedJsonData = await response.json(); // Объект, полученный из JSON
    return parsedJsonData;
  } else {
    alert("Ошибка HTTP: " + response.status);
  }
};

const apiData = await getDataFromApi(apiUrl);

// Отправка данных на сервер

// Вариант №1. Функция принимает форму и отправляет данные на сервер

const serverUrl = "https://httpbin.org/post"; // Пример ссылки на сервер

function sendFormData() {
  const XHR = new XMLHttpRequest();

  // Связывает объект FormData и форму
  const FD = new FormData(form);

  // Настройка запроса для отправки
  XHR.open("POST", serverUrl);

  // Отправляются данные, которые указал пользователь в форме
  XHR.send(FD);

  XHR.onload = function () {
    if (XHR.status != 200) {
      // если статус не 200, то произошла ошибка
      console.log(`Error ${XHR.status}: ${XHR.statusText}`);
    } else {
      console.log(`Successful: ${XHR.response}`); // Ответ сервера: статус "успешно" и содержимое ответа
    }
  };

  // onerror - функция будет вызываться, если в запросе пошло что-то не так. Например, нет соединения с сервером или ошибка в адресе запроса.
  XHR.onerror = function () {
    console.log("Request error");
  };
}

// Пример использования.
// Находит элемент с id='formElem'
const form = document.getElementById("formElem");

// Слушает событие submit, при его наступлении запускает функцию sendFormData()
form.addEventListener("submit", function (event) {
  event.preventDefault();

  sendFormData();
});

// Вариант №2. Функция принимает объект, преобразует его в JSON и отправляет на сервер
// Пример объекта
const user = {
  name: "John Smith",
  age: 30,
  email: "john@example.com",
};

// Функция отправки данных на сервер
const saveUserData = (userObject) => {
  const serverUrl = "https://httpbin.org/post"; // Пример ссылки на сервер

  let data = new FormData();
  data.append("json", JSON.stringify(userObject)); // Преобразование из объекта в JSON, заполнение data

  fetch(serverUrl, {
    method: "POST", // метод
    body: data, // тело с данными
  })
    .then((response) => {
      // обработка ответа сервера
      if (!response.ok) {
        return Promise.reject(
          new Error(
            `Response failed: ${response.status} (${response.statusText})`
          )
        );
      }
      console.log("User data saved successfully"); // В случае положительного ответа сервера
      return response.json();
    })
    .then((data) => {
      // работа с данными, полученными от сервера
      const userinfojson = JSON.parse(data.form.json);
      console.log("User data: ", userinfojson);
    })
    .catch((error) => {
      // вывод ошибки
      console.log(error);
    });
};

saveUserData(user);
