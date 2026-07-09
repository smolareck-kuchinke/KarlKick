package com.karlkick.leaderboardservice.controller;

import com.karlkick.leaderboardservice.service.LeaderboardService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LeaderboardController {

    private final LeaderboardService leaderboardService;

    public LeaderboardController(LeaderboardService leaderboardService) {
        this.leaderboardService = leaderboardService;
    }

    @PostMapping("/updateLeaderboard")
    public ResponseEntity<Void> updateLeaderboard() {
        System.out.println("Leaderboard update received.");
        leaderboardService.recordUpdate();
        return ResponseEntity.ok().build();
    }

}
