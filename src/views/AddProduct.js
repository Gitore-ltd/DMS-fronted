import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../assets/styles/containers/AddProduct.css";
import NoImg from "../assets/images/no-image.png";

const AddContact = (props) => {
  const [uploadedImage, setUploadedImage] = useState(NoImg);
  const profile = {
    image: "",
    username: "n-one",
  };
  return (
    <>
      <Navbar profile={profile} />
      <div className="add-product">
        <div className="add-product-image">
          <div className="image-box">
            <img src={uploadedImage} alt="" />
            <label className="btn-upload">
              <i className="fa fa-upload" aria-hidden="true"></i> Upload
            </label>
            <input id="files" type="file" />
          </div>
        </div>
        <div className="add-product-details text-muted">
          <div className="row">
            <div className="col-md-3"></div>
            <h4 className="col-md-7">ADD PRODUCT</h4>
          </div>
          <form>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Product name</label>
              <input type="text" className="txt-input col-sm-7" />
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Quality</label>
              <select className="custom-select col-sm-7">
                <option value="Good">Good</option>
                <option value="Bad">Bad</option>
              </select>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Quantity</label>
              <div className="txt-input col-sm-7">
                <div className="row qty">
                  <input type="number" className="col-md-5" />
                  <select className="custom-select col-md-6">
                    <option value="Kg">Kg</option>
                    <option value="Little">Little</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Price/Rwf</label>
              <input type="text" className="txt-input col-sm-7" />
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Total</label>
              <input type="text" className="txt-input col-sm-7" />
            </div>
            <div className="row">
              <div className="col-md-3"></div>
              <div className="btn-group col-md-7">
                <button className="btn btn-primary">Add product</button>
                <button className="btn btn-outline-secondary">Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default AddContact;
