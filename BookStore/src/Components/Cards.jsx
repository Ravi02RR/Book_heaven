// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Cards = ({ title, about, thumbnail, authors, previewLink }) => {

    const dynamicPreviewLink = `${previewLink}&output=embed`;

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
                        <div className="badge badge-secondary ml-2" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{authors}</div>
                    )}
                </h2>
                <p className="text-sm text-white-600 line-clamp-3">{about}</p>
                <div className="card-actions justify-end mt-2">

                    <Link className="btn btn-outline" to={dynamicPreviewLink}>Read Book</Link>
                </div>
            </div>
        </div>
    );
};

export default Cards;
