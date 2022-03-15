import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn testing library/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders tailane ', () => {
  render(<App />);
  const bold = screen.getByText('Tailane');
  expect(bold).toBeInTheDocument();
})
