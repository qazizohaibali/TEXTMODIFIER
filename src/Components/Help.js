import React from 'react'

export default function Help(props) {
  return (
        <div className="container mt-4" style={{color: props.mode==='dark'?'white':'black'}}>
            
            <h1 >HOW IT WORKS</h1>
            <h6>BUTTONS</h6>
            <ul>
                <li>
                    <p>To convert your all text in capital letters, click on "UPPERCASE" btn. </p>
                </li>
                <li>
                    <p>To convert your all text in small letters, click on "lowercase" btn. </p>
                </li>
                <li>
                    <p>To copy your all modified text, click on "Copy Text" btn. </p>
                </li>
                <li>
                    <p>To clear text, click on "To Clear Text" btn. </p>
                </li>
                <li>
                    <p>To romove extra spaces from your text, click on "Remove Extra Spaces" btn. </p>
                </li>
                </ul>
          <h6>COUNTERS</h6>
        
            <ul><li>Character Counter will count all characters in your given text.</li>
            <li>Word Counter will show you how many words are in your text.</li>
            </ul>
        </div>
    )
}
