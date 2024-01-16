import { describe, expect, test } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute.jsx'; // Replace this with the actual path to your component

describe('Authentication Flow', () => {
 test('redirects to login page if not logged in', async () => {
 // Assume that the user is not logged in
 const isLoggedIn = false;

 // Render the component
 render(
 <BrowserRouter>
  <ProtectedRoute isLoggedIn={isLoggedIn} /* provide other necessary props here */ />
 </BrowserRouter>
 );

 // Wait for the navigation to complete
 await waitFor(() => {
 expect(window.location.pathname).toBe('/login');
 });
 });

});
