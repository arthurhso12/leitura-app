import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/books")
      .then(res => setBooks(res.data));
  }, []);

  return (
    <div className="bg-gray-950 text-white min-h-screen p-4">
      <h1 className="text-2xl text-purple-500">Recomendações</h1>

      <div className="grid grid-cols-3 gap-4">
        {books.map(book => (
          <div key={book._id} className="bg-gray-800 p-3 rounded">
            <img src={book.cover} />
            <h2>{book.title}</h2>
            <p>{book.description}</p>
            <span>{book.pages} páginas</span>
          </div>
        ))}
      </div>
    </div>
  );
}