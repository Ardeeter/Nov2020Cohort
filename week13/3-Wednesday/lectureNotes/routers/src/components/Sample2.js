import React, {useHistory} from 'react-router-dom';

export default function Sample2() {

    let history = useHistory();

    const handleClick = () => {
        console.log('logic for sample2');

        history.push('/')
    }
  return (
    <>
    <h2>Sample2</h2>
    <button onClick={handleClick}>Click Me</button>
    </>
  );
}

