import { Suspense } from 'react';
import VerifyEmailPage from './VerifyEmailPage'; // Your client component that uses useSearchParams

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <VerifyEmailPage />
        </Suspense>
    );
}
