import { useNavigate } from "react-router-dom";

function CommentDetail() {
    const navigate = useNavigate()

    return (
        <div>
            <p>This is comment detail page</p>
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    )
}

export default CommentDetail