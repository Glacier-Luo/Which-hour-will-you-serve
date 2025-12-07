import type { Aspect } from '../types';
import { type Hour, HOURS_DATA } from '../data/hours';
import { ASPECT_JUDGMENTS, SPECIAL_COMBINATIONS, type Judgment } from '../data/results';

export const calculateHourMatch = (scores: Record<Aspect, number>): Hour => {
  let bestHour = HOURS_DATA[0];
  let maxScore = -Infinity;

  // Find max user score to determine significance threshold
  const maxUserScore = Math.max(...Object.values(scores), 1);
  const SIGNIFICANCE_THRESHOLD = 0.2; // Aspect must be 20% of max score to count for synergy

  for (const hour of HOURS_DATA) {
    if (hour.aspects.length === 0) continue;

    let rawScore = 0;
    let significantMatchCount = 0;
    
    hour.aspects.forEach((aspect, index) => {
      const userScore = scores[aspect] || 0;
      
      // Optimized Weighting:
      // Primary aspect is crucial (1.0).
      // Secondary aspects provide support but shouldn't override a mismatch in primary.
      // Weights: 1.0, 0.6, 0.36...
      const weight = Math.pow(0.6, index);
      
      rawScore += userScore * weight;
      
      // Only count for synergy if the score is significant relative to the user's best aspect
      if (userScore >= maxUserScore * SIGNIFICANCE_THRESHOLD) {
        significantMatchCount++;
      }
    });
    
    // Synergy Bonus:
    // If the user matches multiple aspects of the Hour SIGNIFICANTLY, they are a better fit.
    let synergyMultiplier = 1.0;
    if (hour.aspects.length > 1 && significantMatchCount > 1) {
        synergyMultiplier = 1.1 + (significantMatchCount * 0.05); 
    }

    // Penalty:
    // If the user has NO affinity for the Hour's primary aspect, 
    // it's very unlikely to be their patron Hour.
    if ((scores[hour.aspects[0]] || 0) === 0) {
        synergyMultiplier *= 0.5;
    }

    // Normalization:
    // Slightly increased penalty for complexity to favor pure matches when appropriate
    const finalScore = (rawScore * synergyMultiplier) / Math.pow(hour.aspects.length, 0.35);
    
    if (finalScore > maxScore) {
      maxScore = finalScore;
      bestHour = hour;
    }
  }
  
  return bestHour;
};

export const getHighestAspect = (scores: Record<Aspect, number>): Aspect => {
    let maxAspect: Aspect = 'Lantern';
    let maxScore = -1;
    
    for (const [aspect, score] of Object.entries(scores)) {
        if (score > maxScore) {
            maxScore = score;
            maxAspect = aspect as Aspect;
        }
    }
    return maxAspect;
};

export const calculateJudgment = (scores: Record<Aspect, number>): Judgment => {
    const sortedAspects = Object.entries(scores)
        .sort(([, scoreA], [, scoreB]) => scoreB - scoreA)
        .map(([aspect]) => aspect as Aspect);

    const primary = sortedAspects[0];
    const secondary = sortedAspects[1];

    // Check for special combination
    if (secondary) {
        const comboKey = `${primary}+${secondary}`;
        if (SPECIAL_COMBINATIONS[comboKey]) {
            return SPECIAL_COMBINATIONS[comboKey];
        }
    }

    return ASPECT_JUDGMENTS[primary];
};
