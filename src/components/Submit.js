import React from 'react'
import staticData from '../data/staticData.json'

function Submit(props) {
    return (
        <>
        <div className='basis-1/4'></div>
        <div className='basis-2/4'>
            <i className="fa fa-check-circle text-green-600 text-8xl" aria-hidden="true"></i>
            <p className='text-4xl my-12'>You have successfully submitted the Assessment</p>
            <p className='my-2'><span className='font-bold'>-Questions Asked: </span>{staticData.length}</p>
            <p className='my-2'><span className='font-bold'>-Questions Correct: </span>{props.correctCount}</p>
            <p className='my-2'><span className='font-bold'>-Your Score: </span>{props.correctCount/staticData.length*100}%</p>
        </div>
        </>
    )
}

export default Submit
