import React ,{useState} from 'react'
import { FaWindowClose } from 'react-icons/fa';
const updatePotoForm = ({ photo, onClose, onUpdate }) => {
    const [updatedPhoto,setUpdatedPhoto] = useState({ ...photo });
    const handleUpdate = () => {
        // Call the onUpdate function with the updated details
        onUpdate(updatedPhoto);
        onClose();
    };
    const handleChange = (event) => {
        const { name, value } = event.target;
        setUpdatedPhoto((prevUser) => ({
          ...prevUser,
          [name]: value,
        }));
      };
    return (
        <div className="card">
             <img className="card-img-top" src={updatedPhoto.thumbnailUrl}/>
            <div className="card-body">
                <form>
                <input type={text} className="card-text">{props.title} onChange={handleChange}</input>
                <input type={text} className="card-text">{props.thumbnailUrl} onChange={handleChange}</input>
                <button onClick={handleUpdate}>Update</button>
                <button type ="button" onClick={onClose}><FaWindowClose /></button>
                </form>
            </div>
        </div>
    )
}

export default updatePotoForm
