import React from 'react';
import Common from "./Common";
import web from "../src/images/logo.svg";
class About extends React.Component {
   render() {
      return (
         <Common 
         name = "Welcome To About Page" 
         imgsrc={web} 
         visit="/contact" 
         btname="Contact Now"/>
         );
   }
}
export default About;