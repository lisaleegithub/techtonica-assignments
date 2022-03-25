import { render, screen } from '@testing-library/react';
import App from './App';
import RadioButton from "./Components/RadioButton";

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


// test 1
describe("App", () => {
  test("render the App component", () => {
    render(<App />);
  });
});

// test 2
describe("RadioButton", () => {
  test("render the RadioButton component", () => {
    render(<RadioButton />);
  });
});

// test 3
test("renders Quiz App title", () => {
  render(<App />);
  const titleElement = screen.getByText(/Quiz App/);
  expect(titleElement);
});

// test 4
test("renders Next Button", () => {
  render(<App />);
  screen.getByRole("button", {
    name: /Next/
  });
});