import React from 'react'
import { useParams } from "react-router-dom";


export default function Booking() {
  const { id } = useParams();

  return (
    <div>Booking</div>
  )
}
