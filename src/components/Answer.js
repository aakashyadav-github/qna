import React from 'react'

function Answer(props) {
    return (
        <div>
            <div className='m-3 py-2 px-2 border-solid border-2 border-blue-400'>
            <div className='items-center '>
            <p>Answer Section</p>    
            <h2 className='my-12'>Review Answers Here</h2>
           {props.ansData.map((v,k)=>{
               return (<div className='flex-row items-center my-6' key={k}>#{v.id}: {v.ans}</div>)
           })}
           </div>
           </div>
        </div>
    )
}

export default Answer
