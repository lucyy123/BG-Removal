import { Stack } from '@mui/material'
import { steps } from '../utils/assets'
import MyCards from './MyCards'

const Cards = () => {
  return (
    <Stack direction={'row'} justifyContent={'space-evenly'} gap={2} mt={5}>

   {
    steps.map((ele)=><MyCards key={ele.id} details = {ele}/>)
   
   }

      
    </Stack>
  )
}

export default Cards
