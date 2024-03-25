// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from '../Components/Cards';
import Skeleton from '../Components/Skeleton';

function Books() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');
    const itemsPerPage = 3;

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`);
                setBooks(response.data.items);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching books:', error);
                setLoading(false);
            }
        };

        fetchBooks();
    }, [searchQuery]);

    const totalItems = books.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage);
    };

    const startIndex = currentPage * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
    const displayedBooks = books.slice(startIndex, endIndex);

    const handleSearch = async (query) => {
        setSearchQuery(query);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-4"> Search Book</h1>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search for books..."
                    className="w-full p-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-green-400"
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {loading ? (
                    <>
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                    </>
                ) : (
                    displayedBooks.map((book) => (
                        <Cards
                            key={book.id}
                            title={book.volumeInfo.title}
                            about={book.volumeInfo.description}
                            thumbnail={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ''}
                            previewLink={book.volumeInfo.previewLink}
                            authors={book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : ''}
                        />
                    ))
                )}
            </div>
            <div className="flex justify-center mt-4">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index)}
                        className={`mx-1 px-4 py-2 bg-green-100 text-black rounded-lg shadow-sm hover:bg-green-200 focus:outline-none focus:ring focus:ring-green-200 ${currentPage === index ? 'bg-green-400' : ''}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Books;
