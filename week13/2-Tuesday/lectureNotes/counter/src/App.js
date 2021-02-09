import React, {useState, useEffect} from 'react'
//custom file
const useCounter = ({initialState, step}) => {
  const [count, setCount] = useState(initialState)  //
  const increment = () => setCount(count + step);
  return [count, increment]
}
//component
const App = () => {
  const [count, increment] = useCounter({initialState: 5, step:4});
  return <button onClick={increment}>{count}</button>
}
// const App = () => {
//   //const initialCount = ()=> parseInt(window.localStorage.getItem('count'))  || 0;
//   return (
//     <div styles={{textAlign: 'center', paddingTop:'200px'}}>
//       <button onClick={handleChange}>{count}</button>
//     </div>
//   )
// }
export default App



  // const initialCount = () => parseInt(window.localStorage.getItem('count')) || 0;

  // const [count, setCount] = useState(initialCount)
  // const [count2, setCount2] = useState(0)

  //const count
  //const setCount = () => {}

  // const handleChange = () => setCount(count + 1);
  // const handleChange2 = () => {

  //   setCount2(count2 + 1)
  //   console.log('updating count');
  // };

  // useEffect(() => {

  //   window.localStorage.setItem('count', count);
  //     console.log('count has been updated');
  // }, [count])

  // useEffect(() => {
  //   console.log("I get called alot");
  // })

//   return (
//     <>
//       <div styles={{textAlign: 'center', paddingTop:'200px'}}>
//         <button onClick={handleChange}>{count}</button>
//         {/* <button onClick={handleChange2}>{count2}</button> */}
//       </div>
//     </>
//   )
// }

// export default App

