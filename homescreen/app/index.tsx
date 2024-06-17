import { StatusBar } from "expo-status-bar";
import { View, Image, StyleSheet, FlatList, Text } from 'react-native';
import { AntDesign, Fontisto  } from '@expo/vector-icons';


import logoinsta from '../src/assets/LOGOINSTA2.png';
import mais from '../src/assets/mais.png';
import storie2 from '../src/assets/storie2.png';
import storie3 from '../src/assets/storie3.png';
import storie4 from '../src/assets/storie4.png';
import storie5 from '../src/assets/storie5.png';
import foto1 from '../src/assets/foto1.jpg';


import { styles } from "./styles";

export default function Index() {

  
  const stories = [

    { image: storie2, text: "   Your Story" },
    { image: storie3, text: "     Zendrich" },
    { image: storie4, text: "        Ellysi" },
    { image: storie5, text: "  Hazelnutt" }
  ];

  const renderItem = ({ item }) => (
    <View>
      <Image source={item.image} style={styles.storyImage} />
      <Text style={styles.storyText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#1C1C1C" translucent={false} />
      <Image style={styles.image} source={logoinsta} />
      <AntDesign name="hearto" size={20} color="white" style={styles.icon} />
      <Fontisto name="messenger" size={19} color="white" style={styles.messenger} />

      <FlatList
        data={stories}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        contentContainerStyle={styles.flatListContainer}
      />

      <View style={styles.containeresquerda}>
        <Image source={storie2} style={styles.fotoperfil} />
        <Text style={styles.nomeinsta}>ellysi_art</Text>
      </View>

      <View>
        <Image source={foto1} style={styles.postImage} />
      </View>
    </View>
  );
}