import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.error("Route Error:", err);

    return (
        <div className="error-page">
            <h1>Something went wrong!</h1>
            {err.status ? (
                <h2>{err.status}: {err.statusText}</h2>
            ) : (
                <h2>Error: {err.message || "Unknown error occurred"}</h2>
            )}
            <p>{err.data || "We're sorry for the inconvenience. Please try again later."}</p>
        </div>
    );
};

export default Error;