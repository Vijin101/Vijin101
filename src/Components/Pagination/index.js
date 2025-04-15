import React, { useRef, useEffect } from 'react';
import { Pagination, PaginationItem } from '@mui/material';
import './Pagination.css';


const withPagination = (WrappedComponent) => {
    return function WithPaginationComponent({
        data,
        itemsPerPage = 10,
        totalPages,
        setFilter,
        filter,
        loading,
        ...props
    }) {
        const currentPage = filter?.page || 1;
        const previousData = useRef(data);

        useEffect(() => {
            if (data && data.length) {
                previousData.current = data;
            }
        }, [data]);

        const displayData = loading ? previousData.current : data;

        const handlePageChange = (event, page) => {
            setFilter((prevFilter) => ({ ...prevFilter, page }));
        };

        return (
            <div className="with-pagination">
                <WrappedComponent data={displayData} loading={loading} {...props} />
                {!loading && displayData?.length > 0 && (
                    <div className="pagination-wrapper">
                        <div className="pagination-info">
                            Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
                            {Math.min(currentPage * itemsPerPage, displayData.length)} of{" "}
                            {displayData.length} entries
                        </div>
                        <Pagination
                            count={totalPages}
                            page={currentPage}
                            onChange={handlePageChange}
                            variant="outlined"
                            shape="rounded"
                            color="primary"
                            renderItem={(item) => <PaginationItem {...item} />}
                        />
                    </div>
                )}
            </div>
        );
    };
};
export default withPagination;
