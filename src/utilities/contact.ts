import axios from 'axios'

export const send = async (email: string, name: string, text: string) => {
  await axios.post('mailto:vitalyvitmens@gmail.com/', {
    email,
    name,
    message: text,
  })
}
