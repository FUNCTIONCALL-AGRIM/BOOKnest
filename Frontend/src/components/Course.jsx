import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cards from "./Cards";
function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/book`);
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className="container px-4 mx-auto max-w-screen-2xl md:px-20">
        <div className="items-center justify-center text-center mt-28">
          <h1 className="text-2xl md:text-4xl">
           Welcome, Seeker of{" "}
            <span className="text-pink-500">Knowledge:)</span>
          </h1>
          <p className="mt-12">
             Wander through a carefully curated collection of books where stories,
          skills, and wisdom converge. Each volume invites reflection,
          discovery, and growth of the mind.
          </p>
          <Link to="/">
            <button className="px-4 py-2 mt-6 text-white duration-300 bg-pink-500 rounded-md hover:bg-pink-700">
           Return
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 mt-12 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item._id || item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
