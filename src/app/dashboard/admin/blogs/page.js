'use client';

import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import withPagination from '../../../../Components/Pagination';
import './blogPage.css';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useLayout } from '../../../../context/LayoutContext';
import DashboardHeader from '../../../../Components/Header/DashboardHeader/DashboardHeader';
import { FaPlus } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import BlogList from './BlogList';
import withStatusTabs from '../../../../Components/Tab/withStatusTabs';
import { useBlogStore } from '../../../../store';
import useBlogs from '../../../../hooks/useBlogs';
import { createBlogApi } from '../../../../service/blogService';

const tabConfig = [
    { label: 'All', value: "" },
    { label: 'Published', value: '2' },
    { label: 'Draft', value: '3' },
    { label: 'Review', value: '1' },
    { label: 'Rejected', value: '4' },
];


const BlogsPage = () => {
    const router = useRouter();
    const { setPage, setLimit, setStatus, setSearch } = useBlogStore()
    const { data, isLoading } = useBlogs();
    const [filter, setFilter] = useState({
        page: 1,
        limit: 1,
        search: "", // Avoid `null`, use an empty string
        status: "",
    });

    useEffect(() => {
        setStatus(filter.status);
        setPage(filter.page);
        setLimit(filter.limit);
        setSearch(filter.search);
    }, [filter])


    const handleDrawer = () => {
        router.push('/dashboard/admin/blogs/create-blog')
    }

    const handleTabChange = (status) => {
        setFilter({ ...filter, status });
    }

    const PaginatedBlogListWithTabs = withPagination(
        withStatusTabs(BlogList, tabConfig, filter.status, {
            size: 'medium',
            color: 'primary',
        }, handleTabChange)
    );

    return (
        <Container fluid className="blog-management py-4">
            <DashboardHeader
                title="Blog Management"
                isButton={true}
                onClick={() => handleDrawer(null, "add")}
                icon={<FaPlus />}
                label="Add New Blog"
            />
            <PaginatedBlogListWithTabs
                data={data?.data?.blogs || []}
                loading={isLoading}
                filter={filter}
                setFilter={setFilter}
                itemsPerPage={filter.limit}
                totalPages={data?.data?.totalPages || 0}
            />
        </Container>
    );
}

export default BlogsPage;