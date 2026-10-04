import assert from 'node:assert/strict';
import test from 'node:test';
import { buildActivityWeek } from '../src/domain/activity.ts';

test('Sunday belongs to the previous Monday, including across a year boundary', () => {
  const week = buildActivityWeek(new Date(2027, 0, 3, 10), []);
  assert.equal(week[0].date, '2026-12-28');
  assert.equal(week[6].date, '2027-01-03');
  assert.equal(week.filter((day) => day.isToday).length, 1);
  assert.equal(week[6].isToday, true);
  assert.ok(week.every((day) => !day.completed));
});

test('activity uses local completion dates and counts a day once', () => {
  const today = new Date(2026, 9, 7, 10);
  const completedAt = new Date(2026, 9, 6, 23, 45).toISOString();
  const week = buildActivityWeek(today, [
    { sessionId: 'one', topicId: 'arrays', completedAt, durationMinutes: 35 },
    { sessionId: 'two', topicId: 'arrays', completedAt, durationMinutes: 30 },
  ]);
  assert.deepEqual(week.filter((day) => day.completed).map((day) => day.date), ['2026-10-06']);
  assert.equal(week.find((day) => day.isToday)?.date, '2026-10-07');
});

test('the daylight-saving week contains seven distinct local days', () => {
  const week = buildActivityWeek(new Date(2026, 2, 8, 12), []);
  assert.deepEqual(week.map((day) => day.date), [
    '2026-03-02', '2026-03-03', '2026-03-04', '2026-03-05', '2026-03-06', '2026-03-07', '2026-03-08',
  ]);
});
