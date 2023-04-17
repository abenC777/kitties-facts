import { useEffect, useState } from 'react'
import getRandomFact from '../services/facts'

export default function useCatFact () {
  const [fact, setFact] = useState(null)

  const refreshFact = () => {
    getRandomFact()
      .then(newFact => setFact(newFact))
  }

  // para recuperar la cita al cargar la pag
  useEffect(() => {
    refreshFact()
  }, [])

  return { fact, refreshFact }
}
