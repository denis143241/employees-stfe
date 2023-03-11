import {Route, Routes} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout/MainLayout.jsx";
import {Board} from "../pages/Tasks/Board.jsx";
import {Employees} from "../pages/Employees/Employees.jsx";
import {EditEmployee} from "../pages/EditEmployee/EditEmployee.jsx";
import {Contacts} from "../pages/Contacts/Contacts.jsx";
import {Tariffs} from "../pages/Tariffs/Tariffs.jsx";
import {LoginLayout} from "../layouts/LoginLayout/LoginLayout.jsx";
import {Login} from "../pages/Login/Login.jsx";
import {Register} from "../pages/Register/Register";

const layouts = [
  {
    path: '/',
    component: <MainLayout />,
    routes: [
      {
        path: '/',
        component: <Board />
      },
      {
        path: '/employees',
        component: <Employees />
      },
      {
        path: '/edit-employee',
        component: <EditEmployee />
      },
      {
        path: '/board',
        component: <Board />
      },
      {
        path: '/contacts',
        component: <Contacts />
      },
      {
        path: '/tariffs',
        component: <Tariffs />
      }
    ]
  },
  {
    path: '/login',
    component: <LoginLayout />,
    routes: [
      {
        path: '/login',
        component: <Login />
      },
      {
        path: '/login/new-user',
        component: <Register />
      }
    ],
  },
]

export const AppRouter = () => {
  return (
    <Routes>
      {
        Object.entries(layouts).map(([, value]) => (
          <Route
            key={value.path}
            path={value.path}
            element={value.component}
          >
            {value.routes.map((route) => <Route key={route.path} path={route.path} element={route.component}/>)}
          </Route>
        ))
      }
    </Routes>
  );
};