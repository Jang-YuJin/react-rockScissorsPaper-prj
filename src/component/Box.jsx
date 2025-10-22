import React from 'react'

const Box = (props) => {
  let judgement = props.judgement;//승패여부 판단
  let judgeBoxClass = props.judgement === null ? '' : (props.judgement == '무승부' ? 'draw-box' : (props.judgement == '승리' ? 'win-box' : 'lose-box'));//박스 스타일용으로 만든 변수
  let judgeFontClass = props.judgement === null ? '' : (props.judgement == '무승부' ? 'draw-font' : (props.judgement == '승리' ? 'win-font' : 'lose-font'));//폰트 스타일용으로 만든 변수
  if(props.judgement && props.title === '컴퓨터'){//컴퓨터 승패여부 판단 로직
    if(props.judgement === '승리'){
      judgement = '패배';
      judgeBoxClass = 'lose-box';
      judgeFontClass = 'lose-font';
    }else if(props.judgement === '패배'){
      judgement = '승리';
      judgeBoxClass = 'win-box';
      judgeFontClass = 'win-font';
    }
  }

  return (
    <div className={`box-container ${judgeBoxClass}`}>
        <div className='title'>{props.title && props.title}</div>
        <img className='img-size' src={props.select === null ? '/img/who.png' : props.select.img} alt='question'></img>
        <div className='win-cnt'>이긴 횟수: {props.cnt}</div>
        <div className={`jugdge ${judgeFontClass}`}>{judgement}</div>
    </div>

  )
}

export default Box
