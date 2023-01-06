import React from "react";
import { AuthContext } from "@fireactjs/core";
import { Box, Paper } from "@mui/material";

export const MyComponent = () => {

    return (
        <AuthContext.Consumer>
            {context => (
                <Paper>
                    <Box p={2}>
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