import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup, fireEvent } from '@testing-library/react';

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import ListPage from './index';
import axios from "axios";


describe('List Page', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <ListPage />
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


// it('should get the latest message with a spy', () => {
//     const spy = vi.spyOn(messages, 'getLatest')
//     expect(spy.getMockName()).toEqual('getLatest')

//     expect(messages.getLatest()).toEqual(
//       messages.items[messages.items.length - 1],
//     )
