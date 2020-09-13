import React from 'react';
export function Home(props) {
    const inputStyle = {
        fontFamily: '"Lucida Sans Unicode", "Lucida Grande", "sans-serif"',
        fontSize: '15px',
        wordWrap: 'break-word',
        color: '#e0e0ff',
        background: 'none',
        resize: 'none',
        border: '0px',
        // height: '23px',
        opacity: '1',
        position: 'absolute',
        left: '12px',
        top: '10px',
        verticalAlign: 'middle',
        display: 'inline-block',
        width: '220px',
        height: '24px'
    },
        divStyle = {
            width: '244px',
            marginTop: '34px',
            background: 'rgb(81, 175, 170)',
            //background: 'rgb(09, 13, 20)',
            boxShadow: 'rgb(0, 0, 0) 0px 6px 50px',
            opacity: 1,
            position: 'relative',
            height: '43px',
            borderRadius: '29px',
            border: '2px solid rgba(0, 0, 0, 1)',
            overflow: 'hidden',
            display: 'inline-block',
        },
        rootStyle = {
            marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'
        }
    return (
        <div style={rootStyle}>
            <div class={props.class} style={divStyle}>
                <input autoFocus id="txtUsername" placeholder="Nickname" maxLength="24" style={inputStyle} type="text"></input>
            </div>
        </div>
    );
}