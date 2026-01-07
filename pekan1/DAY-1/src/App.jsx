import React, { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  function formatUser(user){
    return user.firstName + ' ' + user.lastName;
  }

  const user = {
    firstName: 'John',
    lastName: 'Doe'
  }
{/*ini sebuah comment*/}
  return (
    <>
    <h1>hello {formatUser(user)}</h1>
    <img src=''/>
    </>
  )
}

export default App
