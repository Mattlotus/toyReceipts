import React from 'react'

function Receipts(props) {
  return (
    <div className = 'toys'>
      <h1>Console: {props.ticketInfo.console}</h1>
      <h3>{props.ticketInfo.games.g1}</h3>
      <h3>{props.ticketInfo.games.g2}</h3>
      <h3>{props.ticketInfo.games.g3}</h3>
      <h3>{props.ticketInfo.games.g4}</h3>
      <h1>Accessories:</h1>

      {props.ticketInfo.games.accessories.map((accessory)=>{
        return (
        <p>{accessory}</p>
        )
        
      })}

      <h3>${props.ticketInfo.games.cost}</h3>
      <h3>{props.ticketInfo.paid}</h3>


    </div>
  )
}

export default Receipts
