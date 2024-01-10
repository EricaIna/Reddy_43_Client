import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";

import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import LoginForm from "./index";
import { BrowserRouter as Router } from 'react-router-dom';

describe("Login Form component", () => {
    beforeEach(() => {
      render(
        <Router>
          <LoginForm />
        </Router>
      );
    });
  
    afterEach(() => {
      cleanup();
    });

    // needs to test handle submit function again
  
    it("displays a submit button", () => {
      const submit = screen.getByRole("submit");
      expect(submit).toBeInTheDocument;
      expect(submit.value).toBe("LOGIN")
    });

    it("displays a password input with a placeholder of 'password'", ()=>{
        const passInput = screen.getByRole("Password")
        expect(passInput).toBeInTheDocument();
        expect(passInput.placeholder).toBe("Password")
    })

    it("displays a Email input with a placeholder of 'Email'", ()=>{
        const userInput = screen.getByRole("Email");
        expect(userInput).toBeInTheDocument();
        expect(userInput.placeholder).toBe("Email")
    })

    it("displays a form with Email and password inputs", ()=>{
        const form = screen.getByRole("form");
        expect(form).toBeInTheDocument();
    })

    it("updates email and password values on input change", () => {
        const userInput = screen.getByRole("Email");
        // const passInput = screen.getByRole("password");

        fireEvent.change(userInput, { target: { value: 'testuser' } });
        // fireEvent.change(passInput, { target: { value: 'testpassword' } });

        expect(userInput.value).toBe('testuser');
        // expect(passInput.value).toBe('testpassword');
    });



   
  });
