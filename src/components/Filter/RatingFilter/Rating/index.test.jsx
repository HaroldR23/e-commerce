import { render } from '@testing-library/react';
import { Rating } from './';
import { SearchContext } from '../../../../contexts/SearchContext';
import { mockValue } from '../../../../contexts/SearchContext/indexConfigTests';

describe("Rating Component", () => {
  let container;
  beforeEach(() => {
    <SearchContext.Provider value={mockValue}>
    <Rating stars={3} />
    </SearchContext.Provider>

  })
  it("renders Rating component with filled and not filled stars", () => {
    const { container } = render(
      <SearchContext.Provider value={mockValue}>
        <Rating stars={3} />
      </SearchContext.Provider>
    );
    
    const ratingContainer = container.querySelector(".RatingContainer");
    expect(ratingContainer).toBeInTheDocument;

    const filledStars = container.querySelectorAll(".StarFilled");
    const notFilledStars = container.querySelectorAll(".StarNotFilled");
    expect(filledStars.length).toBe(3);
    expect(notFilledStars.length).toBe(2);

    const upText = container.querySelector("h3");
    expect(upText).toBeInTheDocument;
    expect(upText.textContent).toBe("& up");
  });

  it("renders Rating component with all filled stars", () => {
    const { container } = render(
      <SearchContext.Provider value={mockValue}>
        <Rating stars={5} />
      </SearchContext.Provider>
    );
    
    const filledStars = container.querySelectorAll(".StarFilled");
    expect(filledStars.length).toBe(5);

    const upText = container.querySelector("h3");
    expect(upText).toBeInTheDocument;
    expect(upText.textContent).toBe("& up");
  });

  it("renders Rating component with no filled stars", () => {
    const { container } = render(
      <SearchContext.Provider value={mockValue}>
        <Rating stars={0} />
      </SearchContext.Provider>
    );
    
    const notFilledStars = container.querySelectorAll(".StarNotFilled");
    expect(notFilledStars.length).toBe(5);

    const upText = container.querySelector("h3");
    expect(upText).toBeInTheDocument;
    expect(upText.textContent).toBe("& up");
  });
});
