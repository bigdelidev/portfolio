import { useEffect } from 'react'
import Header from './files/Header'
import Aos from 'aos'



const App = () => {

  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <>
      <Header />
    </>
  )

}

export default App;