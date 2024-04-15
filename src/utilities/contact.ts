import axios from 'axios'

export const send = async (email: string, name: string, text: string) => {
  await axios.post(process.env.REACT_APP_FORMSPREE_URL as string, {
    email,
    name,
    message: text,
  })
}
