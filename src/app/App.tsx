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

      <div className='flex gap-3'>
        <button className='cursor-pointer' onClick={() => dispatch(increment())}>Add</button>
        <button className={`cursor-pointer ${count === 0 && 'opacity-50'}`} disabled={count === 0} onClick={()=> dispatch(decrement()) }>Remove</button>
        <button className='cursor-pointer' style={{'display': (count % 5 == 0 && count > 0) && 'none'}} onClick={() => handleValueChange(5)}>+5</button>
      </div>
    </>
  )
}

export default App
