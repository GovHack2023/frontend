import React, { useState, useEffect } from 'react'
import axios from 'axios'

function App () {
  const [name, setName] = useState('')
  const [details, setDetails] = useState('')

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     axios.get("http://127.0.0.1:8000/wel/").then((res) => {
  //       setName(res.data.name)
  //       setDetails(res.data.detail)
  //       console.log(res.data)
  //     })
  //   }, 1000)
  //   return () => {
  //     clearInterval(interval)
  //   }
  // }, [])
  useEffect(() => {

    axios.get("http://127.0.0.1:8000/wel/").then((res) => {
      setName(res.data[0].name)
      setDetails(res.data[0].detail)

    })



  }, [])
  return (
    <div>
      <h1>Women Care</h1>
      <h2>{name}</h2>
      <h2>{details}</h2>
    </div>

  )
}

export default App
