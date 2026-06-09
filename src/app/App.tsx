import { useEffect } from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes';
import { Toaster } from './components/ui/sonner';
import { initializePreRegisteredUsers } from './utils/preRegisteredUsers';

export default function App() {
  useEffect(() => {
    initializePreRegisteredUsers();
  }, []);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}