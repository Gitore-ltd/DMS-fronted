import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import { toast } from 'react-toastify';
import Modal from 'react-bootstrap/Modal';
import { Table, Form } from 'react-bootstrap';
import './admin.css';
import NavAdmin from '../../components/adminNavarBar';

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModalRole, setShowModalRole] = useState(false);
  const [term, setTerm] = useState();
  const [userInfo, setUserInfo] = useState({});
  const [roles, setRoles] = useState(['seller', 'customer', 'superAdmin']);
  const [role, setRole] = useState('');
  const [isUpdate, setIsUpdate] = useState(false);
  const [token, setToken] = useState('');

  useEffect(async () => {
    const userToken = localStorage.getItem('user-token');
    setToken(userToken);
    const res = await fetch(
      `https://debt-management-system.herokuapp.com/api/v1/findAll`,
      {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          token: userToken,
        },
      }
    );
    const user = await res.json();
    setUsers(user.findAllUsers);
  }, []);

  // useEffect(async () => {
  //  if(update){
  //   const userToken = localStorage.getItem('user-token');
  //   const res = await fetch(
  //     `https://debt-management-system.herokuapp.com/api/v1/findAll`,
  //     {
  //       method: 'GET',
  //       headers: {
  //         'content-type': 'application/json',
  //         token: userToken,
  //       },
  //     }
  //   );
  //   const user = await res.json();
  //   setUsers(user.findAllUsers);
  //  }
  // }, [update]);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleShow = () => {
    setShowModal(true);
  };

  const handleCloseRole = () => {
    setShowModalRole(false);
  };

  const handleShowRole = () => {
    setShowModalRole(true);
  };

  const handleSelectedRole = (e) => {
    e.preventDefault();
    setRole(e.target.value);
  };

  const handleClick = (email) => {
    const userEmail = email;
    async function fetchUserProfile() {
      const userToken = localStorage.getItem('user-token');
      const res = await fetch(
        `https://debt-management-system.herokuapp.com/api/v1/findUser`,
        {
          method: 'GET',
          headers: {
            'content-type': 'application/json',
            token: userToken,
            email: userEmail,
          },
        }
      );
      const user = await res.json();
      setUserInfo(user.userInfo);
    }
    fetchUserProfile();
  };

  const updateRole = (e) => {
    e.preventDefault();
    async function updateUserRole() {
      const userToken = localStorage.getItem('user-token');
      const res = await fetch(
        `https://debt-management-system.herokuapp.com/api/v1/updateRole`,
        {
          method: 'PATCH',
          headers: {
            'content-type': 'application/json',
            token: userToken,
            email: userInfo.email,
          },
          body: JSON.stringify({ role }),
        }
      );
      const user = await res.json();
      setIsUpdate(true);
      if (user.status === 200) {
        toast.success(user.message);
      }
      toast.error(user.error);
    }
    updateUserRole();
  };

  const updateUsersTable = async (updateInfo, userToken) => {
    if (updateInfo) {
      const res = await fetch(
        `https://debt-management-system.herokuapp.com/api/v1/findAll`,
        {
          method: 'GET',
          headers: {
            'content-type': 'application/json',
            token: userToken,
          },
        }
      );
      const user = await res.json();
      setUsers(user.findAllUsers);
    }
  };

  updateUsersTable(isUpdate, token);

  return (
    <div className="adminContainer">
      <NavAdmin />
      <div className="adminContent">
        <div className="admin">
          <div className="tableHeader">
            <ul>
              <li className="firstNameRow">FIRSTNAME</li>
              <li className="lastNameRow">LASTNAME</li>
              <li className="emailRow">EMAIL</li>
              <li className="telephoneRow">TELEPHONE</li>
              <li className="roleRow">ROLE</li>
            </ul>
          </div>

          <div className="tableBody">
            {users
              ? users.map((user, id) => (
                  <ul
                    key={id}
                    className="userTableRows"
                    onClick={() => {
                      handleShow();
                      handleClick(user.email);
                    }}
                  >
                    <li className="firstNameRowData">{user.firstName}</li>
                    <li className="lastNameRowData">{user.lastName}</li>
                    <li className="emailRowData">{user.email}</li>
                    <li className="telephoneRowData">{`(+250) ${user.telephone}`}</li>
                    <li className="roleRowData">{user.role}</li>
                  </ul>
                ))
              : null}
          </div>

          {/* =========================================== Model view user Info ========================================== */}
          <Modal id="Modal" show={showModal} onHide={handleClose} centered>
            <Modal.Header className="ModalHeader" closeButton>
              <h1>Users Information</h1>
            </Modal.Header>
            <Modal.Body className="modalContent">
              <div className="modalSubContent">
                <form>
                  <div className="roleUpdateLeft">
                    <img src={userInfo.profileImage}></img>
                  </div>
                  <div className="roleUpdateRight">
                    <div className="roleUpdateRightContent">
                      <div className="row">
                        <input
                          value={`Names:        ${userInfo.firstName} ${userInfo.lastName}`}
                        />
                      </div>
                      <div className="row">
                        <input value={`nationalId:   ${userInfo.nationalId}`} />
                      </div>
                      <div className="row">
                        <input value={`email:        ${userInfo.email}`} />
                      </div>
                      <div className="row">
                        <input
                          value={`telephone:        (+250)${userInfo.telephone}`}
                        />
                      </div>
                      <div className="row">
                        <input
                          value={`dateOfBirth:       ${moment(
                            userInfo.dateOfBirth
                          ).format('YYYY-MM-DD')}`}
                        />
                      </div>
                      <div className="row">
                        <input value={`address:       ${userInfo.address}`} />
                      </div>
                      <div className="row">
                        <input value={`role:       ${userInfo.role}`} />
                      </div>
                    </div>
                  </div>
                  <div className="roleUpdateButtons">
                    <button
                      type="button"
                      className="updateRoleBtn"
                      onClick={() => {
                        handleClose();
                        handleShowRole();
                      }}
                    >
                      UPDATE ROLE
                    </button>
                    <button className="deleteUserBtn">DELETE USER</button>
                  </div>
                </form>
              </div>
            </Modal.Body>
          </Modal>
          {/* ===================================================================================== */}
          {/* ================================== Update Role ====================================== */}
          <Modal show={showModalRole} onHide={handleCloseRole} centered>
            <Modal.Header closeButton>
              <h3>Update Role</h3>
            </Modal.Header>
            <Modal.Body>
              <div className="updateRoleModelContent">
                <form as="select" onChange={handleSelectedRole}>
                  <div className="updateRoleRow">
                    <label>Role</label>
                    <select>
                      {roles.map((role) => (
                        <option>{role}</option>
                      ))}
                    </select>
                  </div>
                  <div className="updateRoleRow" id="updateRoleRowButton">
                    <button onClick={updateRole}>UPDATE</button>
                  </div>
                </form>
              </div>
            </Modal.Body>
          </Modal>
          {/* ================================== *********** ====================================== */}
        </div>
      </div>
    </div>
  );
};

export default Admin;
