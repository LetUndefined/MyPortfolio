import type { Nasa } from "@/models/Interface"
import { ref, type Ref } from "vue"

export const apiData: Ref<Nasa | null> = ref(null)


export const getApi = async () => {
  try {
    const response = await fetch('https://api.open-notify.org/astros.json')

    if(!response.ok){
      console.log('Failed to fetch data')
      return
    }
    const data: Nasa = await response.json()
  return data
  } catch(error){
    console.error(error)
  }
}
