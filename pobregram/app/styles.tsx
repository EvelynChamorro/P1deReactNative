import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C',
    alignItems: 'center',
  },
  image: {
    width: 200, 
    height: 200,
    resizeMode: 'contain', 
    marginTop: '5%',
    marginBottom: '1%'
  },
  input1: {
    width: '89%',
    height: 43,
    padding: 15,
    marginTop: -20, 
    marginBottom: 10,
    backgroundColor: '#363636', 
    borderRadius: 3.5,
    fontSize: 12,
  },
  senha: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '89%', 
    marginBottom: 12,
},
  input2: {
        width: '100%',
        height: 43,
        padding: 15,
        marginTop: 0, 
        marginBottom: 10,
        backgroundColor: '#363636', 
        borderRadius: 3.5,
        fontSize: 12,
  },
    icon: {
            position: 'absolute',
            bottom: 25,
            right: 11,
  },
    botão: {
        width: '90%',
        alignItems: 'flex-end'
     
    },
    textoBotão: {
        color: '#4F94CD',
        fontSize: 11,
    },
    botãoDeLogin: {
        marginTop: '5%',
        backgroundColor: '#4F94CD',
        width: '90%',
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,  
    },
    textoDoLogin: {
        color: '#FFF',
        fontSize: 13,
    },

    divisor: {
        marginTop: 30, 
        flexDirection: 'row',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
      },

      divisorLinha: {
        flex: 1,
        height: 2,
        backgroundColor: '#838B83',
        marginHorizontal: 5, 
      },

      textinho: {
        marginHorizontal: '3%',
        color: '#838B83'
       
    },
    icone: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', 
        marginTop: 20, 
      },
      textoFace: {
        color: '#1874CD',
        fontSize: 13, 
        paddingLeft: 7,
      },
      linha: {
        marginTop: 30, 
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      },

      linhacadastro: {
        flex: 1,
        height: 2,
        backgroundColor: '#838B83',
        marginTop: 110,
      },
      cadastro: {
        flexDirection: 'row',
        marginTop: '3%',
      },
      cadastroTexto: {
        color: '#DCDCDC',
        paddingRight: 5,
        fontSize: 11,
      },
      singup: {
        color: '#1874CD',
        fontWeight: 'bold',
        fontSize: 11,
      },

  });