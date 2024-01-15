import { useState, useEffect } from "react";
import api from "../Api";


const useGetData = (urlParam) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [prevPage, setPrevPage] = useState(false);
    const [nextPage, setNextPage] = useState(false);
    const pagination = (headers) => {
        const links = headers.split(',');

        // State representation of pages availability
        const pages = { nextPage: false, prevPage: false };
        links.forEach((link) => {
            const temp = link.split(';');
            // Switching on link.rel
            switch (temp[1].replace(/\s/g, '')) {
                case 'rel="next"':
                    pages.nextPage = true;
                    break;
                case 'rel="prev"':
                    pages.prevPage = true;
                    break;
                default:
                    break;
            }
        });
        setNextPage(pages.nextPage);
        setPrevPage(pages.prevPage);
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true); // Set loading to true before making the request
                const response = await api.get(urlParam);
                setData(response.data);
            } catch (error) {
                setError(error.message);
                pagination(response.headers.link);
            } finally {
                setLoading(false); // Set loading to false regardless of success or error
            }
        };

        fetchData();
    }, [urlParam]);

    // Expose loading state and a function to set loading externally
    return [data, error, loading, setLoading];
};

export default useGetData;
