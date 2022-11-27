import React from "react";
import { useNavigate, useParams } from "react-router-dom";
//material ui components
import { Grid, Paper, Container, Button, Avatar, CardActionArea } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { useComments } from "./Comments";
import NotFound from "./NotFound";
import ShowProgress from "./ShowProgress";
import user from "./images/user.png";


function CommentDetail() {
    const navigate = useNavigate()
    const { commentId } = useParams();
    const { data: commentData, error, isFetching, isLoading } = useComments();
    const comment = commentData?.find((comment) => comment.id === Number(commentId))

    if (isLoading || isFetching) {
        return <ShowProgress />
    }
    if (error || !comment) {
        return <NotFound />
    }
    return (
        <Container maxWidth="xs" style={{ padding: "2px", margin: "auto" }}>
            <CardActionArea onClick={() => navigate(-1)}>
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
                                <b>{comment.name}</b></h4>
                            <em style={{ color: "#192F52", padding: "5px" }}>“{comment.body}”</em>
                            <p style={{ textAlign: "right", color: "gray" }}>{comment.email}</p>
                        </Grid>
                    </Grid>
                </Paper>
            </CardActionArea>
            <Button
                style={{ margin: "5px 0" }}
                variant="contained"
                size="small"
                color="error"
                startIcon={<ArrowBackIosIcon />}
                onClick={() => navigate(-1)}>
                BACK
            </Button>
        </Container >

    )
}

export default CommentDetail