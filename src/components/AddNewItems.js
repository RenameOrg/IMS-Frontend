import React from 'react'
import "../style/addnewitems.css"
function fileValue(value) {

    var path = value.value;
    console.log(path)
    var extenstion = path.split('.').pop();
    if (extenstion === "jpg" || extenstion === "svg" || extenstion === "jpeg" || extenstion === "png" || extenstion === "gif") {
        document.getElementById('image-preview').src = window.URL.createObjectURL(value.files[0]);
        var filename = path.replace(/^.*[\\\/]/, '').split('.').slice(0, -1).join('.');
        document.getElementById("filename").innerHTML = filename;
    } else {
        alert("File not supported. Kindly Upload the Image of below given extension ")
    }
}
const AddNewItems = () => {
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
                    <label className=" control-label" htmlFor="product_name_fr">PRODUCT ID</label>
                    <div className="">
                        <input id="product_name_fr" name="product_name_fr" placeholder="PRODUCT DESCRIPTION FR" className="form-control input-md" required="" type="text" />

                    </div>
                </div>

                <div className="form-group">
                    <label className=" control-label" htmlFor="product_categorie">PRODUCT TYPE</label>
                    <div className="">
                        <select id="product_categorie" name="product_categorie" className="form-control">
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label className=" control-label" htmlFor="product_categorie">CATEGORY</label>
                    <div className="">
                        <select id="product_categorie" name="product_categorie" className="form-control">
                        </select>
                    </div>
                </div>

                <div className="form-group">
                    <label className=" control-label" htmlFor="available_quantity">IMPORTED DATE</label>
                    <div className="">
                        <input id="available_quantity" name="available_quantity" placeholder="AVAILABLE QUANTITY" className="form-control input-md" required="" type="text" />

                    </div>
                </div>

                <div className="form-group">
                    <label className=" control-label" htmlFor="product_weight">BOUGHT PRICE</label>
                    <div className="">
                        <input id="product_weight" name="product_weight" placeholder="PRODUCT WEIGHT" className="form-control input-md" required="" type="text" />

                    </div>
                </div>

                <div className="form-group">
                    <label className=" control-label" htmlFor="product_description">RETAIL PRICE</label>
                    <div className="">
                        <textarea className="form-control" id="product_description" name="product_description"></textarea>
                    </div>
                </div>

                <div className="form-group">
                    <label className=" control-label" htmlFor="product_name_fr">PRODUCT DESCRIPTION FR</label>
                    <div className="">
                        <textarea className="form-control" id="product_name_fr" name="product_name_fr"></textarea>
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