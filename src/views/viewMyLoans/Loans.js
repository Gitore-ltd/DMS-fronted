import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

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

import './myLoans.css';
import NavBar from '../../components/Navbar';
import { viewMyRequests } from '../../store/actions/userAction';

const Loans = (props) => {
  const [requests, setRequests] = useState([]);
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

  return (
    <div className="myLoansContainer">
      <NavBar />
      <div className="myLoansContainerSide">
        <div className="contentContainer">
          <div className="seller_headers">
            <div className="seller_headers_title">
              <h1>My Loans Request</h1>
              <p>my loan request history details</p>
            </div>
          </div>

          <Paper className={classes.root}>
            <Table className={classes.table} aria-label="caption table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">download</TableCell>
                  <TableCell align="center">Product</TableCell>
                  <TableCell align="center">Quantity</TableCell>
                  <TableCell align="center">Requested Date</TableCell>
                  <TableCell align="center">Payment Date</TableCell>
                  <TableCell align="center">Loan Amount</TableCell>
                  <TableCell align="center">Status</TableCell>
                  <TableCell align="center"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {search === false ? (
                  requests.length >= 1 ? (
                    (rowsPerPage > 0
                      ? requests.slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                      : requests
                    ).map((request, id) => (
                      <TableRow key={id} hover style={{ cursor: 'pointer' }}>
                        <TableCell component="th" scope="row" align="center">
                          <div id="dowload_holder">
                            <i class="fa fa-download"></i>
                            <h8>download</h8>
                          </div>
                        </TableCell>
                        <TableCell component="th" scope="row" align="center">
                          {request.productTitle}
                        </TableCell>
                        <TableCell align="center">{request.quantity}</TableCell>
                        <TableCell align="center">
                          {moment(request.requestedDate).format('l')}
                        </TableCell>
                        <TableCell align="center">
                          {moment(request.tobePayed).format('l')}
                        </TableCell>
                        <TableCell align="center">
                          {' '}
                          {request.total.toLocaleString(undefined, {
                            maximumFractionDigits: 2,
                          })}{' '}
                          Frw
                        </TableCell>
                        <TableCell align="center">
                          {request.requestStatus === 'pending' ? (
                            <Chip
                              className={classes.pending}
                              label={request.requestStatus}
                              variant="outlined"
                            />
                          ) : request.requestStatus === 'approved' ? (
                            <Chip
                              className={classes.approved}
                              label={request.requestStatus}
                              variant="outlined"
                            />
                          ) : (
                            <Chip
                              className={classes.rejected}
                              label={request.requestStatus}
                              variant="outlined"
                            />
                          )}
                        </TableCell>
                        <TableCell align="center">
                          <i className="fa fa-edit" id="editRequest_icon"></i>
                          <i
                            className="fa fa-trash"
                            id="deleteRequest_icon"
                          ></i>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : requests.loading === 'block' ? (
                    <TableRow>
                      <TableCell colspan="6" align="center">
                        <CircularProgress
                          variant="indeterminate"
                          disableShrink
                          size={24}
                          thickness={4}
                        />
                      </TableCell>
                    </TableRow>
                  ) : (
                    <TableRow>
                      <TableCell colspan="6" align="center">
                        You have no Requests
                      </TableCell>
                    </TableRow>
                  )
                ) : results.length >= 1 ? (
                  (rowsPerPage > 0
                    ? results.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                    : results
                  ).map((row) => (
                    <TableRow key={row.id} hover style={{ cursor: 'pointer' }}>
                      <TableCell component="th" scope="row">
                        {row.type}
                      </TableCell>
                      <TableCell align="center">{row.from}</TableCell>
                      <TableCell align="center">{row.to}</TableCell>
                      <TableCell align="center">{row.departureDate}</TableCell>
                      <TableCell align="center">{row.returnDate}</TableCell>
                      <TableCell align="center">
                        {row.status === 'pending' ? (
                          <Chip
                            className={classes.pending}
                            label={row.status}
                            variant="outlined"
                          />
                        ) : row.status === 'approved' ? (
                          <Chip
                            className={classes.approved}
                            label={row.status}
                            variant="outlined"
                          />
                        ) : (
                          <Chip
                            className={classes.rejected}
                            label={row.status}
                            variant="outlined"
                          />
                        )}
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colspan="6" align="center">
                      You have no Requests with that keyword
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={search === true ? results.length : rows.length || 0}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </Paper>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user,
});

export default connect(mapStateToProps, { viewMyRequests })(Loans);
