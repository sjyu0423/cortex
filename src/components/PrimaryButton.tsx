import { Icon } from '@/components/Icon';
import { Pressable, StyleSheet } from 'react-native';
import { Typography } from './Typography';
import { useTheme } from '@/theme/theme';

export function PrimaryButton({ label, onPress, hint }: { label: string; onPress: () => void; hint?: string }) {
  const { colors } = useTheme();
  return (
    <Pressable accessibilityRole="button" accessibilityLabel={label} accessibilityHint={hint} onPress={onPress}
      style={({ pressed }) => [styles.button, { backgroundColor: colors.lime, opacity: pressed ? 0.78 : 1 }]}>
      <Typography style={[styles.label, { color: colors.onLime }]}>{label}</Typography>
      <Icon name="arrow-up-right" size={21} color={colors.onLime} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: { minHeight: 56, borderRadius: 14, paddingVertical: 16, paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 12 },
  label: { fontSize: 12, lineHeight: 20, fontWeight: '700', letterSpacing: 1.2, flexShrink: 1 },
});
