import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";

import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import ArrowIcon from "./index";
import { BrowserRouter as Router } from 'react-router-dom';

describe("ArrowIcon test", () => {
    beforeEach(() => {
      render(
        <Router>
          <ArrowIcon />
        </Router>
      );
    });
  
    afterEach(() => {
      cleanup();
    });
  
    it("has an svg", () => {
        const hasSvg = screen.getByRole("svg")
        expect(hasSvg).toBeInTheDocument();
    });

    });
