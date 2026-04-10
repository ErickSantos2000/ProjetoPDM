import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'dark'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      // ADICIONE ISSO:
        tabBarStyle: {
          backgroundColor: '#000000', // Cor de fundo da barra
          borderTopWidth: 0,          // Remove a linha sutil do topo se quiser
          height: 100,                 // Ajusta a altura se precisar
        },
    tabBarInactiveTintColor: '#ccc', // Cor dos ícones não selecionados
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Passaros"
        options={{
          title: 'Passaros',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}