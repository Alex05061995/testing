import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn Testing and Dev/i);
//   expect(linkElement.href).toContain('ultimateqa.com');
// });

test('renders learn react link2', () => {
  render(<App />);
  const linkElement = screen.getByTestId(/learn-link/i);
  expect(linkElement.href).toContain('ultimateqa.com');
});
