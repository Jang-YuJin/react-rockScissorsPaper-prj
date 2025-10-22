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
  const [judgement, setJudgement] = useState(null);           //승패여부
  const [select, setSelect] = useState(null);                 //사용자 가위바위보
  const [computerSelect, setComputerSelect] = useState(null); //컴퓨터 가위바위보
  const [userWinCnt, setUserWinCnt] = useState(0);            //사용자 이긴 횟수
  const [computerWinCnt, setComputerWinCnt] = useState(0);    //컴퓨터 이긴 횟수
  const [totCnt, setTotCnt] = useState(0);                    //전체 경기 횟수

  const play = (userChoice) => {//가위바위보 하는 함수
    setSelect(choice[userChoice]);//사용자 가위바위보 정함
    let computer = playComputer();
    setComputerSelect(computer);//컴퓨터 가위바위보 정함
    judge(choice[userChoice], computer);//승패여부 판단 함수, 횟수까지 셈
  };

  const playComputer = () => {
    let itemArray = Object.keys(choice);//객체의 키값만 뽑아서 배열로 반환
    let computerChoice = Math.floor(Math.random()*itemArray.length)

    return choice[itemArray[computerChoice]];
  };

  const judge = (userSelect, computerSelect) => {
    setTotCnt((prev) => prev + 1);
    if(userSelect.name === computerSelect.name){
      setJudgement(judgeObj.draw);
    } else if(userSelect.name === 'Rock'){
      if(computerSelect.name === 'Scissors'){
        setJudgement(judgeObj.win);
        setUserWinCnt((prev) => prev + 1);
      }else{
        setJudgement(judgeObj.lose);
        setComputerWinCnt((prev) => prev + 1);
      }
    } else if(userSelect.name === 'Scissors'){
      if(computerSelect.name === 'Paper'){
        setJudgement(judgeObj.win);
        setUserWinCnt((prev) => prev + 1);
      }else{
        setJudgement(judgeObj.lose);
        setComputerWinCnt((prev) => prev + 1);
      }
    } else{
      if(computerSelect.name === 'Rock'){
        setJudgement(judgeObj.win);
        setUserWinCnt((prev) => prev + 1);
      }else{
        setJudgement(judgeObj.lose);
        setComputerWinCnt((prev) => prev + 1);
      }
    }
  };

  const resetCnt = () => {
    setTotCnt(0);
    setUserWinCnt(0);
    setComputerWinCnt(0);
  }

  return (
    <div className='main'>
      <div className='play-cnt'>
        <div>경기 횟수: {totCnt}</div>
        <div><button className='reset-button' onClick={() => resetCnt()}>경기 초기화</button></div>
      </div>
      <div className='container'>
        <Box title='당신' judgement={judgement} select={select} cnt={userWinCnt}></Box>
        <Box title='컴퓨터' judgement={judgement} select={computerSelect} cnt={computerWinCnt}></Box>
      </div>
      {judgement === null ? <div className='desc'>가위 바위 보 버튼을 눌러주세요!</div> : ''}
      <div className='btn-container'>
        <button className='img-button' onClick={() => play('rock')}><img className='btn-img' src={'/button/rock.png'} alt='바위'></img></button>
        <button className='img-button' onClick={() => play('scissors')}><img className='btn-img' src={'/button/scissors.png'} alt='가위'></img></button>
        <button className='img-button' onClick={() => play('paper')}><img className='btn-img' src={'/button/paper.png'} alt='보'></img></button>
      </div>
    </div>
  )
}

export default App
