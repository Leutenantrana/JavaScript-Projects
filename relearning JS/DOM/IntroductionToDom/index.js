const link = document.querySelector("a");
link.textContent = "Mozilla Developer Network";

const newElement = document.createElement("p");
const existingScetion = document.querySelector("section");
existingScetion.appendChild(newElement);
const text = document.createTextNode("   —--- the premier source for web development knowledge.,");
const takeNewelement = document.querySelector("p");
takeNewelement.appendChild(text);






const imgElement = document.querySelector("img");

imgElement.style.width = "150px"

const imgElementClone = imgElement.cloneNode();
const imgElementClone1 = imgElement.cloneNode();
const imgElementClone2 = imgElement.cloneNode();
const imgElementClone3 = imgElement.cloneNode();


var referenceNode = existingScetion.childNodes[1];

existingScetion.insertBefore(imgElementClone, referenceNode);
existingScetion.insertBefore(imgElementClone1, referenceNode);
existingScetion.insertBefore(imgElementClone2, referenceNode);
existingScetion.insertBefore(imgElementClone3, referenceNode);


const imgElementClone4 = imgElement.cloneNode();
const imgElementClone5 = imgElement.cloneNode();
const imgElementClone6 = imgElement.cloneNode();
const imgElementClone7 = imgElement.cloneNode();

existingScetion.appendChild(imgElementClone4);
existingScetion.appendChild(imgElementClone5);
existingScetion.appendChild(imgElementClone6);
existingScetion.appendChild(imgElementClone7);


takeNewelement.setAttribute("class", "highlight");