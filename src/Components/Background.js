import React from 'react'

const Background = () => {
  return (
    <>
    <div style={{zIndex:-1}}>
      <div className="square" style={{top:500,lift:500}}></div>
      <div className="square"></div>
      <div className="square" style={{top:10,lift:10}}></div>
      <div className='circle'></div>
      <div className="loader">
  <div id="shuriken">
    <span className="top">
      <span className="topInner"></span>
    </span>
    <span className="bottom">
      <span className="bottomInner"></span>
    </span>
    <span className="right">
      <span className="rightInner"></span>
    </span>
    <span className="left">
      <span className="leftInner"></span>
    </span>
    <span className="middle"></span>
    <span className="middleInner"></span>
  </div>
  <span id="shadow"></span>
</div>
<div className="loader" style={{left:-200, position:'relative'}}>
  <div id="shuriken">
    <span className="top">
      <span className="topInner"></span>
    </span>
    <span className="bottom">
      <span className="bottomInner"></span>
    </span>
    <span className="right">
      <span className="rightInner"></span>
    </span>
    <span className="left">
      <span className="leftInner"></span>
    </span>
    <span className="middle"></span>
    <span className="middleInner"></span>
  </div>
  <span id="shadow"></span>
</div>

    </div>
    </>
  )
}

export default Background
