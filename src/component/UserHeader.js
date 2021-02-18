import { extend } from "lodash";
import React from "react";

import { connect } from "react-redux";

class UserHeader extends React.Component {
  render() {
    const { users } = this.props;

    if (!users) return null;

    return <div className="header">{users.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { users: state.users.find((user) => user.id === ownProps.userId) };
};

export default connect(mapStateToProps, {})(UserHeader);
