import { Icon } from '@/components/Icon';
import { router } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { BrandHeader } from '@/components/BrandHeader';
import { PrimaryButton } from '@/components/PrimaryButton';
import { Screen } from '@/components/Screen';
import { Typography } from '@/components/Typography';
import { useTheme } from '@/theme/theme';

export function WorkoutPlaceholderScreen() {
  const { colors } = useTheme();
  return (
    <Screen bottomSafeArea>
      <BrandHeader label="WORKOUT PREVIEW" />
      <View style={styles.main}>
        <View style={[styles.icon, { backgroundColor: colors.soft }]}><Icon name="tool" size={32} color={colors.accent} /></View>
        <Typography variant="eyebrow" style={{ color: colors.accent }}>NEXT MILESTONE</Typography>
        <Typography variant="title" accessibilityRole="header" style={styles.title}>{'The next rep\nis on its way.'}</Typography>
        <Typography style={[styles.description, { color: colors.muted }]}>The workout engine will be implemented in the next milestone.</Typography>
        <View style={[styles.note, { borderColor: colors.line }]}>
          <Icon name="info" size={18} color={colors.muted} />
          <Typography variant="caption" style={[styles.noteText, { color: colors.muted }]}>This is a preview. No session has started, and your progress hasn’t changed.</Typography>
        </View>
      </View>
      <PrimaryButton label="BACK TO TRAIN" onPress={() => router.replace('/')} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  main: { flexGrow: 1, justifyContent: 'center', paddingVertical: 38 },
  icon: { width: 76, height: 76, borderRadius: 24, alignItems: 'center', justifyContent: 'center', marginBottom: 28 },
  title: { marginTop: 16, fontSize: 40, lineHeight: 46 },
  description: { marginTop: 22, maxWidth: 330, lineHeight: 25 },
  note: { borderTopWidth: 1, marginTop: 30, paddingTop: 20, flexDirection: 'row', gap: 10, alignItems: 'flex-start' },
  noteText: { flex: 1, lineHeight: 20 },
});
