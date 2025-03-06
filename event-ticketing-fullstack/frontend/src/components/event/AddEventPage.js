import React, { useState } from 'react';
import EventService from '../service/EventService';
import { useNavigate } from 'react-router-dom';

function AddEventPage() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        dateTime: '',
        location: '',
        availableTickets: '',
        imageUrl: '',
        price: ''

    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token'); // JWT token
            await EventService.addEvent(formData, token);


            setFormData({
                name: '',
                description: '',
                dateTime: '',
                location: '',
                availableTickets: '',
                imageUrl: '',
                price: ''
            });
            alert('Event added successfully');
            navigate('/admin/events');
        } catch (error) {
            console.error('Error adding event:', error);
            alert('An error occurred while adding the event');
        }
    };

    return (
        <div className="auth-container">
            <h2>Add Event</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Event Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Date and Time:</label>
                    <input
                        type="datetime-local"
                        name="dateTime"
                        value={formData.dateTime}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Location:</label>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Available Tickets:</label>
                    <input
                        type="number"
                        name="availableTickets"
                        value={formData.availableTickets}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Imagine Url:</label>
                    <input
                        type="text"
                        name="imageUrl"
                        value={formData.imageUrl}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Price:</label>
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit">Add Event</button>
            </form>
        </div>
    );
}

export default AddEventPage;
