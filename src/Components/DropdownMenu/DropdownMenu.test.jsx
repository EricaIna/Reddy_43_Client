import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";

import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import DropdownMenu from "./index";
import { BrowserRouter as Router } from 'react-router-dom';


describe("Drop down menu", () => {
  beforeEach(() => {
    render(
      <Router>
        <DropdownMenu />
      </Router>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("has a nav bar", () => {
    const hasNav = screen.getByRole("nav")
    expect(hasNav).toBeInTheDocument();
  });

});
