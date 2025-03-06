package com.bogdan.controller;


import com.bogdan.dto.EventReqRes;
import com.bogdan.service.EventServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/events")
public class EventUserController {
    @Autowired
    private EventServiceImpl eventService;

    @GetMapping("/all")
    public ResponseEntity<EventReqRes> getAllEvents() {
        return ResponseEntity.ok(eventService.getAllEvents());
    }

    @PostMapping("/{id}/buy")
    public ResponseEntity<String> buyTicket(@PathVariable Long id, @RequestParam int numberOfTickets) {
        try {
            eventService.buyTicket(id, numberOfTickets);
            return ResponseEntity.ok("Tickets purchased successfully!");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }



}
