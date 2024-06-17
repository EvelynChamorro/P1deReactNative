import { StatusBar } from "expo-status-bar";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import logoinsta from "../src/assets/LOGOINSTA2.png"
import { styles } from "./styles";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useState } from "react";

export default function Index() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const visibilidadeDoBotao = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#1C1C1C" translucent={false} />

      <Image style={styles.image} 
        source={logoinsta} />

      <TextInput
        placeholder="Phone number, username or email address"
        placeholderTextColor="#DCDCDC"
        style={styles.input1}
      />

    <View style={styles.senha}>
        <TextInput
          placeholder="Password"
          placeholderTextColor="#DCDCDC"
          secureTextEntry={!passwordVisible} 
          style={styles.input2}
        />
        
        <TouchableOpacity onPress={visibilidadeDoBotao} style={styles.icon}>
        <FontAwesome5 name="eye-slash" size={15} color="white" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.botão}>
        <TouchableOpacity>
          <Text style={styles.textoBotão}>Forgotten Password? </Text>
        </TouchableOpacity>
      </View>

    <TouchableOpacity style={styles.botãoDeLogin}>
      <Text style={styles.textoDoLogin}>Log In</Text>
    </TouchableOpacity>

    <View style={styles.divisor}>
      <View style={styles.divisorLinha}></View>
      <Text style={styles.textinho}>OR</Text>
      <View style={styles.divisorLinha}></View>
    </View>

    <TouchableOpacity style={styles.icone}>
      <AntDesign name="facebook-square" size={15} color="#1874CD" />
      <Text style={styles.textoFace}>Log in with Facebook</Text>
    </TouchableOpacity>

    <View style={styles.linha}>
      <View style={styles.linhacadastro}></View>
    </View>

    <View style={styles.cadastro}>
    <Text style={styles.cadastroTexto}>Don't have a account?</Text>
    <TouchableOpacity>
      <Text style={styles.singup}>Sing up</Text>
    </TouchableOpacity>
    </View>

    </View>
  );
}

