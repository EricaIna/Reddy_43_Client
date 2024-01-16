import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";

import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import FilmCard from "./index";
import { BrowserRouter as Router } from 'react-router-dom';


describe("FilmCard test", () => {
  beforeEach(() => {
    render(
      <Router>
        <FilmCard />
      </Router>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("has role card on div", () => {
    const hasCard = screen.getByRole("card")
    expect(hasCard).toBeInTheDocument();
  });

});

