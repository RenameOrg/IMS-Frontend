import React, { useEffect, useState } from 'react'
import { DataManager } from '@syncfusion/ej2-data';
import { connect } from 'react-redux'
import { ColumnDirective, ColumnsDirective, Filter, GridComponent } from '@syncfusion/ej2-react-grids';
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
    const [data, setData] = useState()
    useEffect(() => {
        let newdata = new DataManager({
            url: 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders/',
        });
        setData(newdata)
    }, [])
    let changeSelectedItem = () => {
        console.log(props)
        props.changeSelectedItem({ itemname: "", itemid: "1", itemininventory: "", itemonshelf: "", importedday: "", itembought: "" });
    }
    return (
        <div className="gridComponent">
            <GridComponent recordClick={(args) => { console.log(args.rowData); changeSelectedItem() }} autoFitColumns={true} dataSource={data} allowPaging={true} pageSettings={pageSettings} filterSettings={filterSettings} allowSorting={true} sortSettings={sortSettings} allowFiltering={true}>
                <ColumnsDirective>
                    <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
                    <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
                    <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
                    <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
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