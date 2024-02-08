import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import GenreImage from "./index";

describe('GenreImage', () => {

 it('returns the correct image based on the genre name', () => {
  render(<GenreImage genreName="Action" />);
  const imgElement = screen.getByRole('img');
  expect(imgElement.src).toContain("Action");
 });

});
