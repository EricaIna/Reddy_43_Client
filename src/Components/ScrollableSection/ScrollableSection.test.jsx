import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup, fireEvent, getByText } from '@testing-library/react';

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import TopPage from './index';

describe('Top Page', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <TopPage />
            </BrowserRouter>
        );
    });

    afterEach(() => {
        cleanup();
    });

    it("has a div with role scroll", () => {
        const scroller = screen.getByRole("scroll")
        expect(scroller).toBeInTheDocument();
    })

});
