import React, { useState, useEffect } from 'react'

function MobileTopBar() {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    let timer = setInterval(() => setDate(new Date()), 1000)
    return function cleanup() {
      clearInterval(timer)
    }
  })

  return (
    <div className="mobile-top-container">
      <p className="mobile-time">
        {date.toLocaleTimeString(navigator.language, {
          hour: '2-digit',
          minute: '2-digit',
        })}
      </p>
      <div className="mobile-icons-container">
        <img src="/icons/signal.png" alt="" className="mobile-icon" s />
        <img src="/icons/wifi.png" alt="" className="mobile-icon" s />
        <img src="/icons/battery.png" alt="" className="mobile-icon" s />
      </div>
    </div>
  )
}

export default MobileTopBar
