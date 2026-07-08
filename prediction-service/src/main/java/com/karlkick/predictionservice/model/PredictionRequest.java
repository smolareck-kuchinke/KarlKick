package com.karlkick.predictionservice.model;

public record PredictionRequest(Long matchId, int homeGoals, int awayGoals) {
}
