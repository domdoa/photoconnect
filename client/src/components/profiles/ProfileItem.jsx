import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class ProfileItem extends Component {
  render() {
    const { profile } = this.props;
    const { isAuthenticated } = this.props.auth;

    return (
      <div className="col-xl-4 col-md-6 col-sm-12">
        <div className="card card-body bg-light mt-4">
          <div className="row">
            <div className="col-lg-5 col-md-6 col-sm-4 col-5">
              <img
                src={profile.user.avatar}
                alt={profile.name}
                className="rounded-circle"
              />
              <div className="mt-2 text-center">
                {isAuthenticated ? (
                  <Link
                    to={`/profile/${profile.handle}`}
                    className="btn-sm btn-info"
                  >
                    View Profile
                  </Link>
                ) : null}
              </div>
            </div>
            <div className="col">
              <h3>{profile.name}</h3>
              <p className="text-muted">{profile.occupation}</p>
              <p>
                <i className="text-secondary fas fa-map-marker" />{" "}
                {profile.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(ProfileItem);
