import React from 'react';
import styled from 'styled-components';
export function Home(props) {
  const Wrapper = styled.div`
      margin-left: auto;
      margin-right: auto;
      text-align: center;
    `,
    Nickname = styled.input`
      font-family: 'Lucida Sans Unicode', 'Lucida Grande', sans-serif;
      font-size: 15px;
      word-wrap: break-word;
      color: #e0e0ff;
      background: none;
      resize: none;
      border: 0px;
      opacity: 1;
      position: absolute;
      left: 12px;
      top: 10px;
      vertical-align: middle;
      /* display: inline-block; */
      width: 220px;
      height: 24px;
      /* almost mobile device */
      @media (max-width: 450px) {
        /* screen width is less than 768px (medium) */
        top: 9px;
      }
      @media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) {
        top: 6px;
      }
    `,
    NicknameWrapper = styled.div`
      width: 244px;
      margin-top: 34px;
      background: rgb(81, 175, 170);
      box-shadow: rgb(0, 0, 0) 0px 6px 50px;
      opacity: 1;
      position: relative;
      height: 43px;
      border-radius: 29px;
      border: 2px solid rgba(0, 0, 0, 1);
      overflow: hidden;
      /* display: inline-block; */
    `,
    NochButton = styled.div`
      width: ${(props) => props.width};
      color: rgb(255, 255, 255);
      font-weight: bold;
      text-align: center;
      font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
      font-size: ${(props) => props.fontSize};
      cursor: pointer;
      height: 47px;
      line-height: 47px;
      box-shadow: rgba(0, 0, 0, 0.75) 0px 3px 20px;
      border-radius: 34px;
      /* display: inline-block; */
      margin-top: 10px;
      /* margin-bottom: 50px; */
      background-image: url('images/btnPlayNow.png');
      margin-left: 4px;
    `,
    NochLine = styled.hr`
      border: none;
      height: 1px;
      background-color: #fff;
      color: #fff;
      margin-top: -24px;
    `;
  return (
    <>
      <Wrapper class={props.class}>
        <h1>nốichữ.com</h1>
        <NochLine />
        <iframe
          width='250px'
          height='250px'
          frameBorder='0'
          scrolling='no'
          src='tagcanvas.html'
          title='TagCanvas'
        ></iframe>
        <NicknameWrapper>
          <Nickname
            autoFocus
            id='txtUsername'
            placeholder='Nickname'
            maxLength='24'
            type='text'
          />
        </NicknameWrapper>
        <NochButton width='160px' fontSize='20px'>
          Chơi với bạn
        </NochButton>
        <NochButton width='125px' fontSize='22px'>
          Chơi liền
        </NochButton>
        <NochButton width='95px' fontSize='24px'>
          Thoát
        </NochButton>
      </Wrapper>
    </>
  );
}
