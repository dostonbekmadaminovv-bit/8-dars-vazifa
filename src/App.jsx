import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layouts
import AdminLayout from "./layouts/AdminLayout";
import AuthLayout from "./layouts/AuthLayout";
import PublicLayout from "./layouts/PublicLayout";

// pages
import HomePage from "./pages/landing/HomePage";
import PostPage from "./pages/landing/PostsPage";
import DetailPostPage from "./pages/landing/DetailPostPage";
import CreatePost from "./pages/admin/CreatePost";
import DashboardPage from "./pages/admin/DashboradPage";
import LoginPage from "./pages/auth/LoginPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { index: true, element: <HomePage /> },

      { path: "posts", element: <PostPage /> },
      { path: "detail", element: <DetailPostPage /> },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "createpost",
        element: <CreatePost />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={routes} />;
}

export default App;
