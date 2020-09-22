import React, { useState, useEffect } from 'react';
import './profilePage.css';
import moment from 'moment';
import Navbar from '../../components/Navbar';
import NavbarSeller from '../../components/SellerNavBar';
import NavbarAdmin from '../../components/adminNavarBar';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { userProfile } from '../../store/actions/userAction';

const UpdateProfile = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [nationalId, setNationalId] = useState('');
  const [telephone, setTelephone] = useState('');
  // const [dateOfBirth, setDateOfBirth] = useState();
  const [profileImage, setProfileImage] = useState('');
  const [address, setAddress] = useState('');
  const [userProfile, setUserProfile] = useState({});
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [jwtToken, setJwtToken] = useState(localStorage.getItem('user-token'));
  const [isUpdate, setIsUpdate] = useState(false);
  const [userRole, setUserRole] = useState('');
  // const [dateOfB, setDateOfB] = useState();

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
      setProfileImage(user.user.profileImage);
      setUserRole(user.user.role);
    }
    fetchUserProfile();
  }, []);
 
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const imageLink = {
        url: image,
      };
      const newProfile = {
        firstName,
        lastName,
        profileImage: imageLink.url,
        nationalId,
        telephone,
      };

      const userData = await props.userProfile(newProfile);

      if (userData && userData.status === 200) {
        toast.success('Profile successfuly updated');
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'miv0xetk');
    setLoading(true);

    const res = await fetch(
      'https://api.cloudinary.com/v1_1/kagororacloud/image/upload',
      {
        method: 'POST',
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
      {userRole === 'seller' ? (
        <NavbarSeller />
      ) : userRole === 'customer' ? (
        <Navbar />
      ) : (
        <NavbarAdmin />
      )}
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
                  <img className="imageHolder" src={profileImage} />
                )}
              </div>

              <div className="other">
                <p className="userName">
                  {userProfile.firstName} {userProfile.lastName}
                </p>
                <p className="userRole">{userProfile.role}</p>
                <div className="buttonContainerContent">
                  <ButtonGroup className="UploadProfilebuttonContainer">
                    <input
                      id="profileInputs"
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
          </div>
          <div className="ProfileSideContainerRight">
            <Form onSubmit={handleSubmit}>
              <p className="userProfileHeader">User Profile</p>
              <p className="personalInfoProfile">Personal Information</p>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label" id="profileLabel">
                  FirstName
                </label>
                <input
                  id="profileInputs"
                  type="text"
                  class="form-control"
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder={userProfile.firstName}
                />
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label" id="profileLabel">
                  LastName
                </label>
                <input
                  id="profileInputs"
                  type="text"
                  class="form-control"
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder={userProfile.lastName}
                />
              </div>

              <div className="form-group row">
                <label className="col-sm-3 col-form-label" id="profileLabel">
                  NationalId
                </label>
                <input
                  id="profileInputs"
                  type="text"
                  class="form-control"
                  onChange={(e) => setNationalId(e.target.value)}
                  placeholder={userProfile.nationalId}
                />
              </div>
              {/* <div className="form-group row">
                <label className="col-sm-3 col-form-label" id="profileLabel">
                  Date Of Birth
                </label>
                <input
                  id="profileInputs"
                  type="date"
                  class="form-control"
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  value={
                    moment(userProfile.dateOfBirth).format('YYYY-MM-DD')
                      ? dateOfBirth === 'undefined'
                      : dateOfBirth
                  }
                />
              </div> */}

              <div className="form-group row">
                <label className="col-sm-3 col-form-label" id="profileLabel">
                  Email
                </label>
                <input
                  id="profileInputs"
                  type="text"
                  class="form-control"
                  value={userProfile.email}
                  readonly
                />
              </div>

              <div className="form-group row">
                <label className="col-sm-3 col-form-label" id="profileLabel">
                  Telphone
                </label>
                <input
                  id="profileInputs"
                  type="text"
                  class="form-control"
                  onChange={(e) => setTelephone(e.target.value)}
                  placeholder={`(+250) ${userProfile.telephone}`}
                />
              </div>

              <div className="form-group row">
                <label className="col-sm-3 col-form-label" id="profileLabel">
                  Address
                </label>
                <input
                  id="profileInputs"
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
