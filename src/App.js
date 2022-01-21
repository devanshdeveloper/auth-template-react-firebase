import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./context/ContextProvider";
import AddCategory from "./pages/AddCategory";
import DashboardPage from "./pages/DashboardPage";
import SignInPage from "./pages/SignInPage";

function App() {
  const { user } = useAuth();
  return (
    <Routes>
      <Route path="/" exact element={<></>} />
      <Route
        path="/signin"
        element={user ? <Navigate to="/dashboard" /> : <SignInPage />}
      />
      <Route
        path="/dashboard"
        element={user ? <DashboardPage /> : <Navigate to="/signin" />}
      />
      <Route
        path="/category/new"
        element={user ? <AddCategory /> : <Navigate to="/signin" />}
      />
    </Routes>
  );
}

export default App;
