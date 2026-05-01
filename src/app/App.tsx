import { useDispatch, useSelector } from 'react-redux'
import '../App.css'
import { decrement, increment, incrementByValue } from '@/store/slice/CounterSlice'

function App() {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()
 function handleValueChange(value: number) {
  dispatch(incrementByValue(value))
 }
  return (
    <>
      <p >Tejas</p>

      <div>
        <button onClick={() => dispatch(increment())}>Add</button>
        <button disabled={count === 0} onClick={()=> dispatch(decrement()) }>Remove</button>
        <button style={{'display': (count % 5 == 0 && count > 0) && 'none'}} onClick={() => handleValueChange(5)}>+5</button>
      </div>
    </>
  )
}

export default App
