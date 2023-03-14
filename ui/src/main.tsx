import { Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import { ProtectedRoute } from "./components/protectedRoute/protectedRoute";
import App from "./app";

export default function Main() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/app"
        element={
          <ProtectedRoute>
            <App />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};
