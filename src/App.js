import React, { useState, useEffect } from 'react'
import Question from './components/Question';
import './App.css';
import staticData from './data/staticData.json'
import Answer from './components/Answer';
import Submit from './components/Submit';

function App() {
  const [ansData, setansData] = useState([])
  const [timer, settimer] = useState(true)
  const [correctCount, setcorrectCount] = useState(0)
  const [id, setid] = useState('')
  const [ans, setans] = useState('')

  useEffect(() => {
    updateCorrect(id,ans,staticData)
  },[ansData]);
  const updateAnswer= (id,ans) =>{
  const obj = {"id": id, "ans": ans};
    ansData.find((value)=>{
      if(value.id===id){
      ansData.splice(ansData.indexOf(value),1);
    }
  })
    setansData(ansData => [...ansData, obj]);
    setid(id)
    setans(ans)
}
const updateCorrect = (id,ans,data)=>{
  data.forEach((value)=>{
    if(value.answer==ans && value.id==id){
      setcorrectCount(correctCount+1);
      console.log(correctCount);
    }
  })
}
const updateSubmit =()=>{
  settimer( false);
}

setTimeout(()=>{
    settimer(false);
     console.log('success');
 },60000)
  return (
    <div>
     <div className="App">
      <h1 className='m-2 text-4xl font-semibold text-blue-400'>Question & Answer App </h1>
      <div className='flex flex-row'>
      {timer &&  <>
      <div className='md:basis-1/4'><Answer ansData={ansData}/></div>
      <div className='md:basis-3/4'><Question data={staticData} handleAnswer={(id,ans)=>{updateAnswer(id,ans)}} handleSubmit={(e)=>{updateSubmit(e)}}/></div>
      </>}
      {!timer && <Submit ansData={ansData} correctCount={correctCount}/>}
      </div>
    </div>
    </div>
  );
}

export default App;
