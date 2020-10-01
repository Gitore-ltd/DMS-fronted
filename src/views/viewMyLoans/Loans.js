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
          <Table striped bordered hover className="usersTable">
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
          </Table>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user,
});

export default connect(mapStateToProps, { viewMyRequests })(Loans);
