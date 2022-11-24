import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

type Comment = {
    commentId: number;
    id: number;
    name: string;
    email: string;
    body: string;
};

function useComments() {
    return useQuery(["comments"], async (): Promise<Array<Comment>> => {
        const { data } = await axios.get(
            "http://jsonplaceholder.typicode.com/posts/1/comments"
        );
        return data;
    });
}

function Comments() {
    const { data: comment, error, isFetching, isLoading } = useComments();
    if (isLoading) {
        return <p>Loading...</p>
    }
    if (error) {
        return <p>Error</p>
    }
    return (
        <>
            <ul>
                {comment?.map((comment) => (
                    <li key={comment.id}>
                        <Link to="/comment-detail" >{comment.name}</Link>
                    </li>
                ))}
            </ul>
            <div>{isFetching ? "Comments loading..." : " "}</div>
        </>
    );
}

export default Comments;
