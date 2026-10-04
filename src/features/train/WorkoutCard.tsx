import { Icon } from '@/components/Icon';
import { StyleSheet, View } from 'react-native';
import type { Topic, WorkoutPlan } from '@/domain/training';
import { PrimaryButton } from '@/components/PrimaryButton';
import { Typography } from '@/components/Typography';
import { useTheme } from '@/theme/theme';

export function WorkoutCard({ topic, workout, onStart }: { topic: Topic; workout: WorkoutPlan; onStart: () => void }) {
  const { colors } = useTheme();
  return (
    <View style={[styles.card, { backgroundColor: colors.hero }]}>
      <View style={styles.top}>
        <Typography variant="eyebrow" style={{ color: colors.heroMuted }}>TODAY’S WORKOUT</Typography>
        <Icon name="sunrise" size={21} color={colors.lime} />
      </View>
      <Typography variant="title" accessibilityRole="header" style={[styles.title, { color: colors.heroText }]}>{topic.name}</Typography>
      <Typography style={[styles.description, { color: colors.heroMuted }]}>{topic.description}</Typography>
      <View style={[styles.details, { borderColor: colors.heroLine }]}>
        <View style={styles.time}>
          <Icon name="clock" size={15} color={colors.heroMuted} />
          <Typography style={[styles.duration, { color: colors.heroText }]}>~{workout.estimatedMinutes} min</Typography>
        </View>
        <Typography variant="caption" style={{ color: colors.heroMuted }}>{workout.stage}</Typography>
      </View>
      <PrimaryButton label="START WORKOUT" onPress={onStart} hint="Opens a preview. The workout engine is coming next milestone." />
    </View>
  );
}

const styles = StyleSheet.create({
  card: { borderRadius: 24, padding: 24, marginTop: 22 },
  top: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 8 },
  title: { marginTop: 23, fontSize: 36, lineHeight: 39, maxWidth: 270 },
  description: { marginTop: 12, fontSize: 14, lineHeight: 21, maxWidth: 240 },
  details: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 8, borderTopWidth: 1, marginTop: 22, paddingTop: 16, paddingBottom: 20 },
  time: { flexDirection: 'row', alignItems: 'center', gap: 7 },
  duration: { fontSize: 13, lineHeight: 20, fontWeight: '600' },
});
