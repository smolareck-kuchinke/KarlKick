package com.karlkick.leaderboardservice.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.time.Instant;

@Entity
public class LeaderboardUpdate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Instant receivedAt;

    protected LeaderboardUpdate() {
    }

    public LeaderboardUpdate(Instant receivedAt) {
        this.receivedAt = receivedAt;
    }

    public Long getId() {
        return id;
    }

    public Instant getReceivedAt() {
        return receivedAt;
    }

}
