import React from 'react'
import { useNavigate } from 'react-router-dom'

export const OrederSummary = () => {
    const navigate = useNavigate()
  return (
    <>
    <div>Order confirmed</div>
    <button onClick={()=> navigate(-1)}>goback</button>
    </>
  )
}