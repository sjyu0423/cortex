import { Icon } from '@/components/Icon';
import { StyleSheet, View } from 'react-native';
import { BrandHeader } from '@/components/BrandHeader';
import { Screen } from '@/components/Screen';
import { Typography } from '@/components/Typography';
import { useTheme } from '@/theme/theme';

const content = {
  learn: {
    section: 'LEARN',
    icon: 'play' as const,
    headline: 'Small lessons.\nBig connections.',
    subtitle: 'Short-form CS learning',
    description: 'A fresh way to see algorithms. Bite-sized videos and animations, one concept at a time.',
    items: ['Visual explanations', 'A feed built for learning'],
    footer: 'A little curiosity goes a long way.',
  },
  you: {
    section: 'YOU',
    icon: 'bar-chart-2' as const,
    headline: 'Your effort.\nYour evolution.',
    subtitle: 'Watch your practice add up',
    description: 'A home for the coder you’re becoming. Every small step, all in one place.',
    items: ['Levels & mastery', 'Streaks & statistics', 'Personal records & leaderboard'],
    footer: 'Progress is personal. Make it yours.',
  },
};

export function ComingSoonScreen({ feature }: { feature: keyof typeof content }) {
  const copy = content[feature];
  const { colors } = useTheme();
  return (
    <Screen>
      <BrandHeader label={copy.section} />
      <View style={styles.main}>
        <View style={[styles.iconFrame, { backgroundColor: colors.soft, borderColor: colors.line }]}>
          <Icon name={copy.icon} size={38} color={colors.accent} />
        </View>
        <View style={[styles.pill, { borderColor: colors.line }]}>
          <View style={[styles.dot, { backgroundColor: colors.accent }]} />
          <Typography variant="eyebrow" style={{ color: colors.accent }}>COMING SOON</Typography>
        </View>
        <Typography variant="title" accessibilityRole="header" style={styles.title}>{copy.headline}</Typography>
        <Typography variant="heading" style={styles.subtitle}>{copy.subtitle}</Typography>
        <Typography style={[styles.description, { color: colors.muted }]}>{copy.description}</Typography>
        <View style={[styles.future, { borderColor: colors.line }]}>
          <Typography variant="eyebrow" style={{ color: colors.muted }}>ON THE HORIZON</Typography>
          {copy.items.map((item) => (
            <View key={item} style={styles.item}>
              <Icon name="plus" size={15} color={colors.muted} />
              <Typography style={{ color: colors.muted }}>{item}</Typography>
            </View>
          ))}
        </View>
      </View>
      <Typography variant="caption" style={[styles.footer, { color: colors.muted }]}>{copy.footer}</Typography>
    </Screen>
  );
}

const styles = StyleSheet.create({
  main: { flexGrow: 1, justifyContent: 'center', paddingTop: 30, paddingBottom: 30 },
  iconFrame: { width: 84, height: 84, borderRadius: 25, borderWidth: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 30 },
  pill: { borderWidth: 1, borderRadius: 20, flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start', gap: 7, paddingHorizontal: 12, paddingVertical: 6 },
  dot: { width: 5, height: 5, borderRadius: 3 },
  title: { marginTop: 22, fontSize: 39, lineHeight: 45 },
  subtitle: { marginTop: 24, fontSize: 18 },
  description: { marginTop: 10, maxWidth: 330, lineHeight: 25 },
  future: { borderTopWidth: 1, marginTop: 30, paddingTop: 20, gap: 13 },
  item: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  footer: { paddingTop: 20 },
});
