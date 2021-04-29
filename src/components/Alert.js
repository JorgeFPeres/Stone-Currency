// import React, { useEffect } from 'react'

// const Alert = ({ type, msg, removeAlert }) => {
//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       removeAlert()
//     }, 3000)
//     return () => clearTimeout(timeout)
//   }, [])
//   return <p>{msg}</p>
// }

// export default Alert

// useEffect(() => {
//   if (state.status === 'closing') {
//     const timeout = setTimeout(() => {
//       dispatch({ type: 'REPORT_ANIMATION_FINISHED' })
//     }, 500)
//     return () => {
//       clearTimeout(timeout)
//     }
//   }
// }, [state.status])

// const open = () => {
//   dispatch({ type: 'OPEN' })
// }

// const close = () => {
//   dispatch({ type: 'CLOSE' })
// }

// const toggle = () => {
//   dispatch({ type: 'TOGGLE' })
// }
