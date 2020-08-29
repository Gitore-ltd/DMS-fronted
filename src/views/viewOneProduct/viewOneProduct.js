import React, { useState, useEffect } from 'react';
import qs from 'qs';
import { connect } from 'react-redux';
import './viewOneProduct.css';
import NavBar from '../../components/Navbar.js';

const OpenRequest = (props) => {
  const [selectedProd, setSelectProd] = useState({});
  const queryParms = props.history.location.search;

  const [product, setProduct] = useState({
    ...qs.parse(queryParms.replace('?', '')),
  });


  const handleClick = (e) => {
    e.preventDefault();
    props.history.push({
      pathname: '/loanagreement',
      search: qs.stringify(product),
    });
  };

  return (
    <div className="MakeRequestcontainer">
      <NavBar />
      <div className="MakeRequestcontainerContent">
        <div className="makeRequest">
          <div className="makeRequestLeft">
            <div className="makeRequestimageHolder">
              <img src={props.selectedProduct.productImage} />
            </div>
          </div>
          <div className="makeRequestRight">
            <div className="makeRequestRightContent">
            <form className="RequestLoanForm">
           <h2 className='SelectedProductHeader'>Product Information</h2>
            <hr className='SelectedProductHeaderToBodydivider'/>
            <div className="OpenRequestFormGroup">
                <label>Title: </label>
                <input
                  type="text"
                  value={props.selectedProduct.title}
                  style={{ marginLeft: '40px', width: '68%' }}
                />
              </div>
              <div className="OpenRequestFormGroup">
                <label>Available Quantity: </label>
                <input
                  type="text"
                  value={props.selectedProduct.availableQuantity}
                  style={{ width: '70%' }}
                />
              </div>
              <div className="OpenRequestFormGroup">
                <label>Unit: </label>
                <input
                  type="text"
                  value={props.selectedProduct.unit}
                  style={{ marginLeft: '40px', width: '68%' }}
                />
              </div>
              <div className="OpenRequestFormGroup">
                <label>Quality: </label>
                <input
                  type="text"
                  value={props.selectedProduct.quality}
                  style={{ marginLeft: '32px', width: '68%' }}
                />
              </div>
              <div className="OpenRequestFormGroup">
                <label>Price/Unit : </label>
                <input
                  type="text"
                  value={props.selectedProduct.price}
                  style={{ marginLeft: '40px', width: '68%' }}
                />
              </div>
              <div className="OpenRequestFormGroupTextArea">
                <div className="selectedProductDesription">
                <div className="OpenRequestFormGroupHeader">Description: </div>
                <div className="OpenRequestFormGroupContent">
                  {props.selectedProduct.description}
                </div>
                </div>
              </div>
              <div className="OpenRequestFormGroup">
              <button
                className="btn_Request"
                type="submit"
                onClick={handleClick}
              >
                Request Loan
              </button>
              </div>
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// export default OpenRequest;

const mapStateToProps = (state) => ({
  selectedProduct: state.selectedProduct.selectedProduct
});
export default connect(mapStateToProps)(OpenRequest);
