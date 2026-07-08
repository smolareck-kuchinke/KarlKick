package com.karlkick.predictionservice.service;

import com.karlkick.predictionservice.model.Prediction;
import com.karlkick.predictionservice.model.PredictionRequest;
import com.karlkick.predictionservice.repository.PredictionRepository;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

@Service
public class PredictionService {

    private final PredictionRepository predictionRepository;
    private final RestClient leaderboardClient;

    public PredictionService(PredictionRepository predictionRepository, RestClient.Builder restClientBuilder) {
        this.predictionRepository = predictionRepository;
        this.leaderboardClient = restClientBuilder
                .baseUrl("http://localhost:8082")
                .build();
    }

    public void submitPrediction(PredictionRequest request) {
        Prediction prediction = new Prediction(request.matchId(), request.homeGoals(), request.awayGoals());
        predictionRepository.save(prediction);

        notifyLeaderboard(request);
    }

    private void notifyLeaderboard(PredictionRequest request) {
        leaderboardClient.post()
                .uri("/updateLeaderboard")
                .contentType(MediaType.APPLICATION_JSON)
                .body(request)
                .retrieve()
                .toBodilessEntity();
    }

}
