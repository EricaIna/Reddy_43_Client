import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup, fireEvent } from '@testing-library/react';

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import GenrePage from './index';
import axios from "axios";


describe('Genre Page', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <GenrePage />
            </BrowserRouter>
        );
    });

    afterEach(() => {
        cleanup();
    });

    const mockResult = {
        email: "emailTest",
        name: "nameTest",
        password: "passwordTest"
    }

    const mockUrl = {
        Action: "https://example.com/action.jpg",
    }

    it("gets data from fetch", async () => {
        vi.spyOn(axios, "get").mockResolvedValueOnce({
            data: mockResult
        });

    });

    it("return the correct url for known genres", () => {
        vi.spyOn(axios, "get").mockResolvedValueOnce({
            data: mockUrl
        })
    })

});
