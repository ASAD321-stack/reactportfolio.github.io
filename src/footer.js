import React from 'react'

const Footer = () => {
  var today = new Date();

var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return (
        <div  className="footer" style={{backgroundColor: "black", color:"white"}}>
          <h2>ASAD</h2>

          <p>Date : {date}</p>
          <p>Time : {time}</p>
        </div>
    )
}

export default Footer
