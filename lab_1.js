const myName = 'Билигма';
const programmingLanguage = "JavaScript";
const courseCreatorName = "Чеботов Н.М.";
const reasonText = "Интересно";
const numberOfMonths = 1;

let myInfoText =`Всем привет! Меня зовут, ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}.\n\nЯ хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал ${programmingLanguage} ${numberOfMonths} месяцев. Я уверен, что пройду данный курс до конца!`;

myInfoText = myInfoText.replaceAll(programmingLanguage, programmingLanguage.toUpperCase());

console.log(myInfoText);
console.log(`Длина строки: ${myInfoText.length} символа`);
console.log(`Первый символ: '${myInfoText[0]}'\nПоследний символ: '${myInfoText[myInfoText.length - 1]}'`);


let userName = prompt("Как вас зовут?");
let userAge = prompt("Сколько вам лет?");

userName = userName.trim().toLowerCase()
userAge = Number(userAge.trim());

alert(`Вас зовут ${userName} и вам ${userAge} лет`);


let userSrting = prompt("Введите текст для обрезки");
const startSliceIndex = Number(prompt("Введите индекс, с которого нужно начать обрезку строки"));
const endSliceIndex = Number(prompt("Введите индекс, которым нужно закончить обрезать строки"));

userSrting = userSrting.trim();

const string = userSrting.slice(startSliceIndex, endSliceIndex);

alert(`Результат: ${string}`);


let userText = prompt("Введите текст");
let wordFromText = prompt("Введите слово из текста");

userText = userText.trim();
wordFromText = wordFromText.trim();

const indexOfWord = userText.indexOf(wordFromText);
const string_2 = userText.slice(0, indexOfWord);

alert(`Результат: ${string_2}`);
