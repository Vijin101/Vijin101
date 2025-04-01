'use client';

import { useMutation } from "@tanstack/react-query";
import { emailVerification } from "../../../service/authService";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Container, Card, Spinner, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const VerifyEmail = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const token = searchParams.get('token');
    const [status, setStatus] = useState({ loading: true, message: '', success: null });

    const { mutate: verifyEmail } = useMutation({
        mutationFn: emailVerification,
        onSuccess: (data) => {
            setStatus({ loading: false, message: 'Email verified successfully!', success: true });
            setTimeout(() => router.push('/dashboard/user'), 2000);
        },
        onError: (error) => {
            setStatus({ loading: false, message: error?.response?.data?.message || 'Email verification failed', success: false });
        },
    });

    useEffect(() => {
        if (token) {
            verifyEmail({ token });
        } else {
            setStatus({ loading: false, message: 'Invalid verification link', success: false });
        }
    }, [token]);

    return (
        <Container className="d-flex justify-content-center align-items-center min-vh-100">
            <Card className="p-4 shadow-lg text-center" style={{ maxWidth: "400px", width: "100%" }}>
                <h1 className="mb-3">Verify Email</h1>
                {status.loading ? (
                    <Spinner animation="border" variant="primary" />
                ) : (
                    <Alert variant={status.success ? "success" : "danger"}>
                        {status.message}
                    </Alert>
                )}
            </Card>
        </Container>
    );
};

export default VerifyEmail;
