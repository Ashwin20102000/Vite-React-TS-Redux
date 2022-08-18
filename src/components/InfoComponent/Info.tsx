import React from "react"


const Info = () => {
  const {userAgent } =  navigator
  const userOs = userAgent.includes("Linux")?"Linux":userAgent.includes("Windows")?"Windows":"Mac"
  console.log({navigator})
  return (
    <div>
      <div className=" my-2 border bg-light w-100 p-2">
        <h2>Hi {userOs} users!👋 </h2>

      </div>
    </div>
  )
}

export default Info