// import React from 'react'

// const GrandChild = (props) => {
//   return (
//     <>
//       I am a grandchild and my name is {props.name}
//     </>
//   )
// }

// export default GrandChild


import React, { Component } from 'react'

class Grandchild extends Component {
  render() {
    return (
      <>
        I am a grandchild and my name is {this.props.name}
      </>
    )
  }
}

export default Grandchild
