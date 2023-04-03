import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { DataRow } from '../components/DataRow';

export const AlarmScreen = ({ data }) => {
  return (
    <View style={styles.alarmScreen}>
      <DataRow
        id={'ID'}
        timestamp={'Timestamp'}
        event={'Event'}
        conditionName={'Condition name'}
      />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <DataRow
            id={item.id}
            timestamp={item.timestamp}
            event={item.Event}
            conditionName={item.Condition_name}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  alarmScreen: {
    padding: 1,
  },
});
