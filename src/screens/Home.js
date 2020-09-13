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
        display: inline-block;
        width: '220px',
        height: '24px'
    `,
        NicknameWrapper = styled.div`
        width: 244px;
        margin-top: 34px;
        background:rgb(81, 175, 170);
        box-shadow: rgb(0, 0, 0) 0px 6px 50px;
        opacity: 1;
        position: relative;
        height: 43px;
        border-radius: 29px;
        border: 2px solid rgba(0, 0, 0, 1);
        overflow: hidden;
        display: inline-block;
    `
    return (
        <Wrapper class={props.class}>
            <NicknameWrapper>
                <Nickname autoFocus id="txtUsername" placeholder="Nickname" maxLength="24" type="text" />
            </NicknameWrapper>
        </Wrapper>
    );
}