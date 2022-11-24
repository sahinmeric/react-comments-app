import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate("/")
        }, 2000)
    }, [navigate])
    return (
        <div>
            <h1>Page not found!</h1>
            <h4>Returning to main page...</h4>
        </div>
    )
}

export default NotFound;