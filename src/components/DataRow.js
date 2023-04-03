import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const DataRow = ({ id, timestamp, event, conditionName }) => {
  return (
    <View style={styles.dataRow}>
      <Text style={styles.id}>{id}</Text>
      <Text style={styles.timestamp}>{timestamp}</Text>
      <Text style={styles.event}>{event}</Text>
      <Text style={styles.conditionName}>{conditionName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  dataRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 1,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
    marginBottom: 5,
  },
  id: {
    width: '10%',
  },
  timestamp: {
    width: '40%',
  },
  event: {
    width: '20%',
  },
  conditionName: {
    width: '30%',
  },
});
