import React, { useEffect, useState } from 'react'
import { Ajax } from '@syncfusion/ej2-base';

import "../style/addnewitems.css"
function fileValue(value) {

    var path = value.value;
    console.log(path)
    var extenstion = path.split('.').pop();
    console.log(value.files[0])
    if (extenstion === "jpg" || extenstion === "svg" || extenstion === "jpeg" || extenstion === "png" || extenstion === "gif") {
        document.getElementById('image-preview').src = window.URL.createObjectURL(value.files[0]);
        var filename = path.replace(/^.*[\\\/]/, '').split('.').slice(0, -1).join('.');
        document.getElementById("filename").innerHTML = filename;
    } else {
        alert("File not supported. Kindly Upload the Image of below given extension ")
    }
}
// let onSubmitForm = () => {
//     let sentdata = {
//         "code":
//             "2",
//         "name":
//             "orange"
//         ,
//         "quantity":
//             50
//         ,
//         "discount": 0,
//         "bought_price":
//             100
//         ,
//         "retail_price":
//             150
//         ,
//         "item_type": "1"
//     }
//     fetch('https://example.com/profile', {
//         method: 'POST', // or 'PUT'
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//     })
//         .then((response) => response.json())
//         .then((data) => {
//             console.log('Success:', data);
//         })
//         .catch((error) => {
//             console.error('Error:', error);
//         });
//     // {
//     //     "code":
//     //     "2",
//     //         "name":
//     //     "orange"
//     //         ,
//     //         "quantity":
//     //     50
//     //         ,
//     //         "discount" : 0,
//     //             "bought_price":
//     //     100
//     //         ,
//     //         "retail_price":
//     //     150
//     //         ,
//     //         "item_type": "1"
//     // }
// }
const AddNewItems = () => {
    const [productname, setproductname] = useState()
    // const [productimagelocation, setproductimagelocation] = useState()
    const [productid, setproductid] = useState()
    const [producttype, setproducttype] = useState()
    const [producttypelist, setproducttypelist] = useState()
    const [categoryimporteddate, setcategoryimporteddate] = useState()
    const [boughtprice, setboughtprice] = useState()
    const [retailprice, setretailprice] = useState()

    useEffect(() => {
        const ajax = new Ajax("http://127.0.0.1:8000/inventory/item-types", "GET");
        ajax.send();
        ajax.onSuccess = (data) => {
            // grid.dataSource = JSON.parse(data);
            // setData(grid)
            console.log(data)
        }
        // fetch('http://127.0.0.1:8000/inventory/item-types')
        //     .then((response) => response.json())
        //     .then((data) => {
        //         console.log('Success:', data);
        //     })
        //     .catch((error) => {
        //         console.error('Error:', error);
        //     });
    }, [])

    return (
        <form className="row form-horizontal">
            <div className='col-6' >
                <div className="image-upload">
                    <input type="file" name="" id="logo" onChange={(value) => { fileValue(value.target) }} />
                    <label htmlFor="logo" className="upload-field" id="file-label">
                        <div className="file-thumbnail">
                            <img id="image-preview" src="https://www.btklsby.go.id/images/placeholder/basic.png" alt="" />
                            <h3 id="filename">
                                Drag and Drop
                            </h3>
                            <p >Supports JPG, PNG, SVG</p>
                        </div>
                    </label>
                </div>
            </div>

            <div className='addproducts col-5'>

                <legend>PRODUCTS</legend>


                <div className="form-group">
                    <label className=" control-label" htmlFor="product_name">PRODUCT NAME</label>
                    <div className="">
                        <input id="product_name" name="product_name" placeholder="PRODUCT NAME" className="form-control input-md" required="" type="text" />

                    </div>
                </div>

                <div className="form-group">
                    <label className=" control-label" htmlFor="product_code">PRODUCT CODE</label>
                    <div className="">
                        <input id="product_code" name="product_code" placeholder="PRODUCT CODE" className="form-control input-md" required="" type="text" />

                    </div>
                </div>

                <div className="form-group">
                    <label className=" control-label" htmlFor="product_type">PRODUCT TYPE</label>
                    <div className="">
                        <select id="product_type" name="product_type" className="form-control">
                        </select>
                    </div>
                </div>

                <div className="form-group">
                    <label className=" control-label" htmlFor="imported_date">IMPORTED DATE</label>
                    <div className="">
                        <input id="imported_date" name="imported_date" placeholder="IMPORTED DATE" className="form-control input-md" required="" type="text" />

                    </div>
                </div>

                <div className="form-group">
                    <label className=" control-label" htmlFor="bought_price">BOUGHT PRICE</label>
                    <div className="">
                        <input id="bought_price" name="bought_price" placeholder="BOUGHT PRICE" className="form-control input-md" required="" type="text" />

                    </div>
                </div>

                <div className="form-group">
                    <label className=" control-label" htmlFor="retail_price">RETAIL PRICE</label>
                    <div className="">
                        <input id="retail_price" name="retail_price" placeholder="RETAIL PRICE" className="form-control input-md" required="" type="text" />
                    </div>
                </div>

                {/* <div className="form-group">
                    <label className=" control-label" htmlFor="percentage_discount">PERCENTAGE DISCOUNT</label>
                    <div className="">
                        <input id="percentage_discount" name="percentage_discount" placeholder="PERCENTAGE DISCOUNT" className="form-control input-md" required="" type="text" />

                    </div>
                </div>

                <div className="form-group">
                    <label className=" control-label" htmlFor="stock_alert">STOCK ALERT</label>
                    <div className="">
                        <input id="stock_alert" name="stock_alert" placeholder="STOCK ALERT" className="form-control input-md" required="" type="text" />

                    </div>
                </div>

                <div className="form-group">
                    <label className=" control-label" htmlFor="stock_critical">STOCK CRITICAL</label>
                    <div className="">
                        <input id="stock_critical" name="stock_critical" placeholder="STOCK CRITICAL" className="form-control input-md" required="" type="search" />

                    </div>
                </div>

                <div className="form-group">
                    <label className=" control-label" htmlFor="tutorial">TUTORIAL</label>
                    <div className="">
                        <input id="tutorial" name="tutorial" placeholder="TUTORIAL" className="form-control input-md" required="" type="search" />

                    </div>
                </div>

                <div className="form-group">
                    <label className=" control-label" htmlFor="tutorial_fr">TUTORIAL FR</label>
                    <div className="">
                        <input id="tutorial_fr" name="tutorial_fr" placeholder="TUTORIAL FR" className="form-control input-md" required="" type="search" />

                    </div>
                </div>

                <div className="form-group">
                    <label className=" control-label" htmlFor="online_date">ONLINE DATE</label>
                    <div className="">
                        <input id="online_date" name="online_date" placeholder="ONLINE DATE" className="form-control input-md" required="" type="text" />

                    </div>
                </div>

                <div className="form-group">
                    <label className=" control-label" htmlFor="author">AUTHOR</label>
                    <div className="">
                        <input id="author" name="author" placeholder="AUTHOR" className="form-control input-md" required="" type="text" />

                    </div>
                </div>

                <div className="form-group">
                    <label className=" control-label" htmlFor="enable_display">ENABLE DISPLAY</label>
                    <div className="">
                        <input id="enable_display" name="enable_display" placeholder="ENABLE DISPLAY" className="form-control input-md" required="" type="text" />

                    </div>
                </div>

                <div className="form-group">
                    <label className=" control-label" htmlFor="comment">COMMENT</label>
                    <div className="">
                        <input id="comment" name="comment" placeholder="COMMENT" className="form-control input-md" required="" type="text" />

                    </div>
                </div>

                <div className="form-group">
                    <label className=" control-label" htmlFor="approuved_by">APPROUVED BY</label>
                    <div className="">
                        <input id="approuved_by" name="approuved_by" placeholder="APPROUVED BY" className="form-control input-md" required="" type="text" />

                        <div className="form-group">
                            <label className=" control-label" htmlFor="filebutton">main_image</label>
                            <div className="">
                                <input id="filebutton" name="filebutton" className="input-file" type="file" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className=" control-label" htmlFor="filebutton">auxiliary_images</label>
                            <div className="">
                                <input id="filebutton" name="filebutton" className="input-file" type="file" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className=" control-label" htmlFor="singlebutton">Single Button</label>
                            <div className="">
                                <button id="singlebutton" name="singlebutton" className="btn btn-primary">Button</button>
                            </div>
                        </div> */}
                {/* </div> */}
                {/* </div> */}
            </div >
        </form >

    )
}

export default AddNewItems