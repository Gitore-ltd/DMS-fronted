/* eslint-disable no-inner-declarations */
import React, { useState, useEffect } from 'react';
import qs from 'qs';
import { toast } from 'react-toastify';
import moment from 'moment';
import './requestManipulation.css';
import { connect, useStore } from 'react-redux';
import SellerNavBar from '../../components/SellerNavBar';

const RequestManipulation = (props) => {
  const [requestInformation, setRequestInformation] = useState({});
  const [requester, setRequest] = useState({});
  const [requesterName, setRequesterName] = useState('');

  const queryParms = props.history.location.search;

  const [selectedRequest, setSelectedRequest] = useState({
    ...qs.parse(queryParms.replace('?', '')),
  });

  useEffect(() => {
    async function fetchUserProfile() {
      const userToken = localStorage.getItem('user-token');
      const res = await fetch(
        `https://debt-management-system.herokuapp.com/api/v1/findUser`,
        {
          method: 'GET',
          headers: {
            'content-type': 'application/json',
            token: userToken,
            email: selectedRequest.email,
          },
        }
      );
      const requesterInform = await res.json();
      setRequest(requesterInform.userInfo);

      const names = `${requesterInform.userInfo.firstName} ${requesterInform.userInfo.lastName}`;
      setRequesterName(names);
    }
    fetchUserProfile();
  }, []);
  const profile = {
    image: '',
    username: 'n-one',
  };

  const handleApprove = (e) => {
    e.preventDefault();
    try {
      async function approveRequest() {
        const userToken = localStorage.getItem('user-token');
        const res = await fetch(
          `https://debt-management-system.herokuapp.com/api/v1/ApproveRequest`,
          {
            method: 'PATCH',
            headers: {
              'content-type': 'application/json',
              token: userToken,
              requestid: selectedRequest.requestId,
            },
          }
        );
        const approveResponce = await res.json();
        if (approveResponce.message === 'request already approved!') {
          toast.error(approveResponce.message);
        } else {
          toast.success(approveResponce.message);
        }
      }
      approveRequest();
    } catch (error) {
      console.log('error:', error.message);
    }
  };

  const handleReject = (e) => {
    e.preventDefault();
    try {
      async function rejectRequest() {
        const userToken = localStorage.getItem('user-token');
        const res = await fetch(
          `https://debt-management-system.herokuapp.com/api/v1/RejectRequest`,
          {
            method: 'PATCH',
            headers: {
              'content-type': 'application/json',
              userToken,
              requestid: selectedRequest.requestId,
            },
          }
        );
        const approveResponce = await res.json();
        if (approveResponce.message === 'request already rejected!') {
          toast.error(approveResponce.message);
        } else {
          toast.success(approveResponce.message);
        }
      }
      rejectRequest();
    } catch (error) {
      console.log('error:', error.message);
    }
  };

  return (
    <div className="requestManipulation">
      <SellerNavBar />
      <div className="requestManipulationContent">
        <div className="requestManipulationLeft"></div>
        <div className="requestManipulationRight">
          <div className="requestManipulationLeftContent">
            <h1>Loan</h1>
            <form>
              <div className="requestManipulationRow">
                <label>Request Name:</label>
                <input value={requesterName} />
              </div>
              <div className="requestManipulationRow">
                <label>NationalId:</label>
                <input value={requester.nationalId} />
              </div>
              <div className="requestManipulationRow">
                <label>Telphone:</label>
                <input value={`(+250) ${requester.telephone}`} />
              </div>
              <div className="requestManipulationRow">
                <label>Item:</label>
                <input value={selectedRequest.productTitle} />
              </div>
              <div className="requestManipulationRow">
                <label>Quantity:</label>
                <input value={selectedRequest.quantity} />
              </div>
              <div className="requestManipulationRow">
                <label>Total:</label>
                <input value={`${selectedRequest.total} FRW`} />
              </div>
              <div className="requestManipulationRow">
                <label>RequestedDate:</label>
                <input
                  value={moment(selectedRequest.requestedDate).format(
                    'MMMM Do, YYYY'
                  )}
                />
              </div>
              <div className="requestManipulationRow">
                <label>TobePayed:</label>
                <input
                  value={moment(selectedRequest.tobePayed).format(
                    'MMMM Do, YYYY'
                  )}
                />
              </div>
              <div className="requestManipulationRow">
                <button className="approve_btn" onClick={handleApprove}>
                  APPROVE
                </button>
                <button className="reject_btn" onClick={handleReject}>
                  REJECT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  token: state.token,
  selectedRequest: state.selectedRequest,
});

export default connect(mapStateToProps, {})(RequestManipulation);
