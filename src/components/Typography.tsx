import { StyleSheet, Text, type TextProps } from 'react-native';
import { useTheme } from '@/theme/theme';

type Variant = 'title' | 'heading' | 'body' | 'caption' | 'eyebrow';

export function Typography({ variant = 'body', style, ...props }: TextProps & { variant?: Variant }) {
  const { colors } = useTheme();
  return <Text {...props} style={[{ color: colors.text }, styles[variant], style]} />;
}

const styles = StyleSheet.create({
  title: { fontSize: 36, lineHeight: 42, fontWeight: '700', letterSpacing: -1.4 },
  heading: { fontSize: 20, lineHeight: 26, fontWeight: '600', letterSpacing: -0.5 },
  body: { fontSize: 15, lineHeight: 23 },
  caption: { fontSize: 12, lineHeight: 18 },
  eyebrow: { fontSize: 10, lineHeight: 16, fontWeight: '700', letterSpacing: 1.7 },
});
