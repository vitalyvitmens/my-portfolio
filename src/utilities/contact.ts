import axios from 'axios'
import { FORMSPREE_URL } from '../constants/urls'

export const send = async (email: string, name: string, text: string) => {
  await axios.post(FORMSPREE_URL, {
    email,
    name,
    message: text,
  })
}
