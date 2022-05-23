import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import Loading from '../Shared/Loading'

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth)
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth)
  let gErrorElement, errorElement
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  if (loading || gLoading) {
    return <Loading />
  }

  if (gError) {
    gErrorElement = <p className='text-red-500 mt-2'>Error: {gError.message}</p>
  }
  if (error) {
    errorElement = <p className='text-red-500 mt-2'>Error: {error.message}</p>
  }

  if (gUser) {
    console.log(gUser)
  }

  return (
    <div className='bg-gray-100 pb-4 min-h-[calc(100vh-64px)] flex justify-center items-center'>
      <div className='container mx-auto w-1/2 p-4 rounded-lg drop-shadow-lg bg-white'>
        <h2 className='text-center text-2xl font-bold'>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='form-control w-full max-w-xs'>
            <label className='label'>
              <span className='label-text'>Email</span>
            </label>
            <input
              type='email'
              placeholder='Your email'
              className='input input-bordered w-full max-w-xs'
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

          <div className='form-control w-full max-w-xs'>
            <label className='label'>
              <span className='label-text'>Password</span>
            </label>
            <input
              type='password'
              placeholder='Password'
              className='input input-bordered w-full max-w-xs'
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
            className='btn w-full max-w-xs text-white'
            type='submit'
            value='Login'
          />
        </form>
        <p className='text-center'>
          <small>
            New to Bikerz Heaven?{' '}
            <Link to='/signup' className='text-primary'>
              Create New Account
            </Link>
          </small>
        </p>
        <div className='divider'>OR</div>
        <button onClick={() => signInWithGoogle()} className='btn btn-outline'>
          Continue with google
        </button>
        {gErrorElement}
      </div>
    </div>
  )
}

export default Login
