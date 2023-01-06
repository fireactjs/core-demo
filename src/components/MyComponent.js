import React from "react";
import { AuthContext } from "@fireactjs/core";
import { Box, Link, Paper } from "@mui/material";

export const MyComponent = () => {

    return (
        <AuthContext.Consumer>
            {context => (
                <Paper>
                    <Box p={2}>
                        <p><strong>
                            This is an example component to demostrate how to retrieve the user information.
                            For details, see <Link href="https://fireactjs.com/docs/core-package/development/" target="_blank">the documentation</Link>.
                        </strong></p>
                        <p>User ID: {context.authUser.user.uid}</p>
                        <p>Name: {context.authUser.user.displayName}</p>
                        <p>Email: {context.authUser.user.email}</p>
                        <p>Verified: {context.authUser.user.emailVerified?"Yes":"No"}</p>
                        <p>Avatar URL: {context.authUser.user.photoURL}</p>
                    </Box>
                </Paper>
            )}
        </AuthContext.Consumer>
    )
}