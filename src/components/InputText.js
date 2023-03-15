import { useDispatch, useSelector } from "react-redux"


const InputText = ({ typeAction }) => {
  const dispatch = useDispatch();
  const countStore = useSelector((state)=> state.count);
  return(
    <input
      type="number"
      value={countStore}
      onChange={(event) => dispatch({ type: typeAction, payload: parseInt(event.target.value) })}
    />
  )
}

export default InputText;