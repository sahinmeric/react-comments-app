import React from 'react';
import { Avatar, Grid, Paper, Container } from "@mui/material";
import { CommentType } from "./Comments";
import { Link } from "react-router-dom";


function CommentBox({ id, name, email, body }: CommentType) {
    const imgLink =
        "https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg";
    return (
        <Container maxWidth='xs' style={{ padding: 5, margin: 'auto' }}>
            <Paper elevation={8} style={{ padding: "10px 10px", border: "1px solid lightgray", backgroundColor: "white", opacity: "1" }}>
                <Grid container wrap="wrap" spacing={2}>
                    <Grid item>
                        <Avatar alt="Avatar" src={imgLink} />
                    </Grid>
                    <Grid justifyContent="left" item xs zeroMinWidth>
                        <h4 style={{ margin: 0, padding: "5px 0", textAlign: "left", color: "gray" }}>
                            {name.length > 20
                                ? <b>{name.slice(0, 20)}...</b>
                                : <b>{name}</b>
                            }</h4>
                        <Link to={`/${id}`} style={{ textDecoration: "none", color: 'lightblue', padding: "5px" }}>
                            {body.length > 30
                                ? <em style={{ textAlign: "left" }}>“{body.slice(0, 30)}...”</em>
                                : <em>“{body}”</em>
                            }</Link>
                        <p style={{ textAlign: "right", color: "gray" }}>
                            {email}
                        </p>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}

export default CommentBox;