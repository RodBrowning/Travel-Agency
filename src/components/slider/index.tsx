import './style.scss'
import './small-devices.scss'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/scss/scrollbar'

import { A11y, Navigation, Pagination, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import React from 'react'
import SliderCard from '../sliderCard'
import { fetchData } from '../../fetchFunctions/fetchAxios'
import { useQuery } from 'react-query'

interface ICostomer {
   costomer_name: string
   testimonial: string
   avatar: string
   id: string
}

const fetchTertimonials = async ({ queryKey }: any) => {
   const [, apiEndPoint] = queryKey
   return await fetchData(apiEndPoint)
}

const Slider: React.FC = () => {
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
      <section id="slider" className="container py-5">
         <h1 className="title-big mb-6">
            Here&apos;s what they have to say...
         </h1>
         {isLoading ? (
            <div>
               <h3 className="title-medium" style={{ textAlign: 'center' }}>
                  Loading...
               </h3>
            </div>
         ) : (
            <div className="sliderDiv">
               <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={25}
                  slidesPerView={1}
                  slidesPerGroup={1}
                  navigation={{ prevEl: '#prevBtn', nextEl: '#nextBtn' }}
                  pagination={{ enabled: false }}
                  scrollbar={{ draggable: true, hide: true }}
                  breakpoints={{
                     1000: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                     },
                     640: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                     },
                  }}
               >
                  {!!data && data.length > 0 ? (
                     data.map((costomer: ICostomer) => {
                        return (
                           <SwiperSlide key={costomer.id}>
                              <SliderCard
                                 imgUrl={costomer.avatar}
                                 costomerName={costomer.costomer_name}
                                 testimonial={costomer.testimonial}
                              />
                           </SwiperSlide>
                        )
                     })
                  ) : (
                     <div style={{ padding: '50px' }}>
                        <h3
                           className="title-small"
                           style={{ color: 'red', textAlign: 'center' }}
                        >
                           Some error occurred. See the console for more
                           information.
                        </h3>
                     </div>
                  )}
               </Swiper>
               <button id="prevBtn" className="prevBtn">
                  <svg
                     id="left-arrow"
                     version="1.0"
                     xmlns="http://www.w3.org/2000/svg"
                     width="100px"
                     height="100px"
                     viewBox="0 0 1024.000000 1024.000000"
                     preserveAspectRatio="xMidYMid meet"
                  >
                     <g
                        transform="translate(0.000000,1024.000000) scale(0.100000,-0.100000)"
                        fill="#000000"
                        stroke="none"
                     >
                        <path
                           d="M3780 7698 c-51 -19 -134 -99 -1251 -1217 -1147 -1147 -1198 -1198
-1218 -1254 -28 -76 -28 -168 0 -244 20 -56 70 -107 1213 -1249 966 -967 1200
-1196 1241 -1215 72 -34 181 -38 257 -9 73 27 141 92 176 168 32 70 35 161 8
242 -17 52 -60 96 -920 958 l-901 902 3132 0 c2279 0 3146 3 3185 11 71 15
116 39 165 89 68 67 88 119 88 225 0 75 -4 98 -24 139 -33 66 -91 122 -160
155 l-56 26 -3165 3 -3165 2 902 903 c859 861 902 905 919 957 73 219 -77 431
-304 429 -42 0 -88 -8 -122 -21z"
                        />
                     </g>
                  </svg>
               </button>
               <button id="nextBtn" className="nextBtn">
                  <svg
                     id="right-arrow"
                     version="1.0"
                     xmlns="http://www.w3.org/2000/svg"
                     width="100px"
                     height="100px"
                     viewBox="0 0 1024.000000 1024.000000"
                     preserveAspectRatio="xMidYMid meet"
                  >
                     <g
                        transform="translate(0.000000,1024.000000) scale(0.100000,-0.100000)"
                        fill="#000000"
                        stroke="none"
                     >
                        <path
                           d="M6223 7699 c-68 -26 -138 -95 -171 -167 -32 -70 -35 -161 -8 -242 17
-52 60 -96 920 -957 l901 -903 -3132 0 c-2279 0 -3146 -3 -3185 -11 -71 -15
-116 -39 -165 -89 -68 -67 -88 -119 -88 -225 0 -75 4 -98 24 -139 33 -66 91
-122 160 -155 l56 -26 3165 -3 3165 -2 -902 -903 c-859 -861 -902 -905 -919
-957 -89 -268 157 -506 423 -409 56 20 107 70 1254 1218 1148 1147 1198 1198
1218 1254 28 76 28 168 0 244 -20 56 -70 107 -1213 1249 -965 965 -1200 1196
-1241 1215 -70 33 -189 37 -262 8z"
                        />
                     </g>
                  </svg>
               </button>
            </div>
         )}
      </section>
   )
}

export default Slider
