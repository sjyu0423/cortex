import type { ActivityDay, WorkoutSummary } from './training';

/** Use the viewer's local calendar, not UTC dates or 24-hour increments (DST). */
function localDateKey(date: Date): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

export function buildActivityWeek(today: Date, summaries: WorkoutSummary[]): ActivityDay[] {
  const monday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  monday.setDate(monday.getDate() - ((today.getDay() + 6) % 7));
  const completedDates = new Set(summaries.map((item) => localDateKey(new Date(item.completedAt))));

  return ['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((label, index) => {
    const day = new Date(monday);
    day.setDate(monday.getDate() + index);
    const date = localDateKey(day);
    return { date, label, isToday: date === localDateKey(today), completed: completedDates.has(date) };
  });
}
