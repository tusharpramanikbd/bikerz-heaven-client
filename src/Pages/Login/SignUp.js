import React, { useEffect } from 'react'
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import auth from '../../firebase.init'
import useToken from '../../hooks/useToken'
import Loading from '../Shared/Loading'
import TitleUnderline from '../Shared/TitleUnderline'

const SignUp = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth)
  const [createUserWithEmailAndPassword, user, loading, userError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true })

  const [updateProfile, updating, updateError] = useUpdateProfile(auth)
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()
  let gErrorElement, errorElement
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password)
    await updateProfile({ displayName: data.name })
  }

  const [token] = useToken(user || gUser)

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token, navigate])

  if (gLoading || loading) {
    return <Loading />
  }

  if (gError) {
    gErrorElement = <p className='text-red-500 mt-2'>Error: {gError.message}</p>
  }

  if (userError) {
    errorElement = (
      <p className='text-red-500 mt-2'>Error: {userError.message}</p>
    )
  }

  return (
    <div className='bg-gray-100 p-4 min-h-[calc(100vh-64px)] flex justify-center items-center'>
      <div className='container mx-auto w-full md:w-2/3 lg:w-1/3 p-8 rounded-lg drop-shadow-lg bg-white'>
        <h2 className='text-center text-2xl font-bold'>SignUp</h2>
        <TitleUnderline />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text'>Name</span>
            </label>
            <input
              type='text'
              placeholder='Your name'
              className='input input-bordered w-full'
              {...register('name', {
                required: {
                  value: true,
                  message: 'name is required',
                },
              })}
            />
            <label className='label'>
              {errors.name?.type === 'required' && (
                <span className='label-text-alt text-red-500'>
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>

          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text'>Email</span>
            </label>
            <input
              type='email'
              placeholder='Your email'
              className='input input-bordered w-full'
              {...register('email', {
                required: {
                  value: true,
                  message: 'Email is required',
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: 'Provide a valid email',
                },
              })}
            />
            <label className='label'>
              {errors.email?.type === 'required' && (
                <span className='label-text-alt text-red-500'>
                  {errors.email.message}
                </span>
              )}
              {errors.email?.type === 'pattern' && (
                <span className='label-text-alt text-red-500'>
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>

          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text'>Password</span>
            </label>
            <input
              type='password'
              placeholder='Password'
              className='input input-bordered w-full'
              {...register('password', {
                required: {
                  value: true,
                  message: 'Password is required',
                },
                minLength: {
                  value: 6,
                  message: 'Must be 6 characters or longer',
                },
              })}
            />
            <label className='label'>
              {errors.password?.type === 'required' && (
                <span className='label-text-alt text-red-500'>
                  {errors.password.message}
                </span>
              )}
              {errors.password?.type === 'minLength' && (
                <span className='label-text-alt text-red-500'>
                  {errors.password.message}
                </span>
              )}
            </label>
          </div>
          {errorElement}
          <input
            className='btn w-full text-white'
            type='submit'
            value='SignUp'
          />
        </form>
        <p className='text-center'>
          <small>
            Already have an account?{' '}
            <Link to='/login' className='text-primary'>
              Please login
            </Link>
          </small>
        </p>
        <div className='divider'>OR</div>
        <button
          onClick={() => signInWithGoogle()}
          className='btn btn-outline w-full'
        >
          Continue with google
        </button>
        {gErrorElement}
      </div>
    </div>
  )
}

export default SignUp
