import MainLayout from "../MainLayout";
import AuthLayout from "../Pages/Auth/AuthLayout";
import Login from "../Pages/Auth/Login";
import Blog from "../Pages/Blog/Blog";
import Blog404 from "../Pages/Blog/Blog404";
import BlogLayout from "../Pages/Blog/BlogLayout";
import Categories from "../Pages/Blog/Categories";
import PostDetail from "../Pages/Blog/PostDetail";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Page404 from "../Pages/Page404";
import Profile from "../Pages/Profile";
import PrivateRoute from "../components/PrivateRoute";

const routes = [
  {
    path: "/",
    name: "home",
    element: <MainLayout />,
    children: [
      {
        name: "index",
        index: true,
        element: <Home />,
      },
      {
        name: "contact",
        path: "contact",
        element: <Contact />,
      },
      {
        name: "blog",
        path: "blog",
        element: <BlogLayout />,
        auth: true,
        children: [
          {
            name: "index",
            index: true,
            element: <Blog />,
          },
          {
            name: "categories",
            path: "categories",
            element: <Categories />,
          },
          {
            name: "post",
            path: "post/:postId/:postUrl",
            element: <PostDetail />,
          },
          {
            name: "notFound",
            path: "*",
            element: <Blog404 />,
          },
        ],
      },
      {
        name: "profile",
        path: "profile",
        auth: true,
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        name: "auth",
        path: "/auth",
        element: <AuthLayout />,
        children: [
          {
            index: true,
            element: <AuthLayout />,
          },
          {
            name: "login",
            path: "login",
            element: <Login />,
          },
        ],
      },
      {
        name: "notFound",
        path: "*",
        element: <Page404 />,
      },
    ],
  },
];

const authMap = (routes) =>
  routes.map((route) => {
    if (route?.auth) {
      route.element = <PrivateRoute>{route.element}</PrivateRoute>;
    }
    if (route?.children) {
      route.children = authMap(route.children);
    }
    return route;
  });

authMap(routes);

export default authMap(routes);
