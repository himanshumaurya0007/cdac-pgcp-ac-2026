import CounterApp from "./components/CounterApp";
import ArrayDataInDropdownFormat from "./components/ArrayDataInDropdownFormat";
import ParentComponent from "./components/ParentComponent";
import ShopStockTable from "./components/ShopStock";

function App() {

  return (
    <>
      {/* Program 1 */}
      <CounterApp />
      <hr />

      {/* Program 2 */}
      <ArrayDataInDropdownFormat />
      <hr />

      {/* Program 3 */}
      <ParentComponent />
      <hr />

      {/* Program 4 */}
      {/* Refer program 1 */}
      
      {/* Program 5 */}
      <ShopStockTable />
    </>
  )
}

export default App
