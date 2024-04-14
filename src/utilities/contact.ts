import axios from 'axios'

export const send = async (email: string, name: string, text: string) => {
  await axios.post('https://formspree.io/f/xvoevlwq', {
    email,
    name,
    message: text,
  })
}
