import './App.css';
import { SearchAlt } from '@boxicons/react';


function App() {
  return (
    <>
    <main className='min-h-screen flex justify-center'>
      <div className='w-full max-w-7xl bg-black/70 px-6 pb-16'>

        <section className='flex flex-col items-center pt-10'>
          <div className="flex-col text-center">
            <h1 className='text-4xl font-medium m-4 text-white'>PROTEIN RECIPES</h1>
            <div className='border border-gray-600 rounded-md flex items-center w-600 max-w-md h-12 pl-3 overflow-hidden'>
              <SearchAlt className='h-8 w-8 shrink-0 text-gray-500'/>
              <input 
                className='w-full flex-1 text-xl px-2 outline-none h-full text-white'
                type="text" placeholder='Search your recipe...'/>
              <button className='h-full px-6 text-xl text-gray-300 font-medium border border-gray-600 rounded-sm hover:cursor-pointer'>
                Search
              </button>
            </div>
          </div>
        </section>

        <section className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 justify-items-center text-white'>
          <ul>
            <li>Crispy Egg</li>
          </ul>

        </section>

      </div>
    </main>
    </>
  )
}

export default App
