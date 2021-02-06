import React, { useState } from 'react'
import './App.css'
import { ColorCard } from './components/ColorCard';
import { hue } from './utils/setHue';
import { lightness } from './utils/setLightness';

export const App: React.FC = ({}) => {

  const [color, setColor] = useState<string>('All Colors')
  const [light, setLight] = useState<string>('All')

  // colors list for dropdown
  const colors = [
    "All Colors","Red", "Vermilion", "Orange", "Golden Yellow", "Lemon Yellow", "Yellowish Green",
    "Chartreuse","Leaf Green","Green","Cobalt Green","Emerald Green","Turquoise Green",
    "Cyan","Cerulean Blue","Azure","Cobalt Blue","Blue","Hyacinth","Violet","Purple",
    "Magenta","Reddish Purple","Ruby Red","Carmine"]

  const inputLength = useState(Array(40).fill(""))[0];

  const handleChangeColor = (e: any) =>{
    setColor(e.target.value)
  }
  const handleChangeLight = (e: any) =>{
    if(light !== ''){
      setLight(e.target.defaultValue)
    }else{
      setLight('')
      setLight(e.target.defaultValue)
    }
  }
  return (
      <>
        <div className='appHeader'>
          <h1 className='title'>Colour Gallery</h1>
          {/* Dropdown for Color*/}
          <label>
            Pick your favorite Color:
            <select value={color} onChange={e=>handleChangeColor(e)}>
              {
                colors.map((item, index)=>{
                  return <option key={index} value={item}>{item}</option>
                })
              }
            </select>
          </label>
          <div style={{width: 20}}/>
          {/* Radio Button for Saturation */}
          <label>
            Pick your favorite Saturation:
              <div onChange={e=>handleChangeLight(e)}>  
                <input type="radio" value="All" name="lightness" /> All
                <input type="radio" value="Light" name="lightness" /> Light
                <input type="radio" value="Dark" name="lightness" /> Dark
              </div>
          </label>
          <div className='cardContainer'>  
            {
              // check selected value of color state
              color !== 'All Colors' ? (
              <>
                <ColorCard hue={hue(color)} lightness={lightness(light)} />
                <ColorCard hue={hue(color)} lightness={lightness(light)} />
                <ColorCard hue={hue(color)} lightness={lightness(light)} />
                <ColorCard hue={hue(color)} lightness={lightness(light)} />
                <ColorCard hue={hue(color)} lightness={lightness(light)} />
              </>) : (
                inputLength.map((_, k) =>(
                  <ColorCard key={k} hue={hue(color)} lightness={lightness(light)} />
                ))
              )}
          </div>
        </div>
      </>
    );
}