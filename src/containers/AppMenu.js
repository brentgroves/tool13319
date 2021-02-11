import { connect } from 'react-redux'
import AppMenuComponent from '../components/AppMenu'

import * as actions from '../actions'

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    Push: (path) => dispatch(actions.Push(path)),
  }
}

function mapStateToProps(state) {
  const { Msal } = state
  return {
    msalInstance: Msal.msalInstance,
  }
}

export const AppMenu = connect(mapStateToProps, mapDispatchToProps)(AppMenuComponent)
