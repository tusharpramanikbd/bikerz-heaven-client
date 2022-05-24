import axios from 'axios'

const { useState, useEffect } = require('react')

const useToken = (user) => {
  const [token, setToken] = useState('')
  useEffect(() => {
    const email = user?.user?.email
    const currentUser = { email: email }
    if (email) {
      axios
        .put(`http://localhost:5000/users/${email}`, {
          currentUser,
        })
        .then((res) => {
          const accessToken = res.data.accessToken
          localStorage.setItem('accessToken', accessToken)
          setToken(accessToken)
        })
        .catch((err) => console.log(err))
    }
  }, [user])
  return [token]
}

export default useToken
