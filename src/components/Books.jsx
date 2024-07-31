import React, { useState } from "react";
import Book from "./Book";
import SearchFilter from "./SearchFilter";
import "./style.css";

const Books = () => {
  const generateRandomDate = () => {
    const today = new Date();
    const randomDays = Math.floor(Math.random() * 30) + 1;
    today.setDate(today.getDate() + randomDays);
    return today.toISOString().split("T")[0];
  };

  const initialBooks = [
    {
      title: "The Lord of the Rings",
      author: "John",
      dueDate: generateRandomDate(),
      status: "Checked Out",
    },
    {
      title: "The Hobbit",
      author: "Jane",
      dueDate: generateRandomDate(),
      status: "Checked Out",
    },
    {
      title: "Harry Potter and the Sorcerer's Stone",
      author: "Mike",
      dueDate: generateRandomDate(),
      status: "Checked Out",
    },
    {
      title: "The Hunger Games",
      author: "Lisa",
      dueDate: generateRandomDate(),
      status: "Checked Out",
    },
    {
      title: "Twilight",
      author: "Gian",
      dueDate: generateRandomDate(),
      status: "Checked Out",
    },
    {
      title: "The Maze Runner",
      author: "Heinrich",
      dueDate: generateRandomDate(),
      status: "Checked Out",
    },
    {
      title: "The Fault in Our Stars",
      author: "Ryan",
      dueDate: "",
      status: "Available",
    },
    {
      title: "The Perks of Being a Wallflower",
      author: "Ernest",
      dueDate: "",
      status: "Available",
    },
    {
      title: "Where the Crawdads Sing",
      author: "Creshell",
      dueDate: "",
      status: "Available",
    },
    {
      title: "Little Fires Everywhere",
      author: "Maria Ana",
      dueDate: "",
      status: "Available",
    },
  ];

  const [books, setBooks] = useState(initialBooks);
  const [filteredBooks, setFilteredBooks] = useState(initialBooks);

  const toggleStatus = (index) => {
    const newBooks = [...books];
    if (newBooks[index].status === "Checked Out") {
      newBooks[index].status = "Available";
      newBooks[index].dueDate = "";
    } else {
      newBooks[index].status = "Checked Out";
      newBooks[index].dueDate = generateRandomDate();
    }
    setBooks(newBooks);
    setFilteredBooks(newBooks);
  };

  return (
    <div>
      <h2>Books</h2>
      <div className="search-container">
        <SearchFilter books={books} setFilteredBooks={setFilteredBooks} />
      </div>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Title</th>
            <th>Author</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map((book, index) => (
            <Book
              key={index}
              index={index}
              book={book}
              toggleStatus={toggleStatus}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Books;
