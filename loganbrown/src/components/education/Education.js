import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getEducation } from "../../redux/actions/educationActions";

class Education extends Component {
  componentDidMount() {
    this.props.getEducation();
  }
  render() {
    const { education } = this.props;
    return (
      <div className="flex-container-column flex-center">
        <span>{education.issuer}</span>
      </div>
    );
  }
}

Education.propTypes = {
  getEducation: PropTypes.func.isRequired,
  education: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  education: state.education
});

export default connect(
  mapStateToProps,
  { getEducation }
)(Education);
