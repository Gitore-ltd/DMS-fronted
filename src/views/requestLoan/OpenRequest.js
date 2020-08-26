import React, { useState } from "react"
import qs from "qs"
import "./OpenRequest.css"
import NavBar from "../../components/Navbar.js"

const OpenRequest = (props) => {
  const queryParms = props.history.location.search

  const [product, setProduct] = useState({
    ...qs.parse(queryParms.replace("?", "")),
  })

  return (
    <div className="MakeRequestcontainer">
      <NavBar />
      <div className="MakeRequestcontainerContent">
        <div className="makeRequest">
          <div className="makeRequestLeft">
            <div className="makeRequestimageHolder">
              <img src={product.productImage} />
            </div>
          </div>
          <div className="makeRequestRight">
            <form className="RequestLoanForm">
              <div className="OpenRequestFormGroup">
                <label>Title</label>
                <input
                  type="text"
                  value={product.title}
                  style={{ marginLeft: "40px", width: "68%" }}
                />
              </div>
              <div className="OpenRequestFormGroup">
                <label>Available Quantity</label>
                <input
                  type="text"
                  value={product.availableQuantity}
                  style={{ width: "70%" }}
                />
              </div>
              <div className="OpenRequestFormGroup">
                <label>Unit</label>
                <input
                  type="text"
                  value={product.unit}
                  style={{ marginLeft: "40px", width: "68%" }}
                />
              </div>
              <div className="OpenRequestFormGroup">
                <label>Quality</label>
                <input
                  type="text"
                  value={product.quality}
                  style={{ marginLeft: "32px", width: "68%" }}
                />
              </div>
              <div className="OpenRequestFormGroup">
                <label>Price</label>
                <input
                  type="text"
                  value={product.price}
                  style={{ marginLeft: "40px", width: "68%" }}
                />
              </div>

              <div className="OpenRequestFormGroup">
                <label>Description</label>
                <textarea
                  id="w3review"
                  name="w3review"
                  rows="4"
                  cols="50"
                  value={product.description}
                  className="textarea"
                />
              </div>
              <button className="btn_Request">Request Loan</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OpenRequest
