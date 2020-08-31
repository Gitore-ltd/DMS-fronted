/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import qs from 'qs';
import './seller.css';
import SellerNavBar from '../../components/SellerNavBar';
import { selectedRequest } from '../../store/actions/productActions';

const Seller = (props) => {

  const [requests, setRequests] = useState([]);
  
  const profile = {
    image: '',
    username: 'n-one',
  };

  useEffect(() => {
    async function fetchAllRequests() {
      const userToken = localStorage.getItem('user-token');
      const res = await fetch(
        'https://debt-management-system.herokuapp.com/api/v1/AllRequests',
        {
          method: 'GET',
          headers: {
            'content-type': 'application/json',
            token: userToken,
          },
        },
        );
        const Allrequests = await res.json();
      setRequests(Allrequests.allRequest);
    }
    fetchAllRequests();
  }, []);

  const handleClick = (request) => {
    props.selectedRequest(request);
    console.log('-------------', request);
    props.history.push({
      pathname: '/requestManipulation',
      search: qs.stringify(request),
    });
  }

  return (
    <div className="sellerContainer">
      <SellerNavBar profile={profile} />
      <div className="sellerContentContainer">
        <div className="sellerContent">
          <table id="sellerTable">
            <tr id="sellerTableHeader">
              <th>Product</th>
              <th>Quantity</th>
              <th>Payment Date</th>
              <th>Loan Amount</th>
              <th>Status</th>
              <th></th>
            </tr>
          <tbody>
          {requests
                ? requests.map((request, id) => (
                  <tr key={id} id="sellerTableRow">
                    <td>{request.productTitle}</td>
                    <td>{request.quantity}</td>
                    <td>{request.tobePayed}</td>
                    <td>{request.total}</td>
                    <td>{request.requestStatus}</td>
                    <td><button
                     className="sellerOpenReqBtn"
                     type="submit"
                    //  onClick={handleClick}
                    key={request.requestId}
                    request={request}
                     onClick={() => handleClick(request)}
                    >OPEN</button></td>
                  </tr>
                ))
                : null}
          </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  request: state.selectedProduct.selectedProduct,
  token: state.token,
});
export default connect(mapStateToProps, { selectedRequest })(Seller);
