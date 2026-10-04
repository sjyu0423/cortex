import { buildActivityWeek } from '@/domain/activity';
import type { TrainingOverview } from '@/domain/training';
import { mockProgress, mockSummaries, mockTopic, mockWorkout } from './mockTraining';

export interface TrainingRepository {
  getOverview(today: Date): Promise<TrainingOverview>;
}

/** Swap this adapter when persistence arrives; screens never import mock records. */
export const trainingRepository: TrainingRepository = {
  async getOverview(today) {
    const progress = { ...mockProgress, skills: mockProgress.skills.map((skill) => ({ ...skill })) };
    const skill = progress.skills.find((item) => item.topicId === progress.currentTopicId);
    if (!skill) throw new Error('The current topic has no skill progress.');

    return {
      progress,
      skill,
      topic: { ...mockTopic },
      workout: { ...mockWorkout },
      week: buildActivityWeek(today, mockSummaries),
    };
  },
};
