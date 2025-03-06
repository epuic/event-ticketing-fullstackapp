package com.bogdan.service;

import com.bogdan.dto.EventReqRes;
import com.bogdan.entity.Event;
import com.bogdan.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EventServiceImpl{

    @Autowired
    private EventRepository eventRepository;

    public EventReqRes addEvent(Event event) {
        EventReqRes response = new EventReqRes();
        try {
            Event savedEvent = eventRepository.save(event);
            response.setStatusCode(200);
            response.setMessage("Event added successfully");
            response.setEvent(savedEvent);
        } catch (Exception e) {
            response.setStatusCode(500);
            response.setMessage("Error occurred: " + e.getMessage());
        }
        return response;
    }

    public EventReqRes getAllEvents() {
        EventReqRes response = new EventReqRes();
        try {
            List<Event> events = eventRepository.findAll();
            if (!events.isEmpty()) {
                response.setEventList(events);
                response.setStatusCode(200);
                response.setMessage("Events retrieved successfully");
            } else {
                response.setStatusCode(404);
                response.setMessage("No events found");
            }
        } catch (Exception e) {
            response.setStatusCode(500);
            response.setMessage("Error occurred: " + e.getMessage());
        }
        return response;
    }

    public EventReqRes deleteEvent(Long eventId) {
        EventReqRes response = new EventReqRes();
        try {
            Optional<Event> event = eventRepository.findById(eventId);
            if (event.isPresent()) {
                eventRepository.deleteById(eventId);
                response.setStatusCode(200);
                response.setMessage("Event deleted successfully");
            } else {
                response.setStatusCode(404);
                response.setMessage("Event not found");
            }
        } catch (Exception e) {
            response.setStatusCode(500);
            response.setMessage("Error occurred: " + e.getMessage());
        }
        return response;
    }

    public EventReqRes getEventById(Long id) {
        EventReqRes eventReqRes = new EventReqRes();
        try {
            Event eventById = eventRepository.findById(id).orElseThrow(() -> new RuntimeException("User Not found"));
            eventReqRes.setEvent(eventById);
            eventReqRes.setStatusCode(200);
            eventReqRes.setMessage("Event with id '" + id + "' found successfully");
        } catch (Exception e) {
            eventReqRes.setStatusCode(500);
            eventReqRes.setMessage("Error occurred: " + e.getMessage());
        }
        return eventReqRes;
    }

    public EventReqRes updateEvent(Long eventId, Event updatedEvent) {
        EventReqRes eventReqRes = new EventReqRes();
        try {
            Optional<Event> eventOptional = eventRepository.findById(eventId);
            if (eventOptional.isPresent()) {
                Event existingEvent = eventOptional.get();
                existingEvent.setDescription(updatedEvent.getDescription());
                existingEvent.setName(updatedEvent.getName());
                existingEvent.setLocation(updatedEvent.getLocation());
                existingEvent.setDateTime(updatedEvent.getDateTime());
                existingEvent.setAvailableTickets(updatedEvent.getAvailableTickets());
                existingEvent.setPrice(updatedEvent.getPrice());
                existingEvent.setImageUrl(updatedEvent.getImageUrl());


                Event savedEvent = eventRepository.save(existingEvent);
                eventReqRes.setEvent(savedEvent);
                eventReqRes.setStatusCode(200);
                eventReqRes.setMessage("Event updated successfully");
            } else {
                eventReqRes.setStatusCode(404);
                eventReqRes.setMessage("Event not found for update");
            }
        } catch (Exception e) {
            eventReqRes.setStatusCode(500);
            eventReqRes.setMessage("Error occurred while updating event: " + e.getMessage());
        }
        return eventReqRes;
    }

    public void buyTicket(Long eventId, int numberOfTickets) {
        Event event = eventRepository.findById(eventId)
                .orElseThrow(() -> new IllegalArgumentException("Event not found"));

        if (event.getAvailableTickets() < numberOfTickets) {
            throw new IllegalArgumentException("Not enough tickets available");
        }

        event.setAvailableTickets(event.getAvailableTickets() - numberOfTickets);

        eventRepository.save(event);
    }

}
