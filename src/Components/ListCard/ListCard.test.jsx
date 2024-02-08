import React from "react";
import { describe, it, expect, beforeEach, afterEach, vi, test } from "vitest";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";

import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import ListCard from "./index";
import { BrowserRouter as Router } from 'react-router-dom';
import ListPage from "../../Pages/ListPage";

describe("ListCard test", () => {
  beforeEach(() => {
    render(
      <Router>
        <ListCard />
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
