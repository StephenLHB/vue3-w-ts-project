import axios from 'axios'

axios.post('http://42.192.40.226:3030/getMouInfo').then((res) => {
  console.log('res=>', res)
})
