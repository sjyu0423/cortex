import { Icon } from '@/components/Icon';
import { router } from 'expo-router';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { BrandHeader } from '@/components/BrandHeader';
import { PrimaryButton } from '@/components/PrimaryButton';
import { Screen } from '@/components/Screen';
import { Typography } from '@/components/Typography';
import { useTheme } from '@/theme/theme';
import { useTrainingOverview } from './useTrainingOverview';
import { WeeklyActivity } from './WeeklyActivity';
import { WorkoutCard } from './WorkoutCard';

function greeting() {
  const hour = new Date().getHours();
  return hour < 12 ? 'Good morning.' : hour < 17 ? 'Good afternoon.' : 'Good evening.';
}

export function TrainScreen() {
  const { colors } = useTheme();
  const { state, retry } = useTrainingOverview();
  return (
    <Screen>
      <BrandHeader />
      <Typography variant="title" accessibilityRole="header">{greeting()}</Typography>
      <Typography style={[styles.subtitle, { color: colors.muted }]}>A little practice. A sharper mind.</Typography>
      {state.status === 'loading' ? <ActivityIndicator style={styles.loading} color={colors.accent} accessibilityLabel="Loading your training" /> : state.status === 'error' ? (
        <View style={styles.error}>
          <Typography>We couldn’t load your training. Give it another try.</Typography>
          <PrimaryButton label="TRY AGAIN" onPress={retry} />
        </View>
      ) : (
        <>
          <View style={[styles.level, { borderColor: colors.line }]}>
            <View style={[styles.levelIcon, { backgroundColor: colors.soft }]}><Icon name="activity" size={22} color={colors.accent} /></View>
            <View style={styles.levelCopy}>
              <Typography style={styles.levelTitle}>Coding Level {state.data.progress.codingLevel}</Typography>
              <Typography variant="caption" style={{ color: colors.muted }}>Building your foundation</Typography>
            </View>
            <Typography variant="eyebrow" style={{ color: colors.accent }}>LV. {String(state.data.progress.codingLevel).padStart(2, '0')}</Typography>
          </View>
          <WorkoutCard topic={state.data.topic} workout={state.data.workout} onStart={() => router.push('/workout')} />
          <View style={styles.focus}>
            <View style={[styles.focusIcon, { backgroundColor: colors.soft }]}><Icon name="code" size={21} color={colors.accent} /></View>
            <View style={styles.focusCopy}>
              <Typography variant="eyebrow" style={{ color: colors.muted }}>CURRENT FOCUS</Typography>
              <Typography style={styles.focusTitle}>{state.data.topic.name}</Typography>
            </View>
            <View style={[styles.badge, { borderColor: colors.line }]}><Typography variant="caption" style={styles.badgeText}>Lv. {state.data.skill.level}</Typography></View>
          </View>
          <WeeklyActivity days={state.data.week} streak={state.data.progress.currentStreakDays} />
          <Typography variant="eyebrow" style={[styles.campaign, { color: colors.muted }]}>NEETCODE / LEETCODE CAMPAIGN</Typography>
        </>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  subtitle: { marginTop: 8 },
  loading: { marginTop: 50 },
  error: { marginTop: 28, gap: 20 },
  level: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 16, borderBottomWidth: 1, marginTop: 13 },
  levelIcon: { width: 42, height: 42, borderRadius: 13, alignItems: 'center', justifyContent: 'center' },
  levelCopy: { flex: 1, gap: 2 },
  levelTitle: { fontSize: 15, fontWeight: '600' },
  focus: { flexDirection: 'row', alignItems: 'center', gap: 12, marginTop: 24 },
  focusIcon: { width: 44, height: 44, borderRadius: 14, alignItems: 'center', justifyContent: 'center' },
  focusCopy: { flex: 1, gap: 3 },
  focusTitle: { fontSize: 15, fontWeight: '600' },
  badge: { borderWidth: 1, borderRadius: 8, paddingHorizontal: 10, paddingVertical: 4 },
  badgeText: { fontWeight: '600' },
  campaign: { marginTop: 28, textAlign: 'center', fontSize: 9, letterSpacing: 1.3 },
});
