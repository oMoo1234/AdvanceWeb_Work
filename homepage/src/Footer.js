import React from 'react';
import './css/footer.css';
import write_text from './do_stuff';


function footer(props) {

  // const handleClick = () =>{
  //   alert("teeee time")
  // }
  return <div className='footer'><h1>This is a footer!</h1>
  <button className='button' onClick={write_text}> onCLick</button>
  </div>;
}

footer.propTypes = {};

export default footer;


