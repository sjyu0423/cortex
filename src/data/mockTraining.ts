import type { Topic, UserProgress, WorkoutPlan, WorkoutSummary } from '@/domain/training';

export const mockTopic: Topic = {
  id: 'arrays-and-hashing',
  name: 'Arrays & Hashing',
  description: 'Build your instincts. Strengthen the fundamentals.',
  campaign: 'neetcode-leetcode',
};

export const mockProgress: UserProgress = {
  id: 'local-preview',
  codingLevel: 1,
  currentTopicId: mockTopic.id,
  currentStreakDays: 0,
  skills: [{ topicId: mockTopic.id, level: 1, completedWorkouts: 0 }],
};

export const mockWorkout: WorkoutPlan = {
  id: 'arrays-foundation',
  topicId: mockTopic.id,
  estimatedMinutes: 35,
  stage: 'Foundation',
};

// Starting a preview must never manufacture completed activity or progression.
export const mockSummaries: WorkoutSummary[] = [];
