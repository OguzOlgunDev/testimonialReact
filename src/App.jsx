import { useState } from "react";
import people from "./data";
import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaQuoteRight,
} from "react-icons/fa";

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, id, image, job, text } = people[index];

  const nextPerson = () => {
    setIndex((prevIndex) => (prevIndex + 1) % people.length);
  };

  const prevPerson = () => {
    setIndex((prevIndex) => (prevIndex - 1 + people.length) % people.length);
  };

  const randomPerson = () => {
    if (people.length <= 1) return;

    let newIndex = index;
    while (newIndex === index) {
      newIndex = Math.floor(Math.random() * people.length);
    }
    setIndex(newIndex);
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img className="person-img" src={image} alt={name} />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <FaChevronCircleLeft className="prev-btn" onClick={prevPerson} />
          <FaChevronCircleRight className="next-btn" onClick={nextPerson} />
        </div>
        <button
          type="button"
          className="btn-hipster btn"
          onClick={randomPerson}
        >
          Suprise me
        </button>
      </article>
    </main>
  );
};
export default App;
