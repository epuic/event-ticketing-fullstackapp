package com.bogdan.controller;


import com.bogdan.entity.Event;
import com.bogdan.dto.EventReqRes;
import com.bogdan.service.EventServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/admin/events")
public class EventAdminController {
    @Autowired
    private EventServiceImpl eventService;

    @PostMapping
    public ResponseEntity<EventReqRes> addEvent(@RequestBody Event event) {
        return ResponseEntity.ok(eventService.addEvent(event));
    }

    @GetMapping("/all")
    public ResponseEntity<EventReqRes> getAllEvents() {
            return ResponseEntity.ok(eventService.getAllEvents());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<EventReqRes> deleteEvent (@PathVariable Long id) {
        return ResponseEntity.ok(eventService.deleteEvent(id));
    }

    @GetMapping("/get-events/{id}")
    public ResponseEntity<EventReqRes> getEventByID(@PathVariable Long id){
        return ResponseEntity.ok(eventService.getEventById(id));
    }

    @PutMapping("/update/{eventId}")
    public ResponseEntity<EventReqRes> updateEvent (@PathVariable Long eventId, @RequestBody Event eventres){
        return ResponseEntity.ok(eventService.updateEvent(eventId, eventres));
    }

}
