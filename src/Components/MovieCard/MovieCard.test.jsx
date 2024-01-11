import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";

import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import MovieCard from "./index";
import { BrowserRouter as Router } from 'react-router-dom';

describe("MovieCard component", () => {
    beforeEach(() => {
      render(
        <Router>
          <MovieCard />
        </Router>
      );
    });
  
    afterEach(() => {
      cleanup();
    });
  
    it("has a a container div named card that contains props", () => {
        const hasCard = screen.getByRole("card")
        expect(hasCard).toBeInTheDocument();
    });

    });
