import axios from 'axios'

const { useState, useEffect } = require('react')

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false)
  const [adminLoading, setAdminLoading] = useState(true)
  useEffect(() => {
    const email = user?.email
    if (email) {
      axios
        .get(`https://agile-citadel-57926.herokuapp.com/admin/${email}`)
        .then((res) => {
          setAdmin(res.data.admin)
          setAdminLoading(false)
        })
        .catch((err) => console.log(err))
    }
  }, [user])
  return [admin, adminLoading]
}

export default useAdmin
