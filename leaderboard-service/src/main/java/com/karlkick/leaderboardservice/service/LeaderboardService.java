package com.karlkick.leaderboardservice.service;

import com.karlkick.leaderboardservice.model.LeaderboardUpdate;
import com.karlkick.leaderboardservice.repository.LeaderboardUpdateRepository;
import org.springframework.stereotype.Service;

import java.time.Instant;

@Service
public class LeaderboardService {

    private final LeaderboardUpdateRepository leaderboardUpdateRepository;

    public LeaderboardService(LeaderboardUpdateRepository leaderboardUpdateRepository) {
        this.leaderboardUpdateRepository = leaderboardUpdateRepository;
    }

    public void recordUpdate() {
        leaderboardUpdateRepository.save(new LeaderboardUpdate(Instant.now()));
    }

}
