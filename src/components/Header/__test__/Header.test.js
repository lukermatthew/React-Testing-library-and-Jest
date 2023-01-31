import { render, screen } from "@testing-library/react";
import Header from "../Header";

// test by text
it("should render same text passed into title props", async () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

// it("should render same text passed into title props", async () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByRole("heading");
//   expect(headingElement).toBeInTheDocument();
// });

// test by role and name
// it("should render same text passed into title props", async () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByRole("heading", { name: "My Header" });
//   expect(headingElement).toBeInTheDocument();
// });

// // test by title
// it("should render same text passed into title props", async () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByTitle("Header");
//   expect(headingElement).toBeInTheDocument();
// });

// // test by id
// it("should render same text passed into title props", async () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByTestId("head");
//   expect(headingElement).toBeInTheDocument();
// });

// // Find by use for asynchronous
// it("should render same text passed into title props", async () => {
//   render(<Header title="My Header" />);
//   const headingElement = await screen.findByText(/my header/i);
//   expect(headingElement).toBeInTheDocument();
// });

// // QUERY
// // Query By, you can use if you expect the text dogs in not to be in document
// it("should render same text passed into title props", async () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.queryByText(/dogs/i);
//   expect(headingElement).not.toBeInTheDocument();
// });

// it("should render same text passed into title props", async () => {
//   render(<Header title="My Header" />);
//   const headingElements = screen.getAllByRole("heading");
//   expect(headingElements.length).toBe(2);
// });
