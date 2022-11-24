import { useNavigate, useParams } from "react-router-dom";
import { useComments } from "./Comments";

function CommentDetail() {
    const navigate = useNavigate()
    const { commentId } = useParams();
    const { data: commentData } = useComments();
    const comment = commentData?.find((comment) => comment.id === Number(commentId))
    return (
        <div>
            <p>{comment?.body}</p>
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    )
}

export default CommentDetail