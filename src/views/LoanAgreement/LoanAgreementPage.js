import React, { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import html2pdf from 'html2pdf.js';
import './loanAgrement.css';
import qs from 'qs';
import Navbar from '../../components/Navbar';
import { requestLoan } from '../../store/actions/productActions';

const LoanAgreementPage = (props) => {
  const [userProfile, setUserProfile] = useState({});
  const [LoanQuantity, setLoanQuantity] = useState(0);
  const [selectedPaymentDate, setSelectedPaymentDate] = useState('');
  const [todaysDate, setTodaysDate] = useState(
    moment().format('YYYY-MM-DD').toString()
  );

  const queryParms = props.history.location.search;

  const [product, setProduct] = useState({
    ...qs.parse(queryParms.replace('?', '')),
  });

  useEffect(() => {
    async function fetchUserProfile() {
      const userToken = localStorage.getItem('user-token');
      const res = await fetch(
        `https://debt-management-system.herokuapp.com/api/v1/getProfile`,
        {
          method: 'GET',
          headers: {
            'content-type': 'application/json',
            token: userToken,
          },
        }
      );
      const user = await res.json();
      setUserProfile(user.user);
    }
    fetchUserProfile();
  }, []);

  const newRequest = {
    requester: `${userProfile.firstName}`,
    nationalId: userProfile.nationalId,
    phoneNumber: userProfile.telephone,
    requestedProductId: product.productId,
    title: product.title,
    price: product.price,
    quality: product.quality,
    quantity: LoanQuantity * 1,
    total: LoanQuantity * product.price,
    requestedDate: todaysDate,
    tobePayed: selectedPaymentDate,
  };

  const handlePrint = () => {
    // var element = document.getElementById('view-acquisition-model');
    // html2pdf(element);
    // document.getElementById('hide-in-report').style.display = 'block';
    // document.getElementById('hide-in-report-2').style.display = 'block';
    // document.getElementById('hide-in-report-2').classList.add('hide-it');
    // var logo = ``;
    var element = document.getElementById('loanAgreement');
    var opt = {
      margin: 0,
      filename: 'myfile.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 4 },
      jsPDF: { unit: 'in', orientation: 'portrait' },
    };

    // New Promise-based usage:
    html2pdf().set(opt).from(element).save();

    // Old monolithic-style usage:
    html2pdf(element, opt);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    props.requestLoan(newRequest);
    handlePrint();
  };

  return (
    <div className="loanAgreementContainer">
      <Navbar />
      <div className="loanAgreement">
        <div className="loanAgreementLeft" />
        <div className="loanAgreementRight">
          <div className="loanAgreementRightContent" id="loanAgreement">
            <h3 className="loanAgreementHeader">Loan Contract</h3>
            <form className="loanAgreementForm">
              <div className="row">
                <div className="LabelContainer">
                  <label for="fname" className="labelText">
                    I
                  </label>
                </div>
                <div className="InputContainer">
                  <input type="text" value={`${userProfile.firstName}`} />
                </div>
              </div>
              <div className="row">
                <div className="LabelContainer">
                  <label for="fname" className="labelText">
                    National Id
                  </label>
                </div>
                <div className="InputContainer">
                  <input type="text" value={userProfile.nationalId} />
                </div>
              </div>
              <div className="row">
                <div className="LabelContainer">
                  <label for="fname" className="labelText">
                    Telephone
                  </label>
                </div>
                <div className="InputContainer">
                  <input name="firstname" value={userProfile.telephone} />
                </div>
              </div>
              <div className="Commintrow">
                <p className="commitmentText">
                  Willingly request the following loan
                </p>
              </div>
              <div className="row">
                <div className="LabelContainer">
                  <label for="fname" className="labelText">
                    Title
                  </label>
                </div>
                <div className="InputContainer">
                  <input name="firstname" value={product.title} />
                </div>
              </div>
              <div className="row">
                <div className="LabelContainer">
                  <label for="fname" className="labelText">
                    Price/Unit
                  </label>
                </div>
                <div className="InputContainer">
                  <input name="firstname" value={product.price} />
                </div>
              </div>
              <div className="row">
                <div className="LabelContainer">
                  <label for="fname" className="labelText">
                    Quantity
                  </label>
                </div>
                <div className="InputContainer">
                  <input
                    type="number"
                    placeholder="type here the quantity"
                    onChange={(e) => setLoanQuantity(e.target.value)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="LabelContainer">
                  <label for="fname" className="labelText">
                    Total
                  </label>
                </div>
                <div className="InputContainer">
                  <input
                    name="firstname"
                    value={LoanQuantity * product.price}
                  />
                </div>
              </div>
              <div className="row">
                <div className="LabelContainer">
                  <label for="fname" className="labelText">
                    On the following date
                  </label>
                </div>
                <div className="InputContainer">
                  <input type="text" value={todaysDate} />
                </div>
              </div>
              <div className="row">
                <div className="LabelContainer">
                  <label for="fname" className="labelText">
                    That will be payed
                  </label>
                </div>
                <div className="InputContainer">
                  <input
                    type="date"
                    className="paymentDateLoanAgrementInput"
                    onChange={(e) =>
                      setSelectedPaymentDate(
                        moment(e.target.value).format('YYYY-MM-DD').toString()
                      )
                    }
                  />
                </div>
              </div>
              <div class="row">
                <input
                  type="submit"
                  value="Submit"
                  className="LoanAgreementBtn"
                  onClick={handleClick}
                />
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
  selectedProduct: state.selectedProduct.selectedProduct,
});

export default connect(mapStateToProps, { requestLoan })(LoanAgreementPage);

// export default LoanAgreementPage;
