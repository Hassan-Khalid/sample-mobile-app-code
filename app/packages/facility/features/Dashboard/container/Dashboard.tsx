import React from 'react';
import {
  View, Text, Button, SafeAreaView,
} from 'react-native';
import useDashboard from '../hooks/useDashboard';

function Dashboard() {
  const { navigateToLogin } = useDashboard();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text>Welcome to Facility Dashboard</Text>
        <Button title="login" onPress={navigateToLogin} />
      </View>
    </SafeAreaView>
  );
}
export default Dashboard;
