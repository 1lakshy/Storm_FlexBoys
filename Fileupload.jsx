import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { Ionicons } from '@expo/vector-icons'; // Expo icons for file upload

export default function FileUploadComponent() {
  const [fileName, setFileName] = useState(null);

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    if (result.type === 'success') {
      setFileName(result.name);
      Alert.alert("File Selected", `You selected: ₹{result.name}`);
    } else {
      Alert.alert("File Selection Canceled");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.uploadButton} onPress={pickDocument}>
        <Ionicons name="cloud-upload-outline" size={24} color="black" />
        <Text style={styles.buttonText}>Upload File</Text>
      </TouchableOpacity>

      {fileName && (
        <View style={styles.fileInfo}>
          <Ionicons name="document-outline" size={24} color="black" />
          <Text style={styles.fileName}>{fileName}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 16,
    color: 'black',
  },
  fileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  fileName: {
    marginLeft: 10,
    fontSize: 16,
    color: 'black',
  },
});
