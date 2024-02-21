import React, {useState} from "react";
const Game = () => {
  // let x = propts.x;
  // let y = propts.y;
  // let z = propts.z;

  // if (x === y && y === z) {
  //   return (
  //     <>
  //       <h1>This is match.</h1>
  //     </>
  //   );
  // } else {
  //   return (
  //     <>
  //       <h1>This isn't match.</h1>
  //     </>
  //   );
  // }

  //   Hooks

    let [counter, setCounter] = useState(15);
    const add= ()=> {
        setCounter(counter + 1);
    }
    return(<>
    
      <h1>{counter}</h1>
      <button onClick={add}>Add Click</button>
      
    </>);

};



export default Game;
