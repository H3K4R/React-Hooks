import React, {useState} from 'react';



function App() {
  const state = useState();
  //console.log(state);

  const [count, setCount] = useState(5);


  const IncreNum =()=>{
  setCount(count+1);
  //console.log('Helo' + count ++);
}
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={IncreNum}>Click Me</button>
    </div>
  );
}

export default App;
