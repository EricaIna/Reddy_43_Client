import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";

import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import Footer from "./index";
import { BrowserRouter as Router } from 'react-router-dom';

describe("Footer test", () => {
    beforeEach(() => {
      render(
        <Router>
          <Footer />
        </Router>
      );
    });
  
    afterEach(() => {
      cleanup();
    });
  
    it("has a heading", () => {
        const hasHeading = screen.getByRole("heading")
        expect(hasHeading).toBeInTheDocument();
    });

    });
