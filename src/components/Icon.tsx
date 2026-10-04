import Feather from '@expo/vector-icons/Feather';
import type { ComponentProps } from 'react';

/** Icons are decorative; their parent controls provide the accessible labels. */
export function Icon(props: ComponentProps<typeof Feather>) {
  return <Feather {...props} accessible={false} accessibilityElementsHidden importantForAccessibility="no-hide-descendants" />;
}
