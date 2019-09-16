import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getEducation } from "../../redux/actions/educationActions";

import BasicCard from "../../layout/BasicCard/BasicCard";
import Spinner from "../Common/Spinner";

class Education extends Component {
  componentDidMount() {
    this.props.getEducation();
  }

  render() {
    const { education } = this.props;
    let educationContent;
    console.log(education);
    if (education.loading) {
      educationContent = <Spinner />;
    } else {
      educationContent = <span>Education</span>;
    }
    return (
      <div className="flex-container-column flex-center">
        <BasicCard>{educationContent}</BasicCard>
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
