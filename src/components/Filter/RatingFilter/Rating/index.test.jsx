import { render } from '@testing-library/react';
import { Rating } from './';

describe("Rating Component", () => {
  it("renders Rating component with filled and not filled stars", () => {
    const { container } = render(<Rating stars={3} />);
    
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
    const { container } = render(<Rating stars={5} />);
    
    const filledStars = container.querySelectorAll(".StarFilled");
    expect(filledStars.length).toBe(5);

    const upText = container.querySelector("h3");
    expect(upText).toBeInTheDocument;
    expect(upText.textContent).toBe("& up");
  });

  it("renders Rating component with no filled stars", () => {
    const { container } = render(<Rating stars={0} />);
    
    const notFilledStars = container.querySelectorAll(".StarNotFilled");
    expect(notFilledStars.length).toBe(5);

    const upText = container.querySelector("h3");
    expect(upText).toBeInTheDocument;
    expect(upText.textContent).toBe("& up");
  });
});
