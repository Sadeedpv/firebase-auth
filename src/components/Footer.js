import React from 'react'

function Footer() {
  return (
    <div style={{
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        postion:'fixed',
        bottom:'0',
        whiteSpace:'nowrap',
        marginTop:'4em',
        padding:'5px',

    }}>
        <p style={{
            whiteSpace:'nowrap',
        }}>2022 all rights reserved - created by <a href='https://Github.com/Sadeedpv' style={{
            color:'#6603FC',
        }}>Sadeed pv</a></p>
    </div>
  )
}

export default Footer