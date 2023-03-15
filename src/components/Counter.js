import { useSelector } from "react-redux";

const Counter = () => {
  const countStore = useSelector((state)=> state.count);

  return(
    <h>{countStore}</h>
  )
}
export default Counter;