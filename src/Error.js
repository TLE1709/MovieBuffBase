import React from 'react';
import {NavLink} from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="gif-class">
        <img className="error-img" src="../404_animation.gif" alt="404Error"></img>
      </div>
      <div className="text-class">
      <span class="text404">OOPS! THE PAGE YOU HAVE BEEN LOOKING FOR DOESNOT EXIST</span><br/>
        <p><NavLink to="/" class="back-to-reality">Back to Reality</NavLink></p>
      </div>
    </>
  )
}

export default Error