import { Icon } from '@/components/Icon';
import { StyleSheet, View } from 'react-native';
import { Typography } from './Typography';
import { useTheme } from '@/theme/theme';

export function BrandHeader({ label = 'DAILY PRACTICE' }: { label?: string }) {
  const { colors } = useTheme();
  return (
    <View style={styles.row}>
      <View style={styles.brand}>
        <Icon name="command" size={21} color={colors.accent} />
        <Typography style={styles.wordmark}>cortex</Typography>
      </View>
      <Typography variant="eyebrow" style={{ color: colors.muted, letterSpacing: 1.2 }}>{label}</Typography>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginBottom: 30 },
  brand: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  wordmark: { fontSize: 23, lineHeight: 28, fontWeight: '700', letterSpacing: -1 },
});
