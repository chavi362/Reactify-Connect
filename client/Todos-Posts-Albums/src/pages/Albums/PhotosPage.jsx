
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PhotosList from '../../components/Photos/PhotosList';
import Pagination from '../../components/Pagination/Pagination';
import api from '../../Api';
import { Modal, Button } from 'react-bootstrap';
import WithLoader from '../../components/WithLoader';
import UpdatePhotoForm from '../../components/Photos/UpdatePhotoForm';
import { FaPlusSquare } from 'react-icons/fa';

const PhotosPage = () => {
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [selectedPhotoForUpdate, setSelectedPhotoForUpdate] = useState(null);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const albumId = queryParams.get('albumId');
    const perPage = 12;
    const [page, setPage] = useState(1);
    const [photos, setPhotos] = useState([]);
    const [prevPage, setPrevPage] = useState(false);
    const [nextPage, setNextPage] = useState(false);
    const [loading, setLoading] = useState(true);
    const [isAdding, setIsAdding] = useState(false);

    const fetchData = async () => {
        try {
            const response = await api.get(`photos?albumId=${albumId}&_page=${page}&_limit=${perPage}`);
            setPhotos(response.data);
            pagination(response.headers.link);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [albumId, page, perPage]);

    const deletePhoto = async (photoIdToDelete) => {
        try {
            setLoading(true);
            await api.delete(`/photos/${photoIdToDelete}`);
            setPhotos((prevPhotos) => prevPhotos.filter((photo) => photo.id !== photoIdToDelete));
            console.log(`Deleted photo with ID ${photoIdToDelete}`);
        } catch (error) {
            console.error('Error deleting photo:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleCloseUpdateModal = () => {
        setShowUpdateModal(false);
        setSelectedPhotoForUpdate(null);
        setIsAdding(false);
    };

    const handleOpenUpdateModal = (photoForUpdate) => {
        setSelectedPhotoForUpdate(photoForUpdate);
        setShowUpdateModal(true);
    };

    const handleOpenAddPhoto = () => {
        setIsAdding(true);
        setShowUpdateModal(true);
    };
    const handleUpdatePhoto = async (updatedPhoto) => {//ask if it good naming
        try {
            setLoading(true);
            const dbPhoto={...updatedPhoto,url:updatedPhoto.thumbnailUrl};
            if (isAdding) {
                await api.post('/photos', dbPhoto);
            } else {
                await api.put(`photos/${dbPhoto.id}`,dbPhoto);
            }
            fetchData();
            console.log(`successfullyphoto with ID ${dbPhoto.id}`);
        } catch (error) {
            console.error('Error updating photo:', error);
        } finally {
            setLoading(false);
            handleCloseUpdateModal(); // Close the modal after updating or adding
        }
    };

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

    const loadNextPage = () => {
        setPage(page + 1);
    };

    const loadPrevPage = () => {
        setPage(page - 1);
    };

    const PhotosListWithLoader = WithLoader(PhotosList);
    const PaginationWithLoader = WithLoader(Pagination);

    return (
        <main>
            <div className="titleBar">
                <h1 className="heading1">Album: {albumId}</h1>
                <button onClick={handleOpenAddPhoto}>
                    <FaPlusSquare /> Add new image
                </button>
            </div>
            <div className="photosPage">
                <PhotosListWithLoader loading={loading} photos={photos} handleUpdateClick={handleOpenUpdateModal} deletePhoto={deletePhoto} />
                <PaginationWithLoader loading={loading} isNext={nextPage} isPrev={prevPage} current={page} nextPage={loadNextPage} prevPage={loadPrevPage} />
                <Modal show={showUpdateModal} onHide={handleCloseUpdateModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>{isAdding ? 'Add New Photo' : 'Update Photo'}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {(isAdding || (selectedPhotoForUpdate) )&& (
                            <UpdatePhotoForm
                                photo={isAdding ? { title: "", thumbnailUrl: "" } : selectedPhotoForUpdate}
                                onUpdate={handleUpdatePhoto}
                                onClose={handleCloseUpdateModal}
                            />
                        )}
                    </Modal.Body>
                </Modal>
            </div>
        </main>
    );
};

export default PhotosPage;
