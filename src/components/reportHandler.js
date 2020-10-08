// import React, { Component } from 'react';
// // import Approve from '../img/svg/approve.svg';
// // import Deny from '../img/svg/deny.svg';
// // import logoBrand from '../img/rmh-img.png';
// import html2pdf from 'html2pdf.js';
// import moment from 'moment';
// class AcquisitionReport extends Component {
//   render() {
//     return (
//       <div id="acquisition-report" className="acquisition-details">
//         <div id="print-req-report">
//           <img className="img-logo" src={logoBrand} alt="logo" width="650px" />
//           <h2>ASSET ACQUISITION FORM</h2>
//           <div className="form-group-report format">
//             <h4>Date:</h4>
//             <span>
//               <p>
//                 {moment(this.props.acquisitionInfo.createdAt).format(
//                   'DD-MM-YYYY'
//                 )}
//               </p>
//             </span>
//             <br />
//             <h4>Completed by:</h4>
//             <span>
//               <p>{this.props.acquisitionInfo.requestedBy}</p>
//             </span>
//             <br />
//             <div className="form-group-report">
//               <h2>Asset details</h2>
//               <h4>Asset name:</h4>
//               <span>
//                 <p>{this.props.acquisitionInfo.assetName}</p>
//               </span>
//               <br />
//               <h4>Description:</h4>
//               <span>
//                 <p>{this.props.acquisitionInfo.description}</p>
//               </span>
//               <br />
//               <h4>Reason:</h4>
//               <div>
//                 <textarea
//                   cols="75"
//                   rows="10"
//                   value={this.props.acquisitionInfo.reason}
//                   disabled
//                 ></textarea>
//               </div>
//               <br />
//             </div>
//           </div>

//           <div id="stamp-approve">
//             <img src={Approve} alt="Ooops" />
//           </div>
//           <div id="stamp-deny">
//             <img src={Deny} alt="Ooops" />
//           </div>
//         </div>
//         <button className="btn-print" onClick={this.handlePrint}>
//           Export as pdf
//         </button>
//       </div>
//     );
//   }
// }

// export default AcquisitionReport;
