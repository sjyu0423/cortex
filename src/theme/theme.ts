import { useColorScheme } from 'react-native';

const light = {
  background: '#F6F5F0',
  surface: '#FFFFFF',
  text: '#20291F',
  muted: '#697064',
  line: '#DDDFD5',
  soft: '#EBEDE4',
  accent: '#425D35',
  hero: '#283E30',
  heroText: '#F7F8EE',
  heroMuted: '#CBD4C4',
  heroLine: '#4E6252',
  lime: '#D8EE9C',
  onLime: '#26371D',
};

const dark: typeof light = {
  background: '#141B17',
  surface: '#1E2821',
  text: '#F0F2E8',
  muted: '#A8B2A4',
  line: '#364137',
  soft: '#27332A',
  accent: '#D8EE9C',
  hero: '#2B4032',
  heroText: '#F7F8EE',
  heroMuted: '#CBD4C4',
  heroLine: '#526753',
  lime: '#D8EE9C',
  onLime: '#26371D',
};

export function useTheme() {
  const isDark = useColorScheme() === 'dark';
  return { colors: isDark ? dark : light, isDark };
}
