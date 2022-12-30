import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import MyTask from "../pages/Tasks/MyTasks/MyTask";
import CompletedTask from "../pages/Tasks/CompletedTask";
import SignUp from "../pages/Login/SignUp";
import Login from "../pages/Login/Login";
import AddTasks from "../pages/Tasks/AddTasks";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/addTask',
                element: <AddTasks />,
            },
            {
                path: '/myTask',
                element: <MyTask />,
            },
            {
                path: '/completedTask',
                element: <CompletedTask />,
            },
            {
                path: '/signup',
                element: <SignUp />,
            },
            {
                path: '/login',
                element: <Login />,
            },
        ]
    },
]);