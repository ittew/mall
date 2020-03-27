import axios from 'network/axios'
export function getbanner () {
  return axios({
    url: '/home/multidata'
  })
}
