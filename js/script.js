// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];

// Función que recibe por parámetro un array y muestra sus elementos en pantalla
function showList(array) {
  const container = document.getElementById("list");
  container.innerHTML = "";
  array.forEach((element) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", (e) => {
  let arrayFiltrado = strangeArray.filter((element) => typeof element == "string");
  // Nuevoarray       arrayDes     filtra por cada elemento, si es string, lo agrega al nuevo array. 
  let arrayFiltradoB =  arrayFiltrado.map(element => element.toLocaleLowerCase());
  //Nueva variable para que los elementos esten en minuscula asi los ordena bien alfabeticamente
  let arrayOrdenado = arrayFiltradoB.sort();
  //Ordena el nuevo array alfabeticamente
  showList(arrayOrdenado);
});
