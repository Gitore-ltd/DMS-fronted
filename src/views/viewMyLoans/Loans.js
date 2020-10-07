import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import Table from 'react-bootstrap/Table';
import './myLoans.css';
import NavBar from '../../components/Navbar';
import { viewMyRequests } from '../../store/actions/userAction';

const Loans = (props) => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    async function fetchAllRequests() {
      const userToken = localStorage.getItem('user-token');
      const res = await fetch(
        'https://debt-management-system.herokuapp.com/api/v1/myRequets',
        {
          method: 'GET',
          headers: {
            'content-type': 'application/json',
            token: userToken,
          },
        }
      );
      const Allrequests = await res.json();
      setRequests(Allrequests.allRequest);
    }
    fetchAllRequests();
  });

  return (
    <div className="myLoansContainer">
      <NavBar />
      <div className="myLoansContainerSide">
        <div className="contentContainer">
          {/* <Table striped bordered hover className="usersTable">
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Payment Date</th>
                <th>Loan Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {requests
                ? requests.map((request, id) => (
                    <tr key={id}>
                      <td>{request.productTitle}</td>
                      <td>
                        {request.quantity.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}{' '}
                      </td>
                      <td>{moment(request.tobePayed).format('LL')}</td>
                      <td>
                        {request.total.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}{' '}
                        Frw
                      </td>
                      <td>{request.requestStatus}</td>
                    </tr>
                  ))
                : null}
            </tbody>
          </Table> */}

          <div className="seller_headers">
            <div className="seller_headers_title">
              <h1>Loans</h1>
              <p>my loan request history details</p>
            </div>
            <div className="seller_headers_buttons">
              <div className="seller_icons">
                <i class="fa fa-search"></i>
                <i class="fa fa-refresh"></i>
                <i class="fa fa-filter"></i>
              </div>
            </div>
          </div>

          <div className="Loans_tableHeader">
            <ul>
              <li className="download"></li>
              <li className="product_title">Product</li>
              <li className="quantity">Quantity</li>
              <li className="requested_date">Requested</li>
              <li className="payment_date">Payment</li>
              <li className="loan_amount">Loan Amount</li>
              <li className="status">Status</li>
              <li className="actions"></li>
            </ul>
          </div>

          <div className="Loans_tableBody">
            {requests
              ? requests.map((request, id) => (
                  <ul
                    key={id}
                    className="userTableRows"
                    key={request.requestId}
                    request={request}
                    // onClick={() => handleClick(request)}
                  >
                    <li className="download_loan">
                      <div id="dowload_holder">
                        <i class="fa fa-download"></i>
                        <h8>download</h8>
                      </div>
                    </li>
                    <li className="product_title_info">
                      {request.productTitle}
                    </li>
                    <li className="quantity_info">
                      {request.quantity} {request.unit}
                    </li>
                    <li className="requested_info">
                      {' '}
                      {/* {moment(request.requested)
                        .subtract(10, 'days')
                        .calendar()} */}
                      {moment(request.requested).format('l')}
                    </li>
                    <li className="tobepayed_info">
                    {moment(request.tobepayed).format('l')}
                    </li>
                    <li className="amount_info">{request.total}</li>
                    <li className="loan_status">
                      <div id="loan_status_holder">
                        <h8>{request.requestStatus}</h8>
                      </div>
                    </li>
                    <li className="request_alter_icon">
                      <i className="fa fa-edit" id="editRequest_icon"></i>
                      <i className="fa fa-trash" id="deleteRequest_icon"></i>
                    </li>
                  </ul>
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user,
});

export default connect(mapStateToProps, { viewMyRequests })(Loans);
