'use client'

import { useState } from 'react'

const Home = () => {
  const [count, setCount] = useState<number | ''>('')
  const [randomNumbers, setRandomNumbers] = useState<number[]>([])

  const handleGenerate = () => {
    if (typeof count !== 'number' || count <= 0) return

    const numbers = Array.from({ length: count }, () =>
      Math.floor(Math.random() * 1000)
    )
    setRandomNumbers(numbers)
    setCount('') // Clear the input field after generating numbers
  }

  const handleCopy = () => {
    const numbersString = randomNumbers.join(', ')
    navigator.clipboard.writeText(numbersString).then(() => {
      alert('Copied to clipboard!')
    })
  }

  return (
    <div
      className='min-h-screen p-6 flex flex-col items-center py-[5rem]'
      style={{ backgroundColor: 'hsl(222.2, 84%, 4.9%)' }}
    >
      <h1 className='text-4xl font-extrabold mb-8 text-center text-white drop-shadow-lg'>
        Random Number Generator
      </h1>
      <div className='bg-white p-8 shadow-2xl rounded-lg w-full max-w-md transform transition-all hover:scale-105'>
        <label className='block mb-4 text-blue-800 font-semibold text-lg'>
          Enter Number (n):
        </label>
        <input
          type='number'
          value={count}
          onChange={(e) => setCount(Number(e.target.value) || '')}
          className='w-full border border-blue-300 rounded-lg p-3 text-blue-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-400'
          placeholder='Enter a positive number'
        />
        <button
          onClick={handleGenerate}
          className='mt-6 w-full bg-blue-500 text-white font-bold py-3 rounded-lg hover:bg-blue-600 shadow-lg'
        >
          Generate Numbers
        </button>
      </div>

      {randomNumbers.length > 0 && (
        <div className='bg-white p-8 shadow-2xl rounded-lg mt-8 w-full max-w-2xl transform transition-all hover:scale-105'>
          <h2 className='text-2xl font-bold mb-6 text-blue-800 text-center'>
            Generated Numbers
          </h2>
          <div className='overflow-x-auto bg-blue-100 p-4 rounded-lg border border-blue-300'>
            <p className='text-blue-800 text-lg font-mono break-words'>
              {randomNumbers.join(', ')}
            </p>
          </div>
          <button
            onClick={handleCopy}
            className='mt-6 w-full bg-blue-500 text-white font-bold py-3 rounded-lg hover:bg-blue-600 shadow-lg'
          >
            Copy to Clipboard
          </button>
        </div>
      )}
    </div>
  )
}

export default Home
