import { useEffect, useState } from 'react'

const randomFactUrl = 'https://catfact.ninja/fact'
function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()
  // optener frase al cargar pagina
  useEffect(() => {
    fetch(randomFactUrl)
      .then(res => res.json())
      .then(data => {
        setFact(data.fact)
      })
  }, [])
  // optener img al optener frase
  useEffect(() => {
    if (!fact) return // si no tenemos frace retorne
    const firstWord = fact.split(' ', 3).join(' ')
    fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red`)
      .then(res => res.blob())
      .then(imgdata => {
        const Url = URL.createObjectURL(imgdata)
        setImageUrl(Url)
      })
  }, [fact])

  const handleNewFact = () => {
    fetch(randomFactUrl)
      .then(res => res.json())
      .then(data => {
        setFact(data.fact)
      })
  }

  return (
    <main className='grid place-items-center mt-9 gap-4 font-normal '>
      <h1>Prueba tecnica App de Gatitos</h1>
      <section className='w-96 flex flex-col gap-4 items-center'>
        {fact && <p className='text-center'>{fact}</p>}
        {imageUrl && <img width={350} height={300} src={imageUrl} />}
      </section>
      <button className='w-14 h-14 bg-slate-500' onClick={handleNewFact}>click</button>
    </main>
  )
}
export default App
