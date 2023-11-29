import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import PrivateProvider from './providers/PrivateProvider';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PrivateProvider>
        <Home />
      </PrivateProvider>
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
