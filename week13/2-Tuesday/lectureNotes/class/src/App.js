
import React from 'react'
import {useState, useEffect} from 'react'

const App = () => {

  const [count, setCount] = useState(0);

  const[articles, SetArticles] = useState([])

  useEffect(() => {
    // code insde of here
    // const fetchDataAndSetArticles = async () =>{
    //   const url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0cf790498275413a9247f8b94b3843fd`

    //   const response = await fetch(url)
    //   const data = await response.json()

    //   console.log(data)
    //   SetArticles(data.articles)
    // };
    // fetchDataAndSetArticles()
    console.log('useEffect has fired!')
  }, [count])

  // useEffect(() => {}) -- called every time state is updated
  // useEffect(() => {},[]) -- componentDidMount
  // useEffect(() => {},[stateVariableToTrack]) -- 

  return (
    <>
      <div className="App">
        <h1>Hello World</h1>
        <h3>This is the count: {count}</h3>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </>
  )
}

export default App;
