import {memo} from 'react'

function Header() {
    console.log("HEADER rendered")
  return (
    <header>Header</header>
  )
}

export default memo(Header)