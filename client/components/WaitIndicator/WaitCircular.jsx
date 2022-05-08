import * as React from 'react'
import { connect } from 'react-redux'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

function WaitCircular(props) {
  return props.waiting ? (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  ) : null
}

function mapStateToProps(state) {
  return {
    waiting: state.waiting,
  }
}

export default connect(mapStateToProps)(WaitCircular)
