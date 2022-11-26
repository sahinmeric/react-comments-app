import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useComments } from "./Comments";
import NotFound from "./NotFound";
import ShowProgress from "./ShowProgress";

//material ui components
import { Grid, Paper, Container, Button, Avatar } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function CommentDetail() {
    const imgLink =
        "https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg";

    const navigate = useNavigate()
    const { commentId } = useParams();
    const { data: commentData, error, isFetching, isLoading } = useComments();
    const comment = commentData?.find((comment) => comment.id === Number(commentId))

    if (isLoading || isFetching) {
        return (
            <ShowProgress />
        );
    }
    if (error || !comment) {
        return <NotFound />
    }
    return (
        <Container maxWidth='xs' style={{ padding: 5, margin: 'auto' }}>
            <Paper elevation={8} style={{ padding: "10px 10px", border: "1px solid lightgray", backgroundColor: "white", opacity: "1" }}>
                <Grid container wrap="wrap" spacing={2}>
                    <Grid item>
                        <Avatar alt="Avatar" src={imgLink} />
                    </Grid>
                    <Grid justifyContent="left" item xs zeroMinWidth>
                        <h4 style={{ margin: 0, padding: "5px 0", textAlign: "left", color: "gray" }}>
                            <b>{comment.name}</b></h4>
                        <em>“{comment.body}”</em>
                        <p style={{ textAlign: "right", color: "gray" }}>
                            {comment.email}
                        </p>
                    </Grid>
                </Grid>
            </Paper>
            <Button style={{ margin: "5px 0" }} variant="contained" size="small" color="error" startIcon={<ArrowBackIosIcon />} onClick={() => navigate(-1)}>Back</Button>
        </Container>
    )
}

export default CommentDetail