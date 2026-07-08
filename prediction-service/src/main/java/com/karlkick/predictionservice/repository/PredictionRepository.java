package com.karlkick.predictionservice.repository;

import com.karlkick.predictionservice.model.Prediction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PredictionRepository extends JpaRepository<Prediction, Long> {
}
