import React from 'react'
import { connect } from 'react-redux'
import { Box, LinearProgress } from '@mui/material'

function WaitIndicator(props) {
  return (
    <>
      {/* {waiting ? (
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      ) : null} */}
    </>
  )
}

function mapStateToProps(state) {
  return {
    waiting: state.waiting,
  }
}

export default WaitIndicator
