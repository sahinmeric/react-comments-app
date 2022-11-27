import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Grid, Paper, Container, CardActionArea } from "@mui/material";

import { CommentType } from "./Comments";
import user from "./images/user.png";

function CommentCard({ id, name, email, body }: CommentType) {
    return (
        <Container
            maxWidth="xs"
            style={{
                padding: "2px",
                margin: "auto"
            }}>
            <CardActionArea>
                <Link to={`/${id}`} style={{ textDecoration: "none" }}>
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
                                        margin: "5px",
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
                                {
                                    body.length > 30
                                        ? <em style={{ color: "#192F52", padding: "5px" }}>“{body.slice(0, 30)}...”</em>
                                        : <em style={{ color: "#192F52", padding: "5px" }}>“{body}”</em>
                                }
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
                </Link>
            </CardActionArea>
        </Container>
    );
}

export default CommentCard;
