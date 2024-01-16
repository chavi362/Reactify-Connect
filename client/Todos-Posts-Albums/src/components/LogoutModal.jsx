
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const LogoutModal = ({ deleteUser, closeModal }) => {
  const navigate=useNavigate();
  const logout=()=>{
    deleteUser()
    navigate('/login');
    closeModal();
  }
  return (
    <Modal show={true} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Are you sure you want to log out?</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Close
        </Button>
        <Button variant="primary" onClick={() => { logout();}}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LogoutModal;
