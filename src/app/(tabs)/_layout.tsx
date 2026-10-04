import { Icon } from '@/components/Icon';
import { Tabs } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@/theme/theme';

export default function TabLayout() {
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();
  const bottom = Math.max(insets.bottom, 12);

  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: colors.accent,
      tabBarInactiveTintColor: colors.muted,
      tabBarStyle: { height: 62 + bottom, paddingBottom: bottom, paddingTop: 10, backgroundColor: colors.background, borderTopColor: colors.line, elevation: 0 },
      tabBarLabelStyle: { fontSize: 10, fontWeight: '700', letterSpacing: 1.3, marginTop: 3 },
      tabBarLabelPosition: 'below-icon',
      sceneStyle: { backgroundColor: colors.background },
    }}>
      <Tabs.Screen name="index" options={{ title: 'TRAIN', tabBarAccessibilityLabel: 'TRAIN', tabBarIcon: ({ color }) => <Icon name="activity" size={22} color={color} /> }} />
      <Tabs.Screen name="learn" options={{ title: 'LEARN', tabBarAccessibilityLabel: 'LEARN, coming soon', tabBarIcon: ({ color }) => <Icon name="play-circle" size={22} color={color} /> }} />
      <Tabs.Screen name="you" options={{ title: 'YOU', tabBarAccessibilityLabel: 'YOU, coming soon', tabBarIcon: ({ color }) => <Icon name="user" size={22} color={color} /> }} />
    </Tabs>
  );
}
