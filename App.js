import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { AlarmScreen } from './src/screens/AlarmScreen';
import { MeasurementScreen } from './src/screens/MeasurementScreen';

export default function App() {
  const [dataAlarms, setDataAlarms] = useState([]);
  const [dataMeasurements, setDataMeasurements] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [buttonAlarmPressed, setButtonAlarmPressed] = useState(false);
  const [buttonMeasurementPressed, setButtonMeasurementPressed] =
    useState(false);

  let content;

  if (!buttonAlarmPressed && !buttonMeasurementPressed) {
    content = (
      <Text>
        You have launched our incredible app. What information needs to be
        displayed?
      </Text>
    );
  } else if (buttonAlarmPressed) {
    content = <AlarmScreen data={dataAlarms} />;
  } else if (buttonMeasurementPressed) {
    content = <MeasurementScreen data={dataMeasurements} />;
  }

  const fetchDataAlarm = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        'https://rm-expert-api.azurewebsites.net/api/outbox/alarms'
      );
      const json = await response.json();
      setDataAlarms(json);
      setButtonMeasurementPressed(false);
      setButtonAlarmPressed(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchDataMeasurements = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        'https://rm-expert-api.azurewebsites.net/api/outbox/datas'
      );
      const json = await response.json();
      setDataMeasurements(json);
      setButtonAlarmPressed(false);
      setButtonMeasurementPressed(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imgWrap}>
        <Image
          style={styles.image}
          source={require('./assets/logo-black.png')}
        />
      </View>
      <View style={styles.dataSection}>
        {isLoading ? (
          <Text style={styles.loadingText}>Loading data...</Text>
        ) : (
          <View>{content}</View>
        )}
      </View>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button title="Alarms" onPress={fetchDataAlarm} color="#e53935" />
        </View>
        <View style={styles.button}>
          <Button
            title="Measurements"
            onPress={fetchDataMeasurements}
            color="#3949ab"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    height: 50,
  },
  image: {
    height: '100%',
    resizeMode: 'contain',
  },
  dataSection: {
    width: '90%',
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  button: {
    width: '45%',
    padding: 5,
  },

  loadingText: {
    fontSize: 18,
    color: '#888',
  },
  pressButtonText: {
    fontSize: 18,
    color: '#888',
    marginTop: 20,
  },
});
