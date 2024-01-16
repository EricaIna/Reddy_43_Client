import React from "react";
import { describe, it, expect, beforeEach, afterEach, test } from "vitest";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";

import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import { HamburgerIcon, CloseIcon } from "./index";
import { BrowserRouter as Router } from 'react-router-dom';

describe('CloseIcon', () => {
    
    test('renders correctly', () => {
    render(<CloseIcon />);
   
    // Check if the close icon is rendered
    const closeIcon = screen.getByRole('close');
    expect(closeIcon).toBeInTheDocument();
    });

   });
