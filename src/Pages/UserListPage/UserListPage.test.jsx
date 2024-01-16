import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, beforeEach, afterEach, vi, test } from 'vitest';
import { screen, render, cleanup, fireEvent, waitFor, getByRole, getByTestId, getByText } from '@testing-library/react';

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import UserListPage from './index';
import axios from "axios";


describe('Genre Page', () => {
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
        render(
            <UserListPage/>
        );
        vi.spyOn(axios, "get").mockResolvedValueOnce({
            data: mockResult
        });
        cleanup();
    });

    it("return the correct url for known genres", () => {
        render(
            <UserListPage/>
        );
        vi.spyOn(axios, "get").mockResolvedValueOnce({
            data: mockUrl
        })
        cleanup();
    })

    it('should render Loading... when isLoading is true', () => {
        const { getByText } = render(<UserListPage isLoading={true} />);
        expect(getByText('Loading...')).toBeInTheDocument();
        cleanup();
    });

});
