import { useState } from 'react';
import './App.css';

function App() {
  let [due, setDue] = useState(0);
  let [received, setReceived] = useState(0);
  let [change, setChange] = useState(null);
  let [twenties, setTwenties] = useState(null);
  let [tens, setTens] = useState(null);
  let [fives, setFives] = useState(null);
  let [ones, setOnes] = useState(null);
  let [quarters, setQuarters] = useState(null);
  let [dimes, setDimes] = useState(null);
  let [nickels, setNickels] = useState(null);
  let [pennies, setPennies] = useState(null);
  
  function calculateChange(due, received) {
    setChange(received - due);
    let changeCents = (change * 100).toFixed(2);
    setTwenties(Math.floor(changeCents / 2000));
    changeCents = changeCents % 2000;
    setTens(Math.floor(changeCents / 1000));
    changeCents = changeCents % 1000;
    setFives(Math.floor(changeCents / 500));
    changeCents = changeCents % 500;
    setOnes(Math.floor(changeCents / 100));
    changeCents = changeCents % 100;
    setQuarters(Math.floor(changeCents / 25));
    changeCents = changeCents % 25;
    setDimes(Math.floor(changeCents / 10));
    changeCents = changeCents % 10;
    setNickels(Math.floor(changeCents / 5));
    changeCents = changeCents % 5;
    setPennies(Math.floor(changeCents));
    console.log(`Remaining change = ${change}, ones = ${ones}, quarters = ${quarters}, dimes = ${dimes}, nickels = ${nickels}, pennies = ${pennies}`)
  }

  function handleClick() {
    calculateChange(due, received);
  }

  return (
    <>
      <h1 style={{color: "white", margin: "10px"}}>React Change Calculator</h1>
        <div class="box">
          <div class="box-input">
            <div class="box-input-header"><b>Enter Information</b></div>
            <div>
              <label for="due">How much is due?</label>
              <input 
              type="number" 
              id="due" 
              name="due" 
              width="100" 
              value={due}
              onChange={e => setDue(e.target.value)}
              />
            </div>
            <div>
              <label for="received">How much was received?</label>
              <input 
              type="number" 
              id="received" 
              name="received" 
              width="100" 
              value={received}
              onChange={e => setReceived(e.target.value)}
              />
            </div>
            <div>
              <a href="#" class="btn btn-primary" onClick={() => handleClick()}>Calculate</a>
            </div>
          </div>

          <div class="box-output">
            <div><h6>Twenties</h6> <p>{twenties}</p></div>
            <div><h6>Tens</h6> <p>{tens}</p></div>
            <div><h6>Fives</h6> <p>{fives}</p></div>
            <div><h6>Ones</h6> <p>{ones}</p></div>
            <div><h6>Quarters</h6> <p>{quarters}</p></div>
            <div><h6>Dimes</h6> <p>{dimes}</p></div>
            <div><h6>Nickels</h6> <p>{nickels}</p></div>
            <div><h6>Pennies</h6> <p>{pennies}</p></div>
          </div>
        </div>
    </>
  );
}

export default App;
