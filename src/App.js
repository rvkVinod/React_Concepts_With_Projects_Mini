import React from "react";
import FunctionComponent from "./Concepts/FunctionComponent";
import ClassComponent from "./Concepts/ClassComponent";
import StateInFunction from "./Concepts/StateInFunction";
import EventListenersInReact from "./Concepts/EventListenersInReact";
import Image from "./Concepts/Image";
import LifeCycleMehtod from "./LifeCycleMethod";
import UseRefHook from "./Hooks/UseRefHook";
import UseEffectHook from "./Hooks/UseEffectHook";





const App = (props) => {
  // let name = "Vinod";
  // let say = "hello";
  // let wish = "good Mroning";
  // let date = "26th,sep,2023";

  return (
    <div>
      <center>
        {/* <h1>
          hello from {name} {say} everyone
        </h1> */}

        {/* <ClassComponent />
        <StateInFunction />
        <FunctionComponent wish={wish} date={date} />
        <EventListenersInReact /> */}
        {/* <React.Fragment style={{ display: 'inline', backgroundColor: 'red' }}>
  <Image src={props.src} />
</React.Fragment> */}
        {/* <LifeCycleMehtod /> */}
        <UseRefHook />
        <UseEffectHook />
 
      </center>
    </div>
  );
};

export default App;
