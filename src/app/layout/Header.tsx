import { useSelector } from "react-redux"

const Header = () => {
  const count = useSelector((state) => state.counter.count)
  return (
    <>
    <div>Header</div>
    <p>Count: {count}</p>
    </>
  )
}

export default Header