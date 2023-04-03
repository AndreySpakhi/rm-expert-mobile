import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export const MeasurementScreen = ({ data }) => {
  let timestamp = [];
  let FO1 = [];
  let FO2 = [];
  let FO3 = [];
  let FO4 = [];

  data.forEach((element) => {
    timestamp.push(element.timestamp);
    FO1.push(element.FO1);
    FO2.push(element.FO2);
    FO3.push(element.FO3);
    FO4.push(element.FO4);
  });

  const chartData = {
    labels: timestamp,
    datasets: [
      {
        data: FO1,
      },
      {
        data: FO2,
      },
      {
        data: FO3,
      },
      {
        data: FO4,
      },
    ],
  };

  const chartConfig = {
    backgroundColor: '#e26a00',
    backgroundGradientFrom: '#fb8c00',
    backgroundGradientTo: '#ffa726',
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#ffa726',
    },
  };

  return (
    <View style={styles.measurementScreen}>
      <LineChart
        data={chartData}
        width={500}
        height={200}
        chartConfig={chartConfig}
        bezier
      />
    </View>
  );
};

const styles = StyleSheet.create({
  measurementScreen: {
    padding: 1,
  },
});
