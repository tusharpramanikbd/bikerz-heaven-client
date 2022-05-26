import axios from 'axios'
import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify'
import auth from '../../firebase.init'
import Loading from '../Shared/Loading'
import TitleUnderline from '../Shared/TitleUnderline'

const MyProfile = () => {
  const [user] = useAuthState(auth)
  const [education, setEducation] = useState('')
  const [city, setCity] = useState('')
  const [phone, setPhone] = useState('')
  const [linkedIn, setLinkedIn] = useState('')

  const { isLoading } = useQuery(
    'profile',
    async () =>
      await axios.get(
        `https://agile-citadel-57926.herokuapp.com/userprofile?email=${user.email}`
      ),
    {
      onSuccess: (data) => {
        setEducation(data?.data?.education)
        setCity(data?.data?.city)
        setPhone(data?.data?.phone)
        setLinkedIn(data?.data?.linkedIn)
      },
    }
  )

  if (isLoading) {
    return <Loading />
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const sPhone = e.target.phone.value
    const sEducation = e.target.education.value
    const sCity = e.target.city.value
    const sLinkedIn = e.target.linkedIn.value

    const data = {
      name: user.displayName,
      email: user.email,
      education: sEducation,
      city: sCity,
      phone: sPhone,
      linkedIn: sLinkedIn,
    }

    axios
      .put('https://agile-citadel-57926.herokuapp.com/userprofile', {
        data,
      })
      .then((res) => {
        toast.success(`Your profile is updated`)
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className='mt-4 min-h-[calc(100vh-110px)] flex justify-center items-center'>
      <div className='bg-white rounded-lg shadow-md p-4 md:p-8 md:w-3/4 lg:w-3/5 mx-auto'>
        <h2 className='text-center font-bold text-3xl uppercase'>
          Your Profile
        </h2>
        <TitleUnderline />
        <form onSubmit={handleSubmit} className='mt-4'>
          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text'>Name</span>
            </label>
            <input
              value={user.displayName}
              type='text'
              disabled
              className='input input-bordered w-full'
            />
          </div>

          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text'>Email</span>
            </label>
            <input
              value={user.email}
              type='email'
              disabled
              className='input input-bordered w-full'
            />
          </div>

          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text'>Education</span>
            </label>
            <input
              type='text'
              name='education'
              value={education}
              className='input input-bordered w-full'
              onChange={(e) => setEducation(e.target.value)}
            />
          </div>

          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text'>City</span>
            </label>
            <input
              type='text'
              name='city'
              value={city}
              className='input input-bordered w-full'
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text'>Phone</span>
            </label>
            <input
              type='text'
              name='phone'
              value={phone}
              className='input input-bordered w-full'
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text'>LinkedIn Profile</span>
            </label>
            <input
              type='text'
              name='linkedIn'
              value={linkedIn}
              className='input input-bordered w-full'
              onChange={(e) => setLinkedIn(e.target.value)}
            />
          </div>

          <input
            className='btn btn-primary w-full mt-4'
            type='submit'
            value='Update Profile'
          />
        </form>
      </div>
    </div>
  )
}

export default MyProfile
