import { useState, useEffect } from "react";
import api from "../Api";

const useGetPaginationData = (urlParam) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [prevPage, setPrevPage] = useState(false);
    const [nextPage, setNextPage] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                const response = await api.get(urlParam);
                setData(response.data);

                const linkHeader = response.headers.link;
                if (linkHeader) {
                    pagination(linkHeader);
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        const pagination = (headers) => {
            const links = headers.split(',');
            const pages = { nextPage: false, prevPage: false };
            links.forEach((link) => {
                const temp = link.split(';');
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
        fetchData();
    }, [urlParam]);
    return [data, error, loading, setLoading, prevPage, setPrevPage,nextPage,setNextPage];
};

export default useGetPaginationData;
