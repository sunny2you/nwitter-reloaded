import { Navigate } from "react-router-dom";
import { auth } from "../firebase";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = auth.currentUser;
  if (user === null) { //로그인 안되어있으면,
    return <Navigate to="/login" />; //로그인 페이지로 들어가도록. 
  }
  return children;
}