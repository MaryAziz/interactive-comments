import '../Everycoment/Everycoment.css';
import Counter from '../Counter/Counter';
import reply from '../../src/assets/icon-reply.svg';
import deleteIcon from '../../src/assets/icon-delete.svg';
import editIcon from '../../src/assets/icon-edit.svg';
import React, { useState } from 'react';

function Everycoment(props) {
    const [isEditing, setIsEditing] = useState(false);
    const [newContent, setNewContent] = useState(props.commentcontent);

    const handleEditChange = (event) => {
        setNewContent(event.target.value);
    };

    const handleEditSubmit = () => {
        props.handleEdit(props.uniqueId, newContent);
        setIsEditing(false);
    };

    return (
        <div className='commentbody'>
            <Counter>{props.Counter} </Counter>
            <div className='user'>
                <div className='profile'>
                    <img className='pic' src={props.Userpic} alt="pic" />
                    <label className="name">{props.username} </label>
                    <label className="time">{props.time}</label>
                    {!props.isNew && (
                        <button className='reply'>
                            <img src={reply} alt="reply" />
                            <label>reply</label>
                        </button>
                    )}
                    {props.isNew && (
                        <>
                           <div id='margin'>
                           <button className='del' onClick={() => props.handleDelete(props.uniqueId)}>
                                <img src={deleteIcon} alt="Delete" />Delete
                            </button>
                            <button className='edit' onClick={() => setIsEditing(true)}>
                                <img src={editIcon} alt="Edit" />Edit
                            </button>
                           </div>
                        </>
                    )}
                </div>
                <div className='content'>
                    {isEditing ? (
                        <>
                            <div id='editarea'>
                            <input id='edittext' value={newContent} onChange={handleEditChange} />
                            <button id='saveedite' onClick={handleEditSubmit}>Save</button>
                            </div>
                        </>
                    ) : (
                        <p>{props.commentcontent}</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Everycoment;
