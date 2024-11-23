import { Stack } from '@mui/material'
import { plans } from '../utils/assets'
import PriceCard from './PriceCard'

const PricingCards = () => {
  return (
    <Stack direction={'row'}justifyContent={'center'} gap={5}>
        {
           plans.map(ele=><PriceCard key={ele.id} data ={ele}/>)
        }
      
    </Stack>
  )
}

export default PricingCards
