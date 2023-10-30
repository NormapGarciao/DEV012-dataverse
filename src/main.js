import { example } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';

const juegosContenedor=document.getElementById("root");
juegosContenedor.appendChild(renderItems(data));
 