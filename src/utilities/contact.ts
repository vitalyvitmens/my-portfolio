import axios from 'axios'

export const send = async (email: string, name: string, text: string) => {
  await axios.post('https://formspree.io/f/mayrlvdz', {
    email,
    name,
    message: text,
  })
}
