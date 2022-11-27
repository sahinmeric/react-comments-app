import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import NotFound from "./NotFound";
import ShowProgress from "./ShowProgress";
import CommentCard from "./CommentCard"
import { Typography } from "@mui/material";


export type CommentType = {
    commentId: number;
    id: number;
    name: string;
    email: string;
    body: string;
};

export function useComments() {
    return useQuery(["comments"], async (): Promise<Array<CommentType>> => {
        const { data } = await axios.get(
            "http://jsonplaceholder.typicode.com/posts/1/comments"
        );
        return data;
    });
}

function Comments() {
    const { data: comment, error, isFetching, isLoading } = useComments();
    if (isLoading || isFetching) {
        return <ShowProgress />
    }
    if (error || !comment) {
        return <NotFound />
    }
    return (
        <>
            <ul>
                <Typography
                    variant="h3"
                    style={{
                        padding: 10,
                        margin: "auto",
                        width: "50%",
                        textAlign: "center",
                        color:"#192F52"
                    }}>
                    Comments
                </Typography>
                {comment?.map((comment) => (
                    <li key={comment.id}>
                        <CommentCard
                            commentId={comment.commentId}
                            id={comment.id}
                            name={comment.name}
                            email={comment.email}
                            body={comment.body}
                        />
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Comments;
