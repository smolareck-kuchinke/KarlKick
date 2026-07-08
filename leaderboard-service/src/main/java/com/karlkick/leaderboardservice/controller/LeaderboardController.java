package com.karlkick.leaderboardservice.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LeaderboardController {

    @PostMapping("/updateLeaderboard")
    public ResponseEntity<Void> updateLeaderboard() {
        System.out.println("Leaderboard update received.");
        return ResponseEntity.ok().build();
    }

}
