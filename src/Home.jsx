import React from 'react';
import Common from "./Common";
import web from "../src/images/logo.svg";
class Home extends React.Component {
   render() {
      return (
        <Common
        name = "Grow Your Business With" 
        imgsrc={web} 
        visit="/service" 
        btname="Get Started"/>
         );
   }
}
export default Home;