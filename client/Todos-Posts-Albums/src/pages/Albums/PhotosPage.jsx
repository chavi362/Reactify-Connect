import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import PhotoList from '../../components/Photos/PhotoList';
import PhotoFullSize from '../../components/Photos/PhotoFullSize';
import Pagination from '../../components/Pagination/Pagination';
import api from '../../Api';
import { Modal, Button, Form } from 'react-bootstrap';
import UpdatePhotoForm from '../../components/Photos/UpdatePhotoForm';

const PhotosPage = () => {
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [selectedPhotoForUpdate, setSelectedPhotoForUpdate] = useState(null);
    const location = useLocation();//ask vesily if it's correct way to sent thing from page to page
    const queryParams = new URLSearchParams(location.search);
    const albumId = queryParams.get('albumId');
    const perPage = 12;
    const [page, setPage] = useState(1);
    const [photos, setPhotos] = useState([]);
    const [prevPage, setPrevPage] = useState(false);
    const [nextPage, setNextPage] = useState(false);
    const [loading, setLoading] = useState(true);
    const [imgFullSize, setImgFullSize] = useState(false);
    const [fullSizeURL, setFullSizeURL] = useState(null);
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
            setLoading(true)
            debugger;
            await api.delete(`/photos/${photoIdToDelete}`);
            setPhotos((prevTodos) => prevTodos.filter((todo) => todo.id !== photoIdToDelete));
            console.log(`Deleted photo with ID ${photoIdToDelete}`);
        } catch (error) {
            console.error('Error deleting photo:', error);
        }
        finally {
            setLoading(false);
        }
    };

    const displayFullSize = (url) => {
        setImgFullSize(true);
        setFullSizeURL(url);
    };
    const handleCloseUpdateModal = () => {
        setShowUpdateModal(false);
    };
    const handleOpenUpdateModal = (photoForUpdate) => {
        setSelectedPhotoForUpdate(photoForUpdate)
        setShowUpdateModal(true);

    }
    const handleUpdatePhoto = async (updatedPhoto) => {
        console.log('Updated Photo:', updatedPhoto);
        try {
          setLoading(true);
          await api.put(`photos/${updatedPhoto.id}`, updatedPhoto);
          setPhotos((prevPhotos) =>
            prevPhotos.map((photo) =>
              photo.id === updatedPhoto.id ? { ...updatedPhoto } : photo
            )
          );
          console.log(`Updated photo with ID ${updatedPhoto.id}`);
        } catch (error) {
          console.error('Error updating photo:', error);
        } finally {
          setLoading(false);
          handleCloseUpdateModal(); // Close the modal after updating
        }
      };

const closeFullSize = () => {
    setImgFullSize(false);
    setFullSizeURL(null);
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

return (
    <main>
        <div className="titleBar">
            <h1 className="heading1">Album: {/* You need to fetch album data or provide it from somewhere */}</h1>
            <Link className="closeBtn" to='/'>Close X</Link>
        </div>
        {loading ? (
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        ) : (
            <div className="photosPage">
                <PhotoList photos={photos} handleUpdateClick={handleOpenUpdateModal} photoClick={displayFullSize} deletePhoto={deletePhoto} />
                {/* <PhotoFullSize show={imgFullSize} url={fullSizeURL} close={closeFullSize} /> */}
                <Pagination isNext={nextPage} isPrev={prevPage} current={page} nextPage={loadNextPage} prevPage={loadPrevPage} />
                <Modal show={showUpdateModal} onHide={handleCloseUpdateModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Photo</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {selectedPhotoForUpdate && (
                            <UpdatePhotoForm photo={selectedPhotoForUpdate} onUpdate={handleUpdatePhoto} />
                        )}
                    </Modal.Body>
                </Modal>
            </div>
        )}

    </main>
);
};

export default PhotosPage;
