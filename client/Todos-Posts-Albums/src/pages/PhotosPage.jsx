
import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import PhotosList from '../components/Photos/PhotosList';
import Pagination from '../components/Pagination';
import api from '../Api';
import { Modal } from 'react-bootstrap';
import WithLoader from '../components/WithLoader';
import UpdatePhotoForm from '../components/Photos/UpdatePhotoForm';
import { FaPlusSquare } from 'react-icons/fa';
import useGetPaginationData from '../hooks/useGetPaginationData';
const PhotosPage = () => {
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [selectedPhotoForUpdate, setSelectedPhotoForUpdate] = useState(null);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const albumId = queryParams.get('albumId');
    const perPage = 12;
    const [page, setPage] = useState(1);
    const [photos, setPhotos] = useState([]);
    const [isAdding, setIsAdding] = useState(false);
    const lastFetchedPhotos = useRef([]);
    const [data, error, loading, setLoading, prevPage, setPrevPage, nextPage, setNextPage] = useGetPaginationData(`photos?albumId=${albumId}&_page=${page}&_limit=${perPage}`);
    useEffect(() => {
        if (error) {
            console.error('Error fetching photos:', error);
        } else if (data) {
            lastFetchedPhotos.current = data.slice(-3);
            setPhotos(data);
        }
    }, [data, error]);
    const deletePhoto = async (photoIdToDelete) => {
        try {
            setLoading(true);
            await api.delete(`/photos/${photoIdToDelete}`);
    
            setPhotos((prevPhotos) => {
                const deletedPhotoIndex = prevPhotos.findIndex((photo) => photo.id === photoIdToDelete);
                const replacementPhoto = lastFetchedPhotos.current.shift();
                const updatedPhotos = [...prevPhotos];
                updatedPhotos.splice(deletedPhotoIndex, 1, replacementPhoto);
                return updatedPhotos;
            });
    
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
            const dbPhoto = { ...updatedPhoto, albumId: albumId, url: updatedPhoto.thumbnailUrl };
            if (isAdding) {
                await api.post('/photos', dbPhoto);
            } else {
                await api.put(`photos/${dbPhoto.id}`, dbPhoto);
            }
            console.log(`successfullyphoto with ID ${dbPhoto.id}`);
            setPhotos((prevPhotos) =>
                prevPhotos.map((photo) =>
                    photo.id === dbPhoto.id ? { ...dbPhoto } : photo
                ));
        } catch (error) {
            console.error('Error updating photo:', error);
        } finally {
            setLoading(false);
            handleCloseUpdateModal();
        }
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
                        {(isAdding || (selectedPhotoForUpdate)) && (
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
