"use client"
import React, { useState, useEffect } from 'react';
import { Container, Grid, Box, Stack, Pagination } from '@mui/material';
import styles from './products.module.css'
import ProductCard from '@/components/shop/ProductCard'

import { useSelector, useDispatch } from "react-redux";
import { setApiResponse } from "@/redux/features/product"
import axios from 'axios';

const Home = () => {
    const dispatch = useDispatch();
    const productsRoute = useSelector((state) => state.routes.productsRoute);
    const [productsList, setProductsList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(productsRoute);
                const apiResponseData = response.data;
                setApiResponse(apiResponseData);
                setProductsList(apiResponseData);
                dispatch(setApiResponse(apiResponseData));
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [dispatch]);

    // pagination code
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;
    const totalPages = Math.ceil(productsList.length / productsPerPage);

    // Function to get the products for the current page
    const getCurrentPageProducts = () => {
        const startIndex = (currentPage - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        return productsList.slice(startIndex, endIndex);
    };

    const handlePageChange = (event, newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <Container maxWidth="xl" className={styles.container}>
            <Grid container>
                {getCurrentPageProducts().map((product) => {
                    return (
                        <Grid item key={product._id} xl={3} md={4} sm={6} xs={12} paddingY={2} sx={{ display: "flex", alignItems: "center", justifyContent: 'center' }}>
                            <ProductCard product={product} />
                        </Grid>
                    );
                })}
            </Grid>
            <Box paddingY={1} className={styles.paginationBox}>
                <Stack spacing={2}>
                    <Pagination count={totalPages} shape="rounded" page={currentPage} onChange={handlePageChange} />
                </Stack>
            </Box>
        </Container>
    );
};

export default Home;