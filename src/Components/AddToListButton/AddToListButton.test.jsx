import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, cleanup } from '@testing-library/react';


import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import AddToListButton from './index';
import axios from "axios";

describe('Register Page', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <AddToListButton />
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

    it("gets data from fetch", async () => {
        vi.spyOn(axios, "get").mockResolvedValueOnce({
            data: mockResult
        });
    });
});
