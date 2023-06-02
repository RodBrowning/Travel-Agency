import axios, { AxiosError, AxiosResponse } from 'axios'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchData = async (url: string): Promise<any> => {
   try {
      const response: AxiosResponse = await axios.get(url)
      return response.data

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
   } catch (error: AxiosError | any) {
      if (error.response) {
         console.error('Request failed with status code', error.response.status)
         console.error('Response data:', error.response.data)
      } else if (error.request) {
         console.error('No response received:', error.request)
      } else {
         console.error('Error:', error.message)
      }
   }
}
