package com.karlkick.predictionservice.service;

import com.karlkick.predictionservice.model.PredictionRequest;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

@Service
public class PredictionService {

    private final RestClient leaderboardClient;

    public PredictionService(RestClient.Builder restClientBuilder) {
        this.leaderboardClient = restClientBuilder
                .baseUrl("http://localhost:8082")
                .build();
    }

    public void notifyLeaderboard(PredictionRequest request) {
        leaderboardClient.post()
                .uri("/updateLeaderboard")
                .contentType(MediaType.APPLICATION_JSON)
                .body(request)
                .retrieve()
                .toBodilessEntity();
    }

}
