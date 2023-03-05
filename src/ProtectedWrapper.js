import { Navigate } from "react-router-dom";

export function ProtectedWrapper({ children }) {
    if (localStorage.getItem("key")) {
        return children;
    } else {
        return <Navigate to="/auth" replace />;
    }
}