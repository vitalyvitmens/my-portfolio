import axios from 'axios'
import { FORMSPREE_BASE_URL } from '../constants/urls'
import { FORMSPREE_API_KEY } from '../constants/apiKeys'

export const send = async (email: string, name: string, text: string) => {
  await axios.post(FORMSPREE_BASE_URL + FORMSPREE_API_KEY, {
    email,
    name,
    message: text,
  })
}
