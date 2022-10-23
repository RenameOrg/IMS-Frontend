
import './App.css';
import ProductSection from './components/ProductSection';
import ProductList from './components/ProductList';
import { registerLicense } from '@syncfusion/ej2-base';
import { connect } from 'react-redux';
import AddNewItems from './components/AddNewItems';
import NoItemSelected from './components/NoItemSelected';
registerLicense('ORg4AjUWIQA/Gnt2VVhjQlFaclhJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRd0VhWX9ZdHxXR2ZaUUA=');
function App(props) {
  // console.log(props.selecteditem)
  return (
    <div className="App row">
      {/* {props.selecteditem.itemid != "" ? <ProductSection /> : <NoItemSelected />}
      <ProductList /> */}
      <AddNewItems />
    </div>
  );
}
const mapState = (state) => ({
  count: state.count,
  selecteditem: state.selecteditem,
})

const mapDispatch = (dispatch) => ({
  increment: dispatch.count.increment,
  asyncIncrement: dispatch.count.asyncIncrement,
})

export default connect(mapState, mapDispatch)(App)
