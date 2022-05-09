import * as React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import { connect } from 'react-redux'

function WaitCircularRedux(props) {
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

export default connect(mapStateToProps)(WaitCircularRedux)
