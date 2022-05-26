import React from 'react'
import TitleUnderline from '../Shared/TitleUnderline'

const MyPortfolio = () => {
  return (
    <div className='bg-gray-100 p-4 min-h-[calc(100vh-64px)]'>
      <div className='container mx-auto w-full p-4 md:p-8 rounded-lg drop-shadow-lg bg-white'>
        <h2 className='text-center text-2xl font-bold uppercase'>
          My Portfolio
        </h2>
        <TitleUnderline />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-8'>
          <div>
            <h2 className='text-center text-xl font-bold text-primary'>
              Personal Information
            </h2>
            <h2 className='font-bold mt-2'>
              Full Name: <span className='font-normal'>Tushar Pramanik</span>
            </h2>
            <h2 className='font-bold mt-2'>
              Phone: <span className='font-normal'>(+880) 1746-941437</span>
            </h2>
            <h2 className='font-bold mt-2'>
              Email Address:{' '}
              <a
                className='text-primary font-normal'
                href='mailto:tusharpramanikbd@gmail.com'
              >
                tusharpramanikbd@gmail.com
              </a>
            </h2>
            <h2 className='text-center text-xl font-bold text-primary mt-4'>
              Educational Background
            </h2>
            <h2 className='font-bold mt-2'>
              Degree: <span className='font-normal'>Bachelor Of Science</span>
            </h2>
            <h2 className='font-bold mt-2'>
              Subject:{' '}
              <span className='font-normal'>
                Computer Science And Engineering
              </span>
            </h2>
            <h2 className='font-bold mt-2'>
              University:{' '}
              <span className='font-normal'>
                American International University-Bangladesh (AIUB)
              </span>
            </h2>
            <h2 className='font-bold mt-2'>
              Address:{' '}
              <span className='font-normal'>Kuratoli, Dhaka - 1229</span>
            </h2>
            <h2 className='font-bold mt-2'>
              Duration: <span className='font-normal'>2014 - 2018</span>
            </h2>
            <h2 className='text-center text-xl font-bold text-primary mt-4'>
              Development Skills
            </h2>
            <h2 className='font-bold mt-2'>Expertise:</h2>
            <h2>
              HTML5, CSS3, Bootstrap 5, Tailwind, JavaScript, ES6, React, React
              Router, React Hooks, Context API, React Bootstrap, DaisyUI,
            </h2>
            <h2 className='font-bold mt-2'>Comfortable:</h2>
            <h2>
              Node.js , Express.js, REST API, Nodemon, MongoDB, JsonWebToken,
              Firebase
            </h2>
            <h2 className='font-bold mt-2'>Familiar:</h2>
            <h2>
              Node Mailer, Stripe, Redux, C, C++, C#, Java, Android Application
              Development, MySQL
            </h2>
            <h2 className='font-bold mt-2'>Tools:</h2>
            <h2>
              VS Code, Github, Chrome DevTools, Firefox DevTools, Heroku,
              Netlify, Postman
            </h2>
          </div>
          <div>
            <h2 className='text-center text-xl font-bold text-primary'>
              Personal Projects
            </h2>

            <h2 className='text-xl font-bold mt-4'>1. Fruit Mama</h2>
            <h2 className='font-bold mt-2'>
              Live Link:{' '}
              <a
                href='https://fruit-mama-client.web.app/'
                target='_blank'
                rel='noreferrer'
                className='font-normal text-primary'
              >
                fruit-mama-client.web.app
              </a>
            </h2>
            <h2 className='font-bold mt-2'>Overview:</h2>
            <ul className='list-disc pl-5'>
              <li>
                <h2>
                  It can be used to modify the quantity, add and delete fruits.
                </h2>
              </li>
              <li>
                <h2>New suppliers can also contact the website owner.</h2>
              </li>
            </ul>
            <h2 className='font-bold mt-2'>Technology Used:</h2>
            <h2>
              HTML5, CSS3, React, Firebase, React Bootstrap, React Router,
              Node.js, Express.js, Mongodb, JsonWebToken
            </h2>

            <h2 className='text-xl font-bold mt-4'>2. Doctor Smile</h2>
            <h2 className='font-bold mt-2'>
              Live Link:{' '}
              <a
                href='https://doctor-smile-app-9f0d2.web.app/'
                target='_blank'
                rel='noreferrer'
                className='font-normal text-primary'
              >
                doctor-smile-app-9f0d2.web.app
              </a>
            </h2>
            <h2 className='font-bold mt-2'>Overview:</h2>
            <ul className='list-disc pl-5'>
              <li>
                <h2>It can be used to book dental doctor’s appointments.</h2>
              </li>
              <li>
                <h2>Users have to login by google or signup to book.</h2>
              </li>
            </ul>
            <h2 className='font-bold mt-2'>Technology Used:</h2>
            <h2>
              HTML5, CSS3, React, Firebase, React Bootstrap, React Router, React
              Firebase Hooks
            </h2>

            <h2 className='text-xl font-bold mt-4'>3. ToDo App</h2>
            <h2 className='font-bold mt-2'>
              Live Link:{' '}
              <a
                href='https://to-do-app-bc949.web.app/'
                target='_blank'
                rel='noreferrer'
                className='font-normal text-primary'
              >
                to-do-app-bc949.web.app
              </a>
            </h2>
            <h2 className='font-bold mt-2'>Overview:</h2>
            <ul className='list-disc pl-5'>
              <li>It can be used to add tasks, tasks done, delete tasks.</li>
              <li>
                Tasks are stored in mongodb so that the user can see them.
              </li>
            </ul>
            <h2 className='font-bold mt-2'>Technology Used:</h2>
            <h2>
              HTML5, CSS3, React, Firebase, DaisyUI, React Router, Node.js,
              Express.js, Mongodb, JsonWebToken
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyPortfolio
