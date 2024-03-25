// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const Cards = ({ title, about, previewLink, thumbnail, authors }) => {
    return (
        <div className="card w-full sm:w-96 bg-base-100 shadow-xl">
            <figure className="w-full h-48 sm:h-auto">
                <img
                    src={thumbnail}
                    alt={title}
                    className="object-cover w-full h-full"
                />
            </figure>
            <div className="card-body p-4">
                <h2 className="card-title text-lg font-semibold mb-2">
                    {title}
                    {authors && (
                        <div className="badge badge-secondary ml-2">{authors}</div>
                    )}
                </h2>
                <p className="text-sm text-white-600 line-clamp-3">{about}</p>
                <div className="card-actions justify-end mt-2">
                    <a className="btn btn-outline" href={previewLink}>Read more</a>
                </div>
            </div>
        </div>
    );
};

export default Cards;
