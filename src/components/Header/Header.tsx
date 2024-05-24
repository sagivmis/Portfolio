import { fullpageApi } from "@fullpage/react-fullpage"
import LinkBar from "./LinkBar"
import "./header.css"

interface IHeader {
  fullPageApi: fullpageApi
}

const Header = (props: IHeader) => {
  const { fullPageApi } = props
  return (
    <div className='header-container'>
      <LinkBar fullPageApi={fullPageApi} />
    </div>
  )
}

export default Header
