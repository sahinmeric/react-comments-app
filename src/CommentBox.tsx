import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Grid, Paper, Container } from "@mui/material";

import { CommentType } from "./Comments";
import user from "./images/user.png";

function CommentBox({ id, name, email, body }: CommentType) {
    return (
        <Container
            maxWidth="xs"
            style={{
                padding: 5,
                margin: "auto"
            }}>
            <Paper
                elevation={8}
                style={{
                    padding: "10px 10px",
                    border: "1px solid lightgray",
                    backgroundColor: "#C6EBEB"
                }}>
                <Grid container wrap="wrap" spacing={2}>
                    <Grid item>
                        <Avatar alt="Avatar" src={user} />
                    </Grid>
                    <Grid justifyContent="left" item xs zeroMinWidth>
                        <h4
                            style={{
                                margin: 0,
                                padding: "5px 0",
                                textAlign: "left",
                                color: "#192F52"
                            }}>
                            {
                                name.length > 20
                                    ? <b>{name.slice(0, 20)}...</b>
                                    : <b>{name}</b>
                            }
                        </h4>
                        <Link
                            to={`/${id}`}
                            style={{
                                textDecoration: "none",
                                color: "#192F52"
                            }}>
                            {
                                body.length > 30
                                    ? <em>“{body.slice(0, 30)}...”</em>
                                    : <em>“{body}”</em>
                            }
                        </Link>
                        <p
                            style={{
                                textAlign: "right",
                                color: "gray"
                            }}>
                            {email}
                        </p>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}

export default CommentBox;