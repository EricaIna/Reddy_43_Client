import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import MovieCard from './index'; // Replace this with the actual path to your component

import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

describe('MovieCard', () => {
 test('renders correctly', () => {
 render(
 <MovieCard
   title="Test Movie"
   poster="test-poster.jpg"
   summary="Test summary"
   year="2022"
   genre="Test Genre"
   onClick={() => {}}
 />
 );

 // Check if the card is rendered
 const card = screen.getByRole('card');
 expect(card).toBeInTheDocument();

 // Check if the image is rendered
 const image = screen.getByAltText('Test Movie');
 expect(image).toBeInTheDocument();

 // Check if the title is rendered
 const title = screen.getByText('Test Movie');
 expect(title).toBeInTheDocument();

 // Check if the year is rendered
 const year = screen.getByText('2022');
 expect(year).toBeInTheDocument();

 // Check if the genre is rendered
 const genre = screen.getByText('Test Genre');
 expect(genre).toBeInTheDocument();
 });
});
