import * as React from 'react';
import { Button, View, Text, StyleSheet, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TextInput, Snackbar, Button as PaperButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';



const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    color: '#fff',
  },
});

function HomeScreen ({ navigation }){ 
  return (
    <ImageBackground
      source={{ uri: 'https://wallpaper4k.top/wp-content/uploads/2023/09/hd-soccer-stadium-wallpaper-6198.jpg' }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Bem-vindo à Página Inicial</Text>
        <Button
          title="Ir para Detalhes"
          onPress={() => navigation.navigate('Details')}
        />
        <Button title="Ir para Cadastro" onPress={() => navigation.navigate('Cadastro')} />
      </View>
    </ImageBackground>
  );
};

function DetailsScreen ({ navigation }){
  return (
    <ImageBackground
      source={{ uri: 'https://wallpaper4k.top/wp-content/uploads/2023/09/hd-soccer-stadium-wallpaper-6198.jpg' }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Button title="Ir para Início" onPress={() => navigation.navigate('Home')} />
        <Button title="Voltar" onPress={() => navigation.goBack()} />
      </View>
    </ImageBackground>
  );
};

const CadastroScreen = ({ navigation }) => {
  const [visible, setVisible] = React.useState(false);

  const handleCadastro = () => {
    // Adicione a lógica de cadastro aqui
    // Mostrar um snackbar para indicar sucesso
    setVisible(true);

    // Navegar para a tela de Login após o cadastro
    navigation.navigate('Login');
  };


  return (
    <ImageBackground
      source={{ uri: 'https://wallpaper4k.top/wp-content/uploads/2023/09/hd-soccer-stadium-wallpaper-6198.jpg' }}
      style={styles.background}
    >
      <View style={stylesCadastro.container}>
        <Text style={stylesCadastro.title}>CADASTRO</Text>

        {/* Campos de entrada para cadastro */}
        <TextInput
          placeholder="Digite seu usuário"
          style={stylesCadastro.input}
        />

        <TextInput
          placeholder="Digite seu email"
          style={stylesCadastro.input}
          secureTextEntry
        />

        <TextInput
          placeholder="Digite sua senha"
          style={stylesCadastro.input}
          secureTextEntry
        />

        {/* Botão de cadastro bonito */}
        <PaperButton
          mode="contained"
          onPress={handleCadastro}
          style={stylesCadastro.cadastrarButton}
          labelStyle={stylesCadastro.cadastrarButtonLabel}
        >
          Cadastrar
        </PaperButton>

        <View style={stylesCadastro.buttonContainer}>
          <PaperButton
            onPress={() => navigation.goBack()}
            mode="outlined"
            labelStyle={stylesCadastro.buttonLabel}
          >
            Voltar
          </PaperButton>
        </View>

        <Snackbar
          visible={visible}
          onDismiss={onDismissSnackBar}
          duration={2000}
        >
          Cadastro realizado com sucesso!
        </Snackbar>
      </View>
    </ImageBackground>
  );
};

function LoginScreen(){
      return (
      <ImageBackground // Usa ImageBackground para definir a imagem como background
      source={require('./messi.jpg')}
        style={stylesLogin.container}
      >
        <LinearGradient
          colors={['#3498db', '#2980b9']}
          style={stylesLogin.background}
        />
        <View style={stylesLogin.content}>
          <View style={stylesLogin.header}>
            <Icon name="account-circle" size={100} color="white" />
            <Text style={stylesLogin.headerText}>Bem-vindo(a) de volta!</Text>
          </View>
          <View style={stylesLogin.form}>
            <TextInput
              label="Email"
              mode="outlined"
              style={stylesLogin.input}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TextInput
              label="Senha"
              mode="outlined"
              style={stylesLogin.input}
              secureTextEntry
            />
            <Button mode="contained" style={stylesLogin.loginButton} onPress={() => {}}>
              Login
            </Button>
          </View>
          <View style={stylesLogin.footer}>
            <Text style={stylesLogin.footerText}>Ou entre com</Text>
            <View style={stylesLogin.socialLogin}>
              <Button
                icon={({ color }) => <Icon name="google" size={24} color={color} />}
                mode="contained"
                style={[stylesLogin.socialButton, { backgroundColor: '#DB4437' }]}
                onPress={() => {}}
              >
                Google
              </Button>
              <Button
                icon={({ color }) => <Icon name="facebook" size={24} color={color} />}
                mode="contained"
                style={[stylesLogin.socialButton, { backgroundColor: '#4267B2' }]}
                onPress={() => {}}
              >
                Facebook
              </Button>
              <Button
                icon={({ color }) => <Icon name="twitter" size={24} color={color} />}
                mode="contained"
                style={[stylesLogin.socialButton, { backgroundColor: '#1DA1F2' }]}
                onPress={() => {}}
              >
                Twitter
              </Button>
              <Button
                icon={({ color }) => <Icon name="github" size={24} color={color} />}
                mode="contained"
                style={[stylesLogin.socialButton, { backgroundColor: '#333' }]}
                onPress={() => {}}
              >
                GitHub
              </Button>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  };
  
  const stylesLogin = StyleSheet.create({
    container: {
      flex: 1,
      resizeMode: 'cover', // Cover para preencher toda a tela com a imagem
    },
   
    
    content: {
      flex: 1,
      justifyContent: 'space-between',
      padding: 20,
      
    },
    header: {
      alignItems: 'center',
      marginTop: 50,
    },
    headerText: {
      fontSize: 24,
      marginTop: 10,
      color: 'white',
    },
    form: {
      marginBottom: 20,
    },
    input: {
      marginBottom: 10,
      height: 40,
    },
    loginButton: {
      marginTop: 10,
      backgroundColor: '#2980b9',
    },
    footer: {
      alignItems: 'center',
      marginBottom: 30,
    },
    footerText: {
      fontSize: 16,
      color: 'white',
    },
    socialLogin: {
      flexDirection: 'row',
      marginTop: 10,
    },
    socialButton: {
      marginRight: 10,
    },
  });

const stylesCadastro = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  title: {
    fontSize: 30,
    marginBottom: 35,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    height: 40,
    width: '100%',
    marginBottom: 10,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    fontFamily: 'Verdana',
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
    borderRadius: 10,
  },
  cadastrarButton: {
    width: '100%',
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#007bff',
  },
  cadastrarButtonLabel: {
    color: '#fff',
    fontSize: 16,
  },
  buttonLabel: {
    color: '#007bff',
  },
});

export default App;
