import { useState, useEffect } from 'react'

const CAT_PREFIX_URL = 'https://cataas.com'

export default function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState(null)

  // para recuperar la imgen cada vez que tenemos una cita nueva
  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ')
    console.log(threeFirstWords)

    const getCatImg = async () => {
      const res = await fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
      const data = await res.json()
      const { url } = data
      setImageUrl(`${CAT_PREFIX_URL}${url}`)
    }
    getCatImg()
  }, [fact])

  return { imageUrl }
}
