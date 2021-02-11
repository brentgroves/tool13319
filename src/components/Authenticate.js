import React from "react";

import { AppInit } from "../containers/AppInit";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Snackbar from "@material-ui/core/Snackbar";
import { MsalProvider, MsalAuthenticationTemplate } from "@azure/msal-react";
import { ErrorBoundary } from "./ErrorBoundary.jsx";

const InProgressComponent = ({ inProgress }) => {
  return <h5>{inProgress} In Progress</h5>;
};

const ErrorComponent = ({ error }) => {
  return (
    <h5>
      This is a protected page and the following error occurred during
      authentication: <strong>{error.errorCode}</strong>
    </h5>
  );
};

/* 
Describes an alternate way to do this.
https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-react/docs/hooks.md#useaccount-hook
*/
export default function Authenticate({
  msalInstance,
  ClearAppError,
  appError,
}) {
  const handleCloseSnackBar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    ClearAppError();
  };

  return (
    <MsalProvider instance={msalInstance}>
      <ErrorBoundary>
        <MsalAuthenticationTemplate
          interactionType="redirect"
          loadingComponent={InProgressComponent}
          errorComponent={ErrorComponent}
        >
          <AppInit />
          <Snackbar
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            open={appError.error}
            autoHideDuration={6000}
            onClose={handleCloseSnackBar}
            message={appError.message}
            action={
              <React.Fragment>
                <Button
                  color="secondary"
                  size="small"
                  onClick={handleCloseSnackBar}
                >
                  Fail
                </Button>
                <IconButton
                  size="small"
                  aria-label="close"
                  color="inherit"
                  onClick={handleCloseSnackBar}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </React.Fragment>
            }
          />
        </MsalAuthenticationTemplate>
      </ErrorBoundary>
      {/* <UnauthenticatedTemplate>
                <p>Logging in...</p>
            </UnauthenticatedTemplate> */}
    </MsalProvider>
  );
}
