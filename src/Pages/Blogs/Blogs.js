import React from 'react'
import TitleUnderline from '../Shared/TitleUnderline'

const Blogs = () => {
  return (
    <div className='bg-gray-100 p-4 min-h-[calc(100vh-64px)] grid justify-center items-center'>
      <div className='container mx-auto w-full lg:w-2/3 p-8 rounded-lg drop-shadow-lg bg-white'>
        <h2 className='text-center text-2xl font-bold'>Question Answer</h2>
        <TitleUnderline />

        <h2 className='text-xl font-bold mt-4'>
          1. How will you improve the performance of a React Application?
        </h2>
        <h2>
          There are some techniques to improve the performance of a React
          Application:
        </h2>
        <ul className='list-disc pl-5'>
          <li>
            <h2>
              When a parent component re-renders, the child component also
              re-renders, even if the child has no effect on the state change,
              which causes unnecessary renders. It can slow down large
              applications. In order to solve this we can keep our component
              state local where necessary, which means we can create the state
              changing part as a separate component and make it as another child
              of that parent component. So only that new component will
              re-render, not the other siblings or parent.
            </h2>
          </li>
          <li>
            <h2>
              For primitive values we can stop re-rendering a component with the
              same prop value with the React.memo() hook. It will cache the
              component for the same state.
            </h2>
          </li>
          <li>
            <h2>
              When a React application is generated, it loads the whole code
              into a single module, which creates slow loading for large
              applications to download from the server. We can split our whole
              code into multiple chunks with dynamic import and lazy loading so
              that whichever page will be requested, only that page will be
              downloaded.
            </h2>
          </li>
        </ul>

        <h2 className='text-xl font-bold mt-2'>
          2. What are the different ways to manage a state in a React
          application?
        </h2>
        <ul className='list-disc pl-5'>
          <li>
            <h2>
              We can use the useState() hook to manage the local state. It takes
              any value type and provides a setter method to update the state
            </h2>
          </li>
          <li>
            <h2>
              We can use the useReducer() hook to manage local or global state.
              It is used to manage more complex states. Usually if updating a
              state depends on another state then useReduce() is a good choice.
            </h2>
          </li>
          <li>
            <h2>
              We can use contextAPI for global state management for small
              applications. Because by default when using contextAPI if the
              parent component re-render all the child components will also
              re-render which makes large applications slow.
            </h2>
          </li>
          <li>
            <h2>
              We can use React query to manage server state. It provides caching
              functionality, error functionality and other server state
              management functionalities.
            </h2>
          </li>
        </ul>

        <h2 className='text-xl font-bold mt-2'>
          3. How does prototypical inheritance work?
        </h2>
        <h2>
          Every object with its methods and properties contains an internal and
          hidden property known as [[Prototype]]. Prototypal Inheritance is a
          feature in javascript used to add methods and properties to objects.
          It is a method by which an object can inherit the properties and
          methods of another object. prototypical inheritance means that objects
          and methods can be shared, extended, and copied.
        </h2>

        <h2 className='text-xl font-bold mt-2'>
          4. Why you do not set the state directly in React?
        </h2>
        <h2>
          Every time state changes react create a virtual dom tree and compare
          with previous virtual dom tree and identify the changes. Only After
          that the changes are implemented in the actual dom. To work with this
          functionality React developers have created use state hook and set
          state method. But if we try to update the state directly without the
          set state method, react can not perform the diffing functionality,
          which turns into a rendering issue. That’s why we should never mutate
          the state directly.
        </h2>

        <h2 className='text-xl font-bold mt-2'>
          5. What is a unit test? Why should write unit tests?
        </h2>
        <h2>
          UNIT TESTING is a type of software testing where individual units or
          components of a software are tested. The purpose is to validate that
          each unit of the software code performs as expected. Unit Testing is
          done during the development (coding phase) of an application by the
          developers. Unit Tests isolate a section of code and verify its
          correctness. A unit may be an individual function, method, procedure,
          module, or object.
        </h2>
      </div>
    </div>
  )
}

export default Blogs
