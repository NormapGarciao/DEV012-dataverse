import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

console.log(example, renderItems(data), data);
const juegosContenedor=document.querySelector("#root");
juegosContenedor.innerHTML=renderItems(data);
