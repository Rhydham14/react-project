import React from "react";
import { Header } from "./Heard";
import Body from "./Body";
import Buttonfun from "./Option";
// import Game from "./Game";
// import Form from "./Form";
// import Login from "./Login";
import Todo from "./Todo";

const App = ()=>{
    return(
        <>
            <Header/>
                <Buttonfun/>
            <Body/>
            {/* <Game/> */}
            {/* <Form/> */}
            {/* <Login/> */}
            <Todo/>
        </>
    );
}

export default App;