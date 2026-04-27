import { useState } from 'react'
import './App.css'
import { BsPeopleFill } from "react-icons/bs";
import { IoCamera } from "react-icons/io5";

function App() {
  const [prompt, setPrompt] = useState(0)
  /* 
  
      "Get a strangers number or take 2 shots 
Get a compliment from a stranger or take a shot
Get a stranger to draw a heart anywhere on your body or take 3 shots
Kiss someone or take 4 shots/chug 2 beers and a shot
Go in the middle of a dance circle or take a shot
Take a picture with your doppelgänger or chug a beer
Have a conversation with a stranger in Spanish or chug a beer 
Get someone to follow you on Instagram or take 2 shots 
Make a new friend or take a shot
Shake dat ass on a stranger or take 3 shots 
Find someone wearing a Queens T-shirt or chug a beer 
Flirt with the bartender/waiter/waitress or take finish your drink then take 2 shots 
Swap shirts with someone for the night or chug a beer
Take a selfie on a strangers phone or take 2 shots 
Find someone wearing the same shirt/top as you or chug a beer 
Let the group pick your outfit for the night or take 2 shots 
Find someone with the same zodiac sign as you or finish your drink then take 2 shots 
Get rejected 5 times tonight for any reason or take 3 shots 
Don’t speak until a stranger speaks to you or take 2 shots 
Dance with a stranger or take a shot
Copy cat (pick someone to mirror drinks with)
*/

  const prompts = [
    {"message": "Get a strangers number or take 2 shots", "footnote": "", "witness": true, "picture": false},
    {"message": "Get a compliment from a stranger or take a shot", "footnote": "You cannot ask for the compliment, it must happen naturally", "witness": true, "picture": false},
    {"message": "Get a stranger to draw a heart anywhere on your body or take 3 shots", "footnote": "Can be any shape", "witness": true, "picture": false},
    {"message": "Kiss someone or take 4 shots/chug 2 beers and a shot", "footnote": "Must be on the lips", "witness": true, "picture": false},
    {"message": "Go in the middle of a dance circle or take a shot", "footnote": "", "witness": true, "picture": false},
    {"message": "Take a picture with your doppelgänger or chug a beer", "footnote": "", "witness": true, "picture": true},
    {"message": "Have a conversation with a stranger in Spanish or chug a beer", "footnote": "", "witness": true, "picture": false},
    {"message": "Get someone to follow you on Instagram or take 2 shots", "footnote": "Must be a stranger", "witness": true, "picture": false},
    {"message": "Make a new friend or take a shot", "footnote": "", "witness": true, "picture": false},
    {"message": "Shake dat ass on a stranger or take 3 shots", "footnote": "", "witness": true, "picture": false},
    {"message": "Find someone wearing a Nike T-shirt or chug a beer", "footnote": "", "witness": true, "picture": false},
    {"message": "Flirt with the bartender/waiter/waitress or take 2 shots", "footnote": "", "witness": true, "picture": false},
    {"message": "Swap shirts with someone for the night or chug a beer", "footnote": "", "witness": true, "picture": false},
    {"message": "Take a selfie on a strangers phone or take 2 shots", "footnote": "", "witness": true, "picture": true},
    {"message": "Find someone wearing the same shirt/top as you or chug a beer", "footnote": "", "witness": true, "picture": true},
    {"message": "Let the group pick your outfit for the night or take 2 shots", "footnote": "", "witness": false, "picture": false},
    {"message": "Find someone with the same zodiac sign as you or finish your drink then take 2 shots", "footnote": "Must be a stranger", "witness": false, "picture": true},
    {"message": "Get rejected 5 times tonight for any reason or finish your drink then take 2 shots", "footnote": "All five must come from people you do not know and it must be at least 3 different people", "witness": true, "picture": false},
    {"message": "Don't speak until a stranger speaks to you or take 2 shots", "footnote": "Can't sing or rap either", "witness": false, "picture": false},
    {"message": "Dance with a stranger or take a shot", "footnote": "", "witness": true, "picture": false},
    {"message": "On the way to the function, win a game of blitz chess or chug a beer", "footnote": "Blitz chess is 1 minute mode", "witness": true, "picture": false},
    {"message": "Pet a dog or take a shot", "footnote": "A real dog", "witness": true, "picture": false},
    {"message": "Make a three on a basketball court or take 2 shots", "footnote": "Must be in real life and on a real, 10 foot hoop", "witness": true, "picture": false},
    {"message": "Buy the first round of shots or take a hurricane shot", "footnote": "Must be for the friend group, can be any price", "witness": false, "picture": false},
    {"message": "Choose someone to run a two man with and complete the mission or both of you finish your drink and take a shot", "footnote": "The accepting person can void their original rule or skip choosing a rule. What \"completing\" the two man means can be decided by the group", "witness": true, "picture": false},
    {"message": "Agree to the following rule or take 2 shots: the group can unanimously agree on one person for you to approach in public. You must get some form of contact information", "footnote": "", "witness": true, "picture": false},
    {"message": "Beat a stranger in a game of your choosing or finish your drink", "footnote": "Can be any game but you must win. If you lose you must choose a different stranger", "witness": true, "picture": false},
    {"message": "Copy cat", "footnote": "pick someone to mirror drinks with", "witness": false, "picture": false}
  ]

  const newPrompt = () =>{
    const randomPrompt = Math.floor(Math.random() * prompts.length)
    setPrompt(randomPrompt)
  }


  return (
    <>
     <div className="wrapper">
      <h1>Pregame</h1>
      <h2>{prompts[prompt].message}</h2>
      <button onClick={newPrompt}>Choose Challenge</button>
      <div className='icons'>
        {prompts[prompt].witness ? <p className='icon'><BsPeopleFill /></p> : null}
        {prompts[prompt].picture ? <p className='icon'><IoCamera /></p> : null}
      </div>
     </div>
     {prompts[prompt].footnote ? <p className='footnote'>{prompts[prompt].footnote}</p> : null}
    </>
)}
      
export default App