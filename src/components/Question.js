import React, { useState , useRef} from 'react'
import { RadioButton, RadioGroup } from 'react-radio-buttons'

function Question(props) {
    const [count, setcount] = useState(0)
    const radioInput = useRef(null)
  
    return (
        <div>
            <div className='m-3 p-2 border-solid border-2 border-blue-400'>
           <h2>Questions Section - 60 Seconds Test</h2>
           <div className='flex flex-row m-4 md:m-10'>
               <button className='md:basis-1/12' onClick={()=>{(count>0) ? setcount(count-1):setcount(0);radioInput.current.focus()}}><i className="fa fa-arrow-left text-3xl" aria-hidden="true"></i></button>
               <div className='md:basis-10/12'>Attempt Question Here</div>
               <button className='md:basis-1/12' onClick={()=>{(count+1<props.data.length) ? setcount(count+1):setcount(props.data.length-1);radioInput.current.focus()}}><i className="fa fa-arrow-right text-3xl" aria-hidden="true"></i></button>
           </div>
           <p><span className='font-bold'>Question#{count+1} </span>{props.data[count].question}</p>
           <RadioGroup className='m-4' onChange={(e) =>{props.handleAnswer(props.data[count].id,e)}}>
           {props.data[count].options.map((o, i) =>{
               return (<RadioButton rootColor="black" pointColor="blue" value={o} key={count} ref={radioInput}>{o}</RadioButton>)
           })}
          </RadioGroup>
           <button className='btn btn-primary rounded p-2 bg-blue-400' onClick={(e)=>{props.handleSubmit(e)}}>Submit</button>
           </div>
          
        </div>
    )
}

export default Question
