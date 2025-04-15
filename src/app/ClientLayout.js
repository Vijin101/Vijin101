"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Roboto } from "next/font/google";
import LayoutContextProvider from "../context/LayoutContext";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import CustomCursor from "../Components/CustomeCursor/CustomCursor";
import LoadingLineReveal from "../Components/Loading/LoadingLineReveal";
import FloatingContactButtons from "../Components/Buttons/FloatingContactButtons";
import PageScrollUpButton from "../Components/Buttons/ScrollUp/PageScrollUpButton";
import ReactQueryProvider from "../context/ReactQueryProvider";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./globals.css";
import { useAuthStore } from "../store";



export default function ClientLayout({ children }) {
    const pathname = usePathname();
    const isAuthOrDashboard = pathname.startsWith("/auth") || pathname.startsWith("/dashboard");

    const { initializeAuth, isLoading } = useAuthStore.getState();

    useEffect(() => {
        initializeAuth();
    }, []);

    const theme = createTheme()

    return (

        <ThemeProvider theme={theme}>
            <ReactQueryProvider>
                <LayoutContextProvider>
                    <LoadingLineReveal delay={0.5}>
                        {!isAuthOrDashboard && <Header />}
                        <CustomCursor />
                        {children}
                        {!isAuthOrDashboard && <FloatingContactButtons />}
                        {!isAuthOrDashboard && <PageScrollUpButton />}
                        {!isAuthOrDashboard && <Footer />}
                    </LoadingLineReveal>
                </LayoutContextProvider>
            </ReactQueryProvider>
        </ThemeProvider>

    );
}
