import React, { useState } from "react";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Brightness4Icon from '@mui/icons-material/Brightness4';
const Body = () => {
  const greetStyle = {};
  const date = new Date().getHours();
  let greet = "";
  let icon;
  if (date >= 1 && date < 12) {
    greet = "Good Morning";
    icon = <WbSunnyIcon/>;

    greetStyle.color = "#1A6949";
  } else if (date >= 12 && date <= 17) {
    greet = "Good Afternoon";
    icon = <Brightness6Icon/>;
    greetStyle.color = "#C19102";
  } else if (date > 17 && date <= 21) {
    greet = "Good Evening";
    icon = <Brightness5Icon/>;
    greetStyle.color='#11A5A5';
  } else {
    greet = "Good Night";
    icon = <Brightness4Icon/>;
    greetStyle.color='#808080';
  }

  let time = new Date().toLocaleTimeString();
  const [stateTime, UpTime] = useState(time);
  const UpdateTime = ()=>{
    time = new Date().toLocaleTimeString();
    UpTime(time);

    
  }
  setInterval(UpdateTime,1000);


// Bg change hooking 
  let bg = "#8cbeed";
  let cbg = "#00ff00";
  const [bgcolor, changecolor] = useState(bg);
  const Colorbg = ()=>{
      changecolor(cbg);

  }
  const DColorbg = ()=>{
    changecolor(bg);
  }
  const bodyStyle = {
    backgroundColor: bgcolor,
      color:'#112A46',
    borderRadius: "20px",
    padding: "10%",
    marginTop:"0%",
    textAlign: "center",
    margin: "0% 0%",
  };



  return (
    <>
      <div style={bodyStyle}>
        <h1>Hello perfect person from world</h1>
        <p>
          {icon}
        </p>
        <h2 style={greetStyle}>{greet} </h2>
        <div style={greetStyle}>
            <AccessTimeFilledIcon/>
        </div>
        <span>{stateTime}</span><br></br>
        <button onClick={UpdateTime}>Great Click</button>
        <button onClick={Colorbg}  onDoubleClick={DColorbg}>Color change</button>

      </div>
      
    </>
  );
};

export default Body;
