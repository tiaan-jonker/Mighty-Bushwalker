import * as React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import LinearProgress from '@mui/material/LinearProgress'
import Box from '@mui/material/Box'

function WaitCircular() {
  return (
    <div className="loading-container">
      <div className="loading loading01">
        <span>L</span>
        <span>o</span>
        <span>a</span>
        <span>d</span>
        <span>i</span>
        <span>n</span>
        <span>g</span>
      </div>
      <Box sx={{ width: '100%' }}>
        <LinearProgress color="success" />
      </Box>
    </div>
  )
}

export default WaitCircular
