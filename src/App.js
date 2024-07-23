import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  setTotalAmount,
  setCategoryFilter,
  setPriceFilter,
  setSortedFilter,
} from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  return (
    <>
      <button onClick={() => dispatch(setCategoryFilter("women"))}>
        category
      </button>
      <button onClick={() => dispatch(setPriceFilter(900))}>amnt</button>
      <button onClick={() => dispatch(setSortedFilter("descending"))}>
        sort
      </button>
    </>
  );
}

export default App;
