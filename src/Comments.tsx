import axios from "axios";
import { useQuery } from "@tanstack/react-query";

type Comment = {
    commentId: number;
    id: number;
    name: string;
    email: string;
    body: string;
};

function useComments() { //custom react hook function to fetch data through Api
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
                    <li key={ comment.id }>{ comment.name }</li>
                ))}
            </ul>
            <div>{isFetching ? "Comments loading..." : " "}</div>
        </>
    );
}

export default Comments;