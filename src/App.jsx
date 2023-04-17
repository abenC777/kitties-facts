import useCatImage from './hooks/useCatImage'
import useCatFact from './hooks/useCatFact'

function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main className='min-h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500 grid place-content-center'>
      <section className=' lg:w-[900px] border border-slate-900 p-10 m-4  rounded-lg bg-slate-50 shadow-lg flex flex-col items-center'>
        <h1 className='text-slate-900 text-3xl font-bold text-center'>
          <span className='text-5xl text-violet-500'>C</span>ats App
        </h1>
        <button className='border border-fuchsia-500 rounded-lg p-2 mt-2 shadow-md' onClick={handleClick}>Get a new fact!</button>
        {fact && (
          <p className='text-slate-600 lg:text-3xl  text-center my-4'>{fact}</p>
        )}
        {imageUrl && (
          <img
            className='md:w-[350px]'
            src={imageUrl}
            alt={`Image extracted using the first three words from ${fact}`}
          />
        )}
      </section>
    </main>
  )
}

export default App
