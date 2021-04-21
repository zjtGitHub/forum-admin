import { axios } from '@/libs/request'
import { getToken } from '@/libs/util'
// export const login = ({ userName, password }) => {
//   const data = {
//     userName,
//     password
//   }
//   return axios.request({
//     url: 'login',
//     data,
//     method: 'post'
//   })
// }

export const getUserInfo = (token) => {
  return axios.get('/public/info', {
    headers: {
      Authorization: 'Beaerer ' + getToken()
    }
  })
}
