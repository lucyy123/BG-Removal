import { CircularProgress, Stack } from '@mui/material'
import React from 'react'

const Loader = () => {
  return (
    <Stack sx={{
        width:"100vw",
        height:"100vh",
        display:'flex',
        justifyContent:'center',
        alignItems:"center"
    }}>
        <CircularProgress />
      
    </Stack>
  )
}

export default Loader
