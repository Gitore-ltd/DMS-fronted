import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { toast } from 'react-toastify';
import Modal from 'react-bootstrap/Modal';
import './admin.css';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import CircularProgress from '@material-ui/core/CircularProgress';

import NavAdmin from '../../components/adminNavarBar';
import NoImg from '../../assets/images/no-image.png';

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModalRole, setShowModalRole] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [term, setTerm] = useState('');
  const [userInfo, setUserInfo] = useState({});
  const [roles] = useState(['seller', 'customer', 'superAdmin']);
  const [initialRole, setInitialRole] = useState('');
  const [newRoles, setNewRoles] = useState([]);
  const [role, setRole] = useState('');
  const [isUpdate, setIsUpdate] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [token, setToken] = useState('');
  const [userImage, setUserImage] = useState('');
  const [emptyImage] = useState('no image found');

  let rows = {};
  const [page, setPage] = React.useState(0);
  const [searchKey, setSearchKey] = React.useState('');
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [search, setSearch] = React.useState(false);
  const [results, setResults] = React.useState({});

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      marginTop: theme.spacing(3),
      overflowX: 'auto',
      backgroundColor: 'transparent',
    },
    table: {
      minWidth: 650,
    },

    input: {
      marginLeft: theme.spacing(1),
      width: 650 / 2,
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    pending: {
      textTransform: 'uppercase',
      color: '#ffffff',
      background: '#FEC400',
      border: 'none',
      opacity: '0.79',
      fontSize: 10,
      width: 100,
    },
    rejected: {
      textTransform: 'uppercase',
      color: 'white',
      background: '#F12B2C',
      border: 'none',
      opacity: '0.79',
    },
    approved: {
      textTransform: 'uppercase',
      color: 'white',
      background: '#29CC97',
      border: 'none',
      opacity: '0.79',
    },
    progress: {
      position: 'absolute',
      marginRight: 'auto',
      marginLeft: 'auto',
      left: 0,
      right: 0,
    },
    search: {
      position: 'absolute',
      right: 0,
      marginRight: theme.spacing(5),
    },
  }));

  const classes = useStyles();

  const profile = {
    image: '',
    username: 'n-one',
  };

  useEffect(async () => {
    async function AllUsers() {
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
    }
    AllUsers();
  }, []);

  useEffect(() => {
    let i = 0;
    const length = roles.length - 1;
    const array = [];
    for (i = length; i >= 0; i--) {
      if (roles[i] !== initialRole) {
        array.push(roles[i]);
      }
    }
    setNewRoles(array);
  }, [initialRole]);

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
  const handleCloseDelete = () => {
    setShowModalDelete(false);
  };

  const handleShowDelete = () => {
    setShowModalDelete(true);
  };

  const handleSelectedRole = (e) => {
    e.preventDefault();
    setRole(e.target.value);
  };

  const handleClick = (email) => {
    setUserImage(userInfo.profileImage);
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
      setInitialRole(user.userInfo.role);
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

  const deleteUser = async (e) => {
    e.preventDefault();
    const userToken = localStorage.getItem('user-token');
    const res = await fetch(
      `https://debt-management-system.herokuapp.com/api/v1/deleteUser`,
      {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
          token: userToken,
          email: userInfo.email,
        },
      }
    );
    const user = await res.json();
    setIsDeleted(true);
    if (user.status === 200) {
      toast.success(user.message);
    }
    toast.error(user.error);
  };

  const updateUsersTableOnDelete = async (onDelete, userToken) => {
    if (onDelete) {
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

  updateUsersTableOnDelete(isDeleted, token);

  const trimString = (s) => {
    var l = 0,
      r = s.length - 1;
    while (l < s.length && s[l] === ' ') l++;
    while (r > l && s[r] === ' ') r -= 1;
    return s.substring(l, r + 1);
  };

  const compareObjects = (o1, o2) => {
    var k = '';
    for (k in o1) if (o1[k] !== o2[k]) return false;
    for (k in o2) if (o1[k] !== o2[k]) return false;
    return true;
  };

  const itemExists = (haystack, needle) => {
    for (var i = 0; i < haystack.length; i++)
      if (compareObjects(haystack[i], needle)) return true;
    return false;
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setTerm(e.target.value);
  };

  // const searchFor = (keyWord) => (user) =>
  //   user.firstName.toLowerCase().includes(keyWord.toLowerCase()) ||
  //   user.lastName.toLowerCase().includes(keyWord.toLowerCase()) ||
  //   user.email.toLowerCase().includes(keyWord.toLowerCase()) ||
  //   user.role.toLowerCase().includes(keyWord.toLowerCase()) ||
  //   !keyWord;

  return (
    <div className="adminContainer">
      <NavAdmin />
      <div className="adminContent">
        <div className="admin">
          <div className="searchContainer">
            <input placeholder="enter name or email" onChange={handleSearch} />
            <i className="fa fa-search"></i>
          </div>

          <Paper className={classes.root}>
            <Table className={classes.table} aria-label="caption table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">FIRSTNAME</TableCell>
                  <TableCell align="center">LASTNAME</TableCell>
                  <TableCell align="center">EMAIL</TableCell>
                  <TableCell align="center">TELEPHONE</TableCell>
                  <TableCell align="center">ROLE</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {users ? (
                  users.map((user, id) => (
                    <TableRow
                      key={id}
                      onClick={() => {
                        handleShow();
                        handleClick(user.email);
                        setInitialRole(user.role);
                      }}
                      hover
                      style={{ cursor: 'pointer' }}
                    >
                      <TableCell component="th" scope="row" align="center">
                        {user.firstName}
                      </TableCell>
                      <TableCell align="center">{user.lastName}</TableCell>
                      <TableCell align="center">{user.email}</TableCell>
                      <TableCell align="center">{`(+250) ${user.telephone}`}</TableCell>
                      <TableCell align="center">{user.role}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colspan="6" align="center">
                      You have no users
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </Paper>

          <Modal id="Modal" show={showModal} onHide={handleClose} centered>
            <Modal.Header className="ModalHeader" closeButton>
              <h1>Users Information</h1>
            </Modal.Header>
            <Modal.Body className="modalContent">
              <div className="modalSubContent">
                <form>
                  <div className="roleUpdateLeft">
                    {userImage === undefined ||
                    !userImage ||
                    userImage === emptyImage ? (
                      <img src={NoImg} alt="" />
                    ) : (
                      <img src={userInfo.profileImage} />
                    )}
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
                    <button
                      type="button"
                      className="deleteUserBtn"
                      onClick={() => {
                        handleClose();
                        handleShowDelete();
                      }}
                    >
                      DELETE USER
                    </button>
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
                      <option value="" disabled selected>
                        Select your option
                      </option>
                      {newRoles.map((role) => (
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

          {/* ================================ DELETE CONFIRMATION ====================================== */}
          <Modal show={showModalDelete} onHide={handleCloseDelete} centered>
            <Modal.Header className="deleteModelHeader" closeButton>
              <h3>Attention</h3>
            </Modal.Header>
            <Modal.Body>
              <div className="updateRoleModelContent">
                <form>
                  <div>
                    <p>Are your sure you want to delete this user?</p>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="deleteUser_btn"
                      onClick={deleteUser}
                    >
                      DELETE
                    </button>
                    <button
                      type="button"
                      className="cancelDeleteUser_btn"
                      onClick={handleCloseDelete}
                    >
                      CANCEL
                    </button>
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
