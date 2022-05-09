import React from 'react'
import { Box, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import Weather from './Weather'
import Suntimes from './Suntimes'

function WeatherInfo() {
  const [value, setValue] = React.useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%', typography: 'body1' }} className="weather-area">
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList
            onChange={handleChange}
            centered
            aria-label="lab API tabs example"
          >
            <Tab label="Weather" value="1" />
            <Tab label="Daylight" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Weather />
        </TabPanel>
        <TabPanel value="2">
          <Suntimes />
        </TabPanel>
      </TabContext>
    </Box>
  )
}

export default WeatherInfo
