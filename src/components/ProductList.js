import React, { useEffect, useState } from 'react'
import { DataManager } from '@syncfusion/ej2-data';
import { Ajax } from '@syncfusion/ej2-base';
import { connect } from 'react-redux'
import { ColumnDirective, ColumnsDirective, Filter, GridComponent, Grid, dataRowIndex } from '@syncfusion/ej2-react-grids';
import { Group, Inject, Page, Sort, Resize } from '@syncfusion/ej2-react-grids';
import "../style/productlist.css"
import Row from './Row';
function ProductList(props) {
    const pageSettings = { pageSize: 15 };
    const sortSettings = {
        columns: [
            { field: 'OrderID', direction: 'Ascending' }
        ]
    };
    const filterSettings = {
        columns: [

        ]
    };
    let grid = new Grid()
    const [data, setData] = useState(grid)
    useEffect(() => {
        // let newdata = new DataManager({
        //     url: 'http://127.0.0.1:8000/inventory/items/',
        // });
        // console.log(newdata)
        // setData(newdata)
        let grid = new Grid()
        const ajax = new Ajax("http://127.0.0.1:8000/inventory/items/", "GET");
        ajax.send();
        ajax.onSuccess = (data) => {
            grid.dataSource = JSON.parse(data);
            setData(grid)
        }
    }, [])
    let changeSelectedItem = () => {
        console.log(props)
        props.changeSelectedItem({ itemname: "", itemid: "1", itemininventory: "", itemonshelf: "", importedday: "", itembought: "" });
    }
    return (
        <div className="gridComponent">
            <GridComponent dataSource={data.dataSource} recordClick={(args) => { console.log(args.rowData); changeSelectedItem() }} autoFitColumns={true} allowPaging={true} pageSettings={pageSettings} filterSettings={filterSettings} allowSorting={true} sortSettings={sortSettings} allowFiltering={true}>
                <ColumnsDirective>
                    <ColumnDirective field='code' headerText='Code' width='120' textAlign="Right" />
                    <ColumnDirective field='name' headerText='Name' width='150' />
                    <ColumnDirective field='quantity' headerText='Quantity' width='150' />
                    <ColumnDirective field='discount' headerText='Discount' width='150' />
                    <ColumnDirective field='imported_day' headerText='Imported Day' width='150' />
                    <ColumnDirective field='bought_price' headerText='Bought Price' width='150' />
                    <ColumnDirective field='retail_price' headerText='Retail Price' width='150' />
                </ColumnsDirective>
                <Inject services={[Page, Sort, Filter]} />
            </GridComponent>
        </div>)
}
const mapState = (state) => ({
    count: state.count,
    selecteditem: state.selecteditem,
})

const mapDispatch = (dispatch) => ({
    increment: dispatch.count.increment,
    asyncIncrement: dispatch.count.asyncIncrement,
    changeSelectedItem: dispatch.selecteditem.changeSelectedItem,
})

export default connect(mapState, mapDispatch)(ProductList)