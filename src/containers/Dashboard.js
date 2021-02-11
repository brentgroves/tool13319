import { connect } from "react-redux";
import DashboardComponent from "../components/Dashboard";

// import * as actions from "../actions";

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    // Push: () => dispatch(actions.Push()),
  };
};

function mapStateToProps(state) {
  // const { User, router } = state;
  return {
    // isAuthenticated: User.isAuthenticated,
    // isAdmin: User.isAdmin,
    // userName: User.userName,
    // firstName: User.firstName,
    // lastName: User.lastName,
    // pathname: router.location.pathname,
    // search: router.location.search,
    // hash: router.location.hash
  };
}

export const Dashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardComponent);
