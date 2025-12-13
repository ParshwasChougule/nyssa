import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import MommyMakeoverPage from './pages/MommyMakeoverPage';
import ClinicsPage from './pages/ClinicsPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';

import BlogsPage from './pages/BlogsPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/mommy-makeover',
                element: <MommyMakeoverPage />,
            },
            {
                path: '/services',
                element: <ServicesPage />,
            },
            {
                path: '/clinics',
                element: <ClinicsPage />,
            },
            {
                path: '/blogs',
                element: <BlogsPage />,
            },
            {
                path: '/contact',
                element: <ContactPage />,
            },
        ],
    },
]);

export default router;
