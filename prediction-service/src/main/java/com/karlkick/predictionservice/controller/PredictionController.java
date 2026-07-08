package com.karlkick.predictionservice.controller;

import com.karlkick.predictionservice.model.PredictionRequest;
import com.karlkick.predictionservice.service.PredictionService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PredictionController {

    private final PredictionService predictionService;

    public PredictionController(PredictionService predictionService) {
        this.predictionService = predictionService;
    }

    @PostMapping("/predictions")
    public ResponseEntity<Void> submitPrediction(@RequestBody PredictionRequest request) {
        predictionService.notifyLeaderboard(request);
        return ResponseEntity.ok().build();
    }

}
