import React, { useEffect, useState } from 'react';
import { Pagination as BootstrapPagination } from 'react-bootstrap';
import './Pagination.css';

const withPagination = (WrappedComponent) => {
    return function WithPaginationComponent({
        data,
        itemsPerPage = 10,
        totalPages,
        setFilter,
        loading,
        ...props
    }) {
        const [currentPage, setCurrentPage] = useState(1);

        // Get current items
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = data

        console.log("Current Page:", currentPage);
        console.log("Current Items:", currentItems);

        // Change page
        const handlePageChange = (pageNumber) => {
            setCurrentPage(pageNumber);
            setFilter((prevFilter) => ({ ...prevFilter, page: pageNumber }));
        };

        // Generate page numbers
        const getPageNumbers = () => {
            const pageNumbers = [];
            const maxVisiblePages = 5;

            if (totalPages <= maxVisiblePages) {
                for (let i = 1; i <= totalPages; i++) {
                    pageNumbers.push(i);
                }
            } else {
                if (currentPage <= 3) {
                    for (let i = 1; i <= 4; i++) {
                        pageNumbers.push(i);
                    }
                    pageNumbers.push('...');
                    pageNumbers.push(totalPages);
                } else if (currentPage >= totalPages - 2) {
                    pageNumbers.push(1);
                    pageNumbers.push('...');
                    for (let i = totalPages - 3; i <= totalPages; i++) {
                        pageNumbers.push(i);
                    }
                } else {
                    pageNumbers.push(1);
                    pageNumbers.push('...');
                    for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                        pageNumbers.push(i);
                    }
                    pageNumbers.push('...');
                    pageNumbers.push(totalPages);
                }
            }

            return pageNumbers;
        };

        const renderPagination = () => {
            const pageNumbers = getPageNumbers();

            return (
                <div className="pagination-wrapper">
                    <div className="pagination-info">
                        Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, data.length)} of {data.length} entries
                    </div>
                    <BootstrapPagination className="custom-pagination">
                        <BootstrapPagination.First
                            onClick={() => handlePageChange(1)}
                            disabled={currentPage === 1}
                        />
                        <BootstrapPagination.Prev
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        />

                        {pageNumbers.map((number, index) => (
                            number === '...' ? (
                                <BootstrapPagination.Ellipsis key={`ellipsis-${index}`} />
                            ) : (
                                <BootstrapPagination.Item
                                    key={number}
                                    active={number === currentPage}
                                    onClick={() => handlePageChange(number)}
                                >
                                    {number}
                                </BootstrapPagination.Item>
                            )
                        ))}

                        <BootstrapPagination.Next
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        />
                        <BootstrapPagination.Last
                            onClick={() => handlePageChange(totalPages)}
                            disabled={currentPage === totalPages}
                        />
                    </BootstrapPagination>
                </div>
            );
        };

        return (
            <div className="with-pagination">

                <WrappedComponent data={currentItems} loading={loading} {...props} />

                {!loading && renderPagination()}


            </div>
        );
    };
};

export default withPagination; 