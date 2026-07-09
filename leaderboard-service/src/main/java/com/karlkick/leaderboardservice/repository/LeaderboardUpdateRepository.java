package com.karlkick.leaderboardservice.repository;

import com.karlkick.leaderboardservice.model.LeaderboardUpdate;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LeaderboardUpdateRepository extends JpaRepository<LeaderboardUpdate, Long> {
}
