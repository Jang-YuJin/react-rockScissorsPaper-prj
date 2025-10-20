import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Box from './component/Box'

const choice = {
  rock: {
    name: "Rock",
    img: "/img/rock.png"
  },
  scissors: {
    name: "Scissors",
    img: "/img/scissors.png"
  },
  paper: {
    name: "Paper",
    img: "/img/paper.png"
  }
}

const judgeObj = {
  win: '승리',
  lose: '패배',
  draw: '무승부'
}

function App() {
  const [select, setSelect] = useState(null);                 //사용자 가위바위보

  const play = (userChoice) => {//가위바위보 하는 함수
    setSelect(choice[userChoice]);//사용자 가위바위보 정함
  };

  return (
    <div className='main'>
      <div className='container'>
        <Box title='당신' select={select}></Box>
        {/* <Box title='컴퓨터' judgement={judgement} select={computerSelect} cnt={computerWinCnt}></Box> */}
      </div>
      <div className='btn-container'>
        <button className='img-button' onClick={() => play('rock')}><img className='btn-img' src={'/button/rock.png'} alt='바위'></img></button>
        <button className='img-button' onClick={() => play('scissors')}><img className='btn-img' src={'/button/scissors.png'} alt='가위'></img></button>
        <button className='img-button' onClick={() => play('paper')}><img className='btn-img' src={'/button/paper.png'} alt='보'></img></button>
      </div>
    </div>
  )
}

export default App
