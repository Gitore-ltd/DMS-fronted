import React, { useState, useEffect } from "react";
import "./profilePage.css";
import Navbar from "../../components/Navbar";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { userProfile } from "../../store/actions/userAction";

const UpdateProfile = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [telephone, setTelephone] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [address, setAddress] = useState("");
  const [userProfile, setUserProfile] = useState({});
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchUserProfile() {
      const userToken = localStorage.getItem("user-token");
      const res = await fetch(
        `https://debt-management-system.herokuapp.com/api/v1/getProfile`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
            token: userToken,
          },
        }
      );
      const user = await res.json();
      setUserProfile(user.user);
    }
    fetchUserProfile();
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const imageLink = {
      url: image,
    };
    const newProfile = {
      firstName,
      lastName,
      profileImage: imageLink.url,
    };
    const userData = await props.userProfile(newProfile);
    if (userData && userData.status === 200) {
      toast.success("Profile successfuly updated");
    }
  };

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "miv0xetk");
    setLoading(true);

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/kagororacloud/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const file = await res.json();
    setProfileImage(file.secure_url);
    setImage(file.secure_url);
    setLoading(false);
  };

  return (
    <div className="Profilecontainer">
      <Navbar />
      <div className="ProfileSide">
        <div className="ProfileSideContainer">
          <div className="ProfileSideContainerLeft">
            <div className="ProfileSideContainerLeftContent">
              <div className="avatarContainer">
                {loading ? (
                  <p className="profileAvatarSurrounding">
                    <FontAwesomeIcon icon={faUser} size="5x" />
                  </p>
                ) : (
                    <img
                      src={userProfile.profileImage}
                      style={{ width: "300px" }}
                    />
                  )}
              </div>

              <div className="other">
                <p className="userName">
                  {userProfile.firstName} {userProfile.lastName}
                </p>
                <p className="userRole">{userProfile.role}</p>
                <ButtonGroup className="buttonContainer">
                  <input
                    type="file"
                    name="file"
                    placeholder="Upload Image"
                    onChange={uploadImage}
                    className="uploadButton"
                  />
                  <Button className="removeButton">REMOVE</Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div className="ProfileSideContainerRight">
            <Form onSubmit={handleSubmit}>
              {/* <Form.Row className="DisplayHorizontally">
                <Form.Group
                  as={Col}
                  controlId="formGridEmail"
                  className="SpaceBtwLabels"
                >
                  <Form.Label >FirstName</Form.Label>
                  <Form.Control
                    type="text"
                    class="form-control"
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder={userProfile.firstName}
                  />
                </Form.Group>
              </Form.Row> */}
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">FirstName</label>
                <input
                  type="text"
                  class="form-control"
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder={userProfile.firstName}
                />
              </div>
              {/* <Form.Row className="DisplayHorizontally">
                <Form.Group
                  as={Col}
                  controlId="formGridEmail"
                  className="SpaceBtwLabels"
                >
                  <Form.Label >LastName</Form.Label>
                  <Form.Control
                    type="text"
                    className="InputField"
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder={userProfile.lastName}
                  />
                </Form.Group>
              </Form.Row> */}
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">LastName</label>
                <input
                  type="text"
                  class="form-control"
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder={userProfile.lastName}
                />
              </div>


              {/* <Form.Row className="DisplayHorizontally">
                <Form.Group
                  as={Col}
                  controlId="formGridEmail"
                  className="SpaceBtwLabels"
                >
                  <Form.Label >
                    Date Of Birth
                  </Form.Label>
                  <Form.Control
                    type="text"
                    className="InputField"
                    value={userProfile.dateOfBirth}
                  />
                </Form.Group>
              </Form.Row> */}

              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Date Of Birth</label>
                <input
                  type="text"
                  class="form-control"
                  value={userProfile.dateOfBirth}
                />
              </div>

              {/* <Form.Row className="DisplayHorizontally">
                <Form.Group
                  as={Col}
                  controlId="formGridEmail"
                  className="SpaceBtwLabels"
                >
                  <Form.Label >
                    National ID
                  </Form.Label>
                  <Form.Control
                    type="text"
                    className="InputField"
                    onChange={(e) => setNationalId(e.target.value)}
                    placeholder={userProfile.nationalId}
                  />
                </Form.Group>
              </Form.Row> */}


              <div className="form-group row">
                <label className="col-sm-3 col-form-label">NationalId</label>
                <input
                  type="text"
                  class="form-control"
                  onChange={(e) => setNationalId(e.target.value)}
                  placeholder={userProfile.nationalId}
                />
              </div>

              {/* <Form.Row className="DisplayHorizontally">
                <Form.Group
                  as={Col}
                  controlId="formGridEmail"
                  className="SpaceBtwLabels"
                >
                  <Form.Label >Email</Form.Label>
                  <Form.Control
                    type="text"
                    className="InputField"
                    value={userProfile.email}
                    readonly
                  />
                </Form.Group>
              </Form.Row> */}

              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Email</label>
                <input
                  type="text"
                  class="form-control"
                  value={userProfile.email}
                  readonly
                />
              </div>

              {/* <Form.Row className="DisplayHorizontally">
                <Form.Group
                  as={Col}
                  controlId="formGridEmail"
                  className="SpaceBtwLabels"
                >
                  <Form.Label >Tel</Form.Label>
                  <Form.Control
                    type="text"
                    className="InputField"
                    onChange={(e) => setTelephone(e.target.value)}
                    placeholder={userProfile.telephone}
                  />
                </Form.Group>
              </Form.Row> */}

              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Telphone</label>
                <input
                  type="text"
                  class="form-control"
                  onChange={(e) => setTelephone(e.target.value)}
                  placeholder={userProfile.telephone}
                />
              </div>

              {/* <Form.Row
                className="DisplayHorizontally"
                style={{ marginBottom: "10px" }}
              >
                <Form.Group
                  as={Col}
                  controlId="formGridEmail"
                  className="SpaceBtwLabels"
                >
                  <Form.Label >Address</Form.Label>
                  <Form.Control
                    type="text"
                    className="InputField"
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder={userProfile.address}
                  />
                </Form.Group>
              </Form.Row> */}

              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Telphone</label>
                <input
                  type="text"
                  class="form-control"
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder={userProfile.address}
                />
              </div>

              <ButtonGroup
                aria-label="Basic example"
                className="FinalButtonContainer"
              >
                <Button
                  variant="secondary"
                  className="UpdateButton"
                  type="submit"
                >
                  UPDATE PROFILE
                </Button>
                <Button variant="secondary" className="CancelButton">
                  CANCEL
                </Button>
              </ButtonGroup>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user,
});

export default connect(mapStateToProps, { userProfile })(UpdateProfile);
