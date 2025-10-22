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
    setSelect(choice[userChoice]);//state에 저장
    let computer = playComputer();//컴퓨터 가위바위보 정함
    setComputerSelect(computer);//state에 저장
    judge(choice[userChoice], computer);//승패여부 판단 함수, 횟수까지 셈
  };

  const playComputer = () => {//컴퓨터가 가위바위보 정하는 함수
    let itemArray = Object.keys(choice);//객체의 키값만 뽑아서 배열로 반환
    let computerChoice = Math.floor(Math.random()*itemArray.length)

    return choice[itemArray[computerChoice]];
  };

  const judge = (userSelect, computerSelect) => {//가위바위보 승패 판단, 이긴 횟수와 경기 횟수까지 셀 수 있도록 하는 함수
    setTotCnt((prev) => prev + 1);//전체 경기 횟수 state 증가
    if(userSelect.name === computerSelect.name){//가위바위보 승패 결정
      setJudgement(judgeObj.draw);
    } else if(userSelect.name === 'Rock'){
      if(computerSelect.name === 'Scissors'){
        setJudgement(judgeObj.win);
        setUserWinCnt((prev) => prev + 1);//사용자가 이기면 사용자 이긴 횟수 state 증가
      }else{
        setJudgement(judgeObj.lose);
        setComputerWinCnt((prev) => prev + 1);//컴퓨터가 이기면 컴퓨터 이긴 횟수 state 증가
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

  const resetCnt = () => {//경기초기화 함수
    setTotCnt(0);
    setUserWinCnt(0);
    setComputerWinCnt(0);//이긴 횟수와 경기 횟수를 0으로 초기화
    setSelect(null);
    setComputerSelect(null);
    setJudgement(null);//아예 초기화면처럼 보일 수 있도록 사용자 가위바위보, 컴퓨터 가위바위보, 승패여부 state도 초기화
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
