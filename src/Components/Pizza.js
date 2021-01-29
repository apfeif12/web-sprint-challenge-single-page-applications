import React from 'react'

export default function Pizza(props) {
  const { details, value } = props
  return (
    <div>
      <h1>{details.name}</h1>
      <h1>{value.size}</h1>
      <h1>{value.toppings}</h1>
      <h1>{value.notes}</h1>
    </div>
  )
}
