/** Storage-friendly domain records. IDs are opaque; dates are ISO strings. */
export interface Topic {
  id: string;
  name: string;
  description: string;
  campaign: 'neetcode-leetcode';
}

export interface SkillProgress {
  topicId: Topic['id'];
  level: number;
  completedWorkouts: number;
}

export interface UserProgress {
  id: string;
  codingLevel: number;
  currentTopicId: Topic['id'];
  currentStreakDays: number;
  skills: SkillProgress[];
}

/** Schema only: question content and the workout engine are deferred. */
export interface WorkoutQuestion {
  id: string;
  topicId: Topic['id'];
  prompt: string;
}

export interface WorkoutSession {
  id: string;
  topicId: Topic['id'];
  questionIds: WorkoutQuestion['id'][];
  status: 'in-progress' | 'completed' | 'abandoned';
  startedAt: string;
  completedAt: string | null;
}

export interface WorkoutSummary {
  sessionId: WorkoutSession['id'];
  topicId: Topic['id'];
  completedAt: string;
  durationMinutes: number;
}

export interface WorkoutPlan {
  id: string;
  topicId: Topic['id'];
  estimatedMinutes: number;
  stage: string;
}

export interface ActivityDay {
  date: string;
  label: string;
  isToday: boolean;
  completed: boolean;
}

export interface TrainingOverview {
  progress: UserProgress;
  topic: Topic;
  skill: SkillProgress;
  workout: WorkoutPlan;
  week: ActivityDay[];
}
