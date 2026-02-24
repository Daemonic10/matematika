import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header'
import Herosection from './component/Herosection'
import Materi from './component/Materi'
import Quizz from './component/Quizz'
import RillQuizz from './component/RillQuizz'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="">

    <Header></Header>
    <Herosection></Herosection>
    <Materi></Materi>
    <Quizz></Quizz>
    <RillQuizz></RillQuizz>
    </div>

    </>
  )
}

export default App
