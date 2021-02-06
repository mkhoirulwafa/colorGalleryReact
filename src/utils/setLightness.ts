import { getRandomInt } from './getRandom';
// Hue Picker based on color selected on dropdown
export const lightness = (light: String)=>{
    if(light === "All")return getRandomInt(90,10)
    if(light === "Light")return getRandomInt(90,50)
    if(light === "Dark")return getRandomInt(50,10)
  }