import React from 'react'
import { useSelector } from 'react-redux'
import { Box, LinearProgress } from '@mui/material'

function WaitIndicator() {
  const waiting = useSelector((state) => state.waiting)

  return (
    <>
      {waiting ? (
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      ) : null}
    </>
  )
}

export default WaitIndicator
