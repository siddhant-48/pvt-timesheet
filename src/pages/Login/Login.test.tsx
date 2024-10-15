jest.mock("@tanstack/react-query", () => ({
  ...jest.requireActual("@tanstack/react-query"),
  useQuery: () => ({
    isLoading: false,
    error: null,
    data: null,
    isFetching: false,
    isSuccess: false,
    refetch: jest.fn().mockResolvedValue({ status: "success", data: {} }),
  }),
}));

import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Login } from "./Login";
import { useQuery } from "@tanstack/react-query";


jest.mock("../../store", () => ({
  useAuthStore: jest.fn(),
}));
jest.mock("axios");
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));
jest.mock("../../services/api", () => ({
  isLogin: jest.fn().mockResolvedValue({ data: { user: "testUser" } }),
}));

const getComponent = (props: any = {}) => (
  <BrowserRouter>
    <Login
      {...{
        ...props,
      }}
    />
  </BrowserRouter>
);

describe("Login Component", () => {
  beforeAll(() => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Depreciated
      removeListener: jest.fn(), // Depreciated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));
  });

  beforeEach(() => {
    render(getComponent());
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders Login component", () => {
    expect(screen.getByText('Trust 2 Connect')).toBeInTheDocument();
  });
});

// // const add = (a:number, b:number) => a + b;

// // describe('add', () => {
// //   test('adds two numbers correctly', () => {
// //     expect(add(1, 2)).toBe(3);
// //     expect(add(-1, -2)).toBe(-3);
// //     expect(add(-1, 1)).toBe(0);
// //   });
// // });
