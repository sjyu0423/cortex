import { Icon } from '@/components/Icon';
import { StyleSheet, View } from 'react-native';
import type { ActivityDay } from '@/domain/training';
import { Typography } from '@/components/Typography';
import { useTheme } from '@/theme/theme';

export function WeeklyActivity({ days, streak }: { days: ActivityDay[]; streak: number }) {
  const { colors } = useTheme();
  const completed = days.filter((day) => day.completed).length;
  return (
    <View style={[styles.section, { borderColor: colors.line }]}>
      <View style={styles.heading}>
        <Typography style={styles.label}>Weekly activity</Typography>
        <Typography variant="caption" style={{ color: colors.muted }}>{streak > 0 ? `${streak}-day streak` : 'A fresh start'}</Typography>
      </View>
      <View style={styles.days}>
        {days.map((day) => (
          <View key={day.date} style={styles.day} accessible accessibilityLabel={`${day.date}${day.isToday ? ', today' : ''}, ${day.completed ? 'workout completed' : 'no workout completed'}`}>
            <Typography variant="caption" style={{ color: day.isToday ? colors.text : colors.muted, fontWeight: day.isToday ? '700' : '400' }}>{day.label}</Typography>
            <View style={[styles.circle, { backgroundColor: day.completed ? colors.accent : day.isToday ? colors.soft : 'transparent', borderColor: day.isToday || day.completed ? colors.accent : colors.line, borderStyle: day.isToday || day.completed ? 'solid' : 'dashed' }]}>
              {day.completed ? <Icon name="check" size={15} color={colors.background} /> : day.isToday ? <View style={[styles.dot, { backgroundColor: colors.accent }]} /> : null}
            </View>
          </View>
        ))}
      </View>
      <Typography variant="caption" style={[styles.note, { color: colors.muted }]}>{completed === 0 ? 'Your first rep starts a new routine.' : `${completed} workout ${completed === 1 ? 'day' : 'days'} this week. Keep showing up.`}</Typography>
    </View>
  );
}

const styles = StyleSheet.create({
  section: { borderTopWidth: 1, paddingTop: 22, marginTop: 22 },
  heading: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 8, flexWrap: 'wrap' },
  label: { fontSize: 14, fontWeight: '600' },
  days: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 16 },
  day: { alignItems: 'center', gap: 8 },
  circle: { width: 30, height: 30, borderRadius: 15, borderWidth: 1, alignItems: 'center', justifyContent: 'center' },
  dot: { height: 5, width: 5, borderRadius: 3 },
  note: { marginTop: 15 },
});
