import React from 'react'
import {useParams} from 'react-router-dom'

export default function ItemDetails(props) {
  const { text } = props
  const {itemID} = useParams()
  console.log(itemID);

  return (
    <div>
      <p className='item-details'>{text}</p>
    </div>
  )
}
