export const dynamic = 'force-dynamic';

import BlogViewer from '../../../../../Components/BlogViewer/BlogViewer';

export default async function BlogViewPage({ params }) {
    const { slug } = await params;
    return <BlogViewer slug={slug} />;
}