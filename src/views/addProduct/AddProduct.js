import React, { useState } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../components/Navbar";
import "./AddProduct.css";
import NoImg from "../../assets/images/no-image.png";
import { addProduct } from "../../store/actions/productActions";
import ReactFileReader from "react-file-reader";

const AddContact = (props) => {
  const [productImage, setProductImage] = useState('');
  const [title, setTitle] = useState("");
  const [quality, setQuality] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [unit, setUnit] = useState("Kg");
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  const [imageProduct, setImageProduct] = useState("");

  const handleAddProduct = async (e) => {
    e.preventDefault();
    const product = {
      title,
      quality,
      availableQuantity: quantity,
      unit,
      price,
      description: "N/A",
    };
    await props.addProduct(product, props.token);
  };
  const handleImageUpload = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "miv0xetk");
    setLoading(true);

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/kagororacloud/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const file = await res.json();
    setProductImage(file.secure_url);
    setLoading(false);
  };
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
          <form>
                        {loading ? (
                   <img src={NoImg} className='productImageHolder' alt="" />
                ) : (
                    <img
                      className = 'productImageHolder'
                      src={productImage}
                    />
                  )}
                  <input type="file" className="updateProductImagePic" onChange={handleImageUpload} />
          </form>
            </div>
        </div>
        <div className="add-product-details text-muted">
          <div className="row">
            <div className="col-md-3"></div>
            <h4 className="col-md-7">ADD PRODUCT</h4>
          </div>
          <form onSubmit={handleAddProduct}>
            <div className="form-group row">

              <label className="col-sm-3 col-form-label">Product name</label>
              <input
                type="text"
                class="form-control"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Quality</label>
              <select
                className="custom-select col-sm-7"
                onChange={(e) => setQuality(e.target.value)}
              >
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Quantity</label>
              <div className="txt-input col-sm-7">
                <div className="row qty">
                  <input
                    type="number"
                    className="custom-select col-md-6"
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                  <select
                    className="custom-select col-md-5"
                    onChange={(e) => setUnit(e.target.value)}
                  >
                    <option value="Kg">Kg</option>
                    <option value="Little">Little</option>
                    <option value={title}>{title}</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Price/Rwf</label>
              <input
                type="text"
                class="form-control"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Total</label>
              <input type="text" class="form-control" value={price * quantity} />
            </div>
            <div className="row">
              <div className="col-md-3"></div>
              <div className="btn-group col-md-7">
                <button className="btn btn-primary" type="submit">
                  Add product
                </button>
                <button className="btn btn-outline-secondary" id="cancleAddProduct">Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  token: state.token,
});

export default connect(mapStateToProps, { addProduct })(AddContact);
