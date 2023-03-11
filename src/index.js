// import example from "./images/smoke.png";
// import imgSvg from "./images/flat.svg";
// import { sum } from "./helper/sum.js";
// import "./styles/main.scss";

// console.log("Webpack");
// // // Create a class property without a constructor
// class Game {
//   name = "Violin Charades";
// }
// const myGame = new Game();
// // Create paragraph node
// const p = document.createElement("p");
// p.textContent = `I like ${myGame.name}.`;

// // Create heading node
// const heading = document.createElement("h1");
// heading.textContent = "Interesting!";

// // Append SVG and heading nodes to the DOM
// const app = document.querySelector("#root");
// app.append(heading, p);

// const img = document.createElement("img");
// img.src = example;
// app.append(img);

// const svgImg = document.createElement("img");
// svgImg.src = imgSvg;
// app.append(svgImg);

// console.log(sum(2, 3));


import './styles/style.css'

import hb from "./templates/qwerty.hbs"

import {base, list, frameworks, libs} from "./data/hbsData"

import task from "./templates/qwertyq.hbs"

import markup from "./templates/markup.hbs"

import markuplast from "./templates/markuplast.hbs"

const array = markuplast(libs)


const newArr = markup(frameworks)

// const abs = hb(base)
// console.log(abs)
const root = document.querySelector("#root")
// root.insertAdjacentHTML('beforeend', abs)

// const library = task(list)

// root.insertAdjacentHTML('beforeend', library)

root.insertAdjacentHTML('beforeend', newArr)

root.insertAdjacentHTML('beforeend', array)

