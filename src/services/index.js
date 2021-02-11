import { setSAGA } from "../sagas";
import * as common from "@bgroves/common";

const feathers = require("@feathersjs/feathers");
const socketio = require("@feathersjs/socketio-client");
const io = require("socket.io-client");
const auth = require("@feathersjs/authentication-client");

// seting dispatch as a global variable works, but setting
// store as a global variable in Saga messes up the generator functions
const setupServices = async (dispatch) => {
  common.log(`In settupServices: ${process.env.REACT_APP_FEATHERS_HOSTNAME}`);

  const srv = feathers();
  srv.configure(
    socketio(io(`https://${process.env.REACT_APP_FEATHERS_HOSTNAME}`))
  );

  // Available options are listed in the "Options" section
  srv.configure(
    auth({
      storageKey: "auth",
    })
  );

  // seting dispatch as a global variable works, but setting
  // store as a global variable messes up the generator functions
  setSAGA(srv, dispatch);

  return srv;
};

export default setupServices;
