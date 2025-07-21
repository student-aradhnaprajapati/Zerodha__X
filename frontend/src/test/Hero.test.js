import React from 'react';
import {render, Render, screen} from '@testing-library/react';
import "@testing-library/jest-dom";
import Hero from '../Landing_page/home/Hero';

//test suite
describe("Hero Component",  () => {
    test('render Hero image', () => {
      render(<Hero/>);
      const heroImage =screen.getByAltText("Hero Image");
      expect(heroImage).toBeInTheDocument();
      expect(heroImage).toHaveAttribute('src', 'media/images/homeHero.png');
    });
    
});