import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import EventService from '../service/EventService';
import './EventManagement.css'

function EventManagementPage() {
    const [event, setEvent] = useState([]);

    useEffect(() => {

        fetchEvent();
    }, []);

    const fetchEvent = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await EventService.getAllEvents(token);

            setEvent(response.eventList);
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };

    const deleteEvent = async (eventId) => {
        try {

            const confirmDelete = window.confirm('Are you sure you want to delete this event?');

            const token = localStorage.getItem('token'); // Retrieve the token from localStorage
            if (confirmDelete) {
                await EventService.deleteEvent(eventId, token);
                fetchEvent();
            }
        } catch (error) {
            console.error('Error deleting event:', error);
        }
    };

    return (
        <div className="user-management-container">
            <button className='reg-button'> <Link to="/add-event">ADD EVENTS</Link></button>
            <h2>Event Management Page</h2>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Ticket Available</th>
                    <th>Price</th>
                    <th>Image Url</th>
                </tr>
                </thead>
                <tbody>
                {event.map(event => (
                    <tr key={event.id}>
                        <td>{event.id}</td>
                        <td>{event.name}</td>
                        <td>{event.location}</td>
                        <td>{event.description}</td>
                        <td>{event.dateTime}</td>
                        <td>{event.availableTickets}</td>
                        <td>{event.price}</td>
                        <td>{event.imageUrl}</td>

                        <td>
                            <button className='delete-button' onClick={() => deleteEvent(event.id)}>Delete</button>
                            <button><Link to={`/update-event/${event.id}`}>
                                Update
                            </Link>
                            </button>
                        </td>

                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default EventManagementPage;