import { router } from 'expo-router';
import { View } from 'react-native';
import { Screen } from '@/components/Screen';
import { Typography } from '@/components/Typography';
import { PrimaryButton } from '@/components/PrimaryButton';

export default function NotFound() {
  return (
    <Screen bottomSafeArea>
      <View style={{ flex: 1, justifyContent: 'center', gap: 24 }}>
        <Typography variant="title" accessibilityRole="header">A little off track.</Typography>
        <Typography>This page doesn’t exist. Your training is right here.</Typography>
        <PrimaryButton label="BACK TO TRAIN" onPress={() => router.replace('/')} />
      </View>
    </Screen>
  );
}
