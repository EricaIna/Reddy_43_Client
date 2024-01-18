import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, beforeEach, afterEach, vi, test } from 'vitest';
import { screen, render, cleanup, fireEvent } from '@testing-library/react';

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import ReviewModal from './index';
import axios from "axios";


describe('Genre Page', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <ReviewModal />
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
