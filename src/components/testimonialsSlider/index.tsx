import React from 'react'
import Slider from '../slider'
import SliderCard from '../sliderCard'
import { SwiperSlide } from 'swiper/react'
import { fetchData } from '../../fetchFunctions/fetchAxios'
import { useQuery } from 'react-query'

interface ICustomer {
   customer_name: string
   testimonial: string
   avatar: string
   id: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fetchTertimonials = async ({ queryKey }: any) => {
   const [, apiEndPoint] = queryKey
   return await fetchData(apiEndPoint)
}

const TestimonialsSlider: React.FC = () => {
   const oneHour = 1 * 3600000
   const { isLoading, isError, data, error } = useQuery({
      queryKey: [
         'testimonials',
         'https://6479cbe0a455e257fa63cace.mockapi.io/testimonials',
      ],
      queryFn: fetchTertimonials,
      staleTime: oneHour,
   })

   if (isError) {
      console.error(error)
   }

   return (
      <>
         {isLoading ? (
            <div>
               <h3
                  className="title-medium"
                  style={{ textAlign: 'center', paddingBlock: '30px' }}
               >
                  Loading...
               </h3>
            </div>
         ) : (
            ''
         )}
         {!!data && data.length > 0 ? (
            <Slider title="Here’s what they have to say...">
               {data.map((customer: ICustomer) => (
                  <SwiperSlide key={customer.id}>
                     <SliderCard
                        imgUrl={customer.avatar}
                        customerName={customer.customer_name}
                        testimonial={customer.testimonial}
                     />
                  </SwiperSlide>
               ))}
            </Slider>
         ) : (
            ''
         )}
      </>
   )
}

export default TestimonialsSlider
