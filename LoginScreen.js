// LoginScreen.js
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const handleLogin = () => {
    // Adicione a lógica de login aqui
    alert('Login realizado com sucesso!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página de Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu usuário"
        // Adicione lógica de manipulação de entrada, se necessário
      />

      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry
        // Adicione lógica de manipulação de entrada, se necessário
      />

      <Button title="Login" onPress={handleLogin} />

      <View style={styles.buttonContainer}>
        <Button
          title="Voltar"
          onPress={() => navigation.goBack()}
          color="#555"
        />
        <Button
          title="Ir para Home"
          onPress={() => navigation.navigate('Home')}
          color="#00A6FB"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
});

export default LoginScreen;
