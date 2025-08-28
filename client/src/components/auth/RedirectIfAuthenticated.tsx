import { Navigate } from "react-router-dom";

const RedirectIfAuthenticated = ({ children }: { children: React.ReactNode }) => {
    const token = localStorage.getItem("token");

    if (token) {
        return <Navigate to="/dashboard" replace />;
    }

    return <>{children}</>;
};

export default RedirectIfAuthenticated;