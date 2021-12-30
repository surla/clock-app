import { useState, useEffect } from "react";

export default function Quote() {
  const [author, setAuthor] = useState("");
  const [quote, setQuote] = useState("");

  const getRandomQuote = async () => {
    const quote = await fetch(
      "https://programming-quotes-api.herokuapp.com/Quotes/random"
    )
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.log("Error", error);
      });

    setAuthor(quote.author);
    setQuote(quote.en);
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <div>
      <article>
        <div>
          <p>"{quote}"</p>
          <p>{author}</p>
        </div>

        <button onClick={getRandomQuote}>
          {" "}
          <img
            className="w-4 h-4"
            src="/assets/desktop/icon-refresh.svg"
            alt="refresh"
          />
        </button>
      </article>
    </div>
  );
}
