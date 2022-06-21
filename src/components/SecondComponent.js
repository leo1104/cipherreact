import React from 'react'

function SecondComponent(props) {
console.log(props.name);
// props.name //destructuring
  return (
    <div>
      
    <h1>{props.name}</h1>  
      </div>
  )
}

export default SecondComponent