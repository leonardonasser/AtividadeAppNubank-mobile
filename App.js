import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import  IconAwe  from 'react-native-vector-icons/FontAwesome';
import  IconEvi  from 'react-native-vector-icons/EvilIcons';
import  IconIon  from 'react-native-vector-icons/Ionicons';

export default function App() {


  return (

    <SafeAreaView style={styles.container}>
      <View style={styles.boxEncima}>
        <Text style={{ fontSize: 20, fontWeight: "bold", paddingLeft: 20, color: '#fff', paddingTop: 60 }} >Olá, Leonardo</Text>
       
       <View style={{marginLeft: 230, marginTop: -28, flexDirection: 'row'}}>
        <IconIon name="md-eye-off-outline" size={30} style={{color: '#fff', marginHorizontal: 20}}/>
    
        <IconEvi name="gear"  size={30} style={{ color: '#fff'}}/>
        </View>
      </View>

      <View style={styles.boxMeio}>
        <ScrollView style={styles.scrollView}>
          <Card style={styles.card}>
            <Card.Content>
              <Title style={{ fontSize: 15 }}>Cartão de Crédito</Title>
              <Paragraph style={{ fontSize: 12 }} >fatura atual</Paragraph>
              <Text style={{ fontSize: 20, color: '#2786ff', fontWeight: "bold" }}>R$ 120,76</Text>
              <Text>Limite disponivel <Text style={{ color: '#1e9934', fontWeight: "bold", fontSize: 12 }} > R$ 201,14</Text></Text>
            </Card.Content>
          </Card>

          <Card style={styles.card}>
            <Card.Content>
              <Title style={{ fontSize: 15 }}>Conta</Title>
              <Paragraph style={{ fontSize: 12 }}>Saldo disponível</Paragraph>
              <Text style={{ fontSize: 20, color: 'black', fontWeight: "bold" }}>R$ 120,76</Text>
            </Card.Content>
          </Card>

          <Card style={styles.card}>
            <Card.Content>
              <Title style={{ fontSize: 15 }}>Pix</Title>
              <Paragraph style={{ fontSize: 16, color: 'black', fontWeight: "bold" }} >Transfira usando o pix</Paragraph>
              <Paragraph style={{ fontSize: 12 }}>Pague e receba em tempo real, sem custo e para qualquer banco.</Paragraph>
              <Card.Actions>
                <Button style={{ borderColor: '#652279', borderWidth: 0.1, }}>
                  <Text style={{ fontSize: 11, fontWeight: "800", color: '#652279' }}>COMEÇAR A USAR</Text></Button>
              </Card.Actions>
            </Card.Content>
          </Card>

          <Card style={styles.card}>
            <Card.Content>
              <Title>Empréstimo</Title>
              <Paragraph style={{ fontSize: 12 }} >Valor disponível de até</Paragraph>
              <Text style={{ fontSize: 15, color: 'BLACK', fontWeight: "bold" }}>R$ 8.700,00</Text>
              <Card.Actions>
                <Button style={{ borderColor: '#652279', borderWidth: 0.1, }}>
                  <Text style={{ fontSize: 11, fontWeight: "800", color: '#652279' }}>SIMULAR EMPRÉSTIMO</Text></Button>
              </Card.Actions>
            </Card.Content>
          </Card>

          <Card style={styles.card}>
            <Card.Content>
              <Title style={{ color: '#652279' }}>Rewards</Title>
              <Paragraph style={{ fontSize: 12 }} >Apague compras com pontos que nunca expiram.</Paragraph>

              <Card.Actions>
                <Button style={{ borderColor: '#652279', borderWidth: 0.1, }}>
                  <Text style={{ fontSize: 11, fontWeight: "800", color: '#652279' }}>CONHECER</Text></Button>
              </Card.Actions>
            </Card.Content>
          </Card>


          <Card style={styles.card}>
            <Card.Content>
              <Title style={{ color: '#652279' }}>Seguro de vida</Title>
              <Paragraph style={{ fontSize: 12 }} >Conheça Nubank Vida: um seguro simples e que cabe no bolso.</Paragraph>
              <Card.Actions>
                <Button style={{ borderColor: '#652279', borderWidth: 0.1, }}>
                  <Text style={{ fontSize: 11, fontWeight: "800", color: '#652279' }}>CONHECER</Text></Button>
              </Card.Actions>
            </Card.Content>
          </Card>

          <Card style={styles.card}>
            <Card.Content>
              <Title style={{ color: '#652279' }}>Google Pay</Title>
              <Paragraph style={{ fontSize: 12 }} >Use o google Pay com seus cartões Nubank</Paragraph>

              <Card.Actions>
                <Button style={{ borderColor: '#652279', borderWidth: 0.1, }}>
                  <Text style={{ fontSize: 11, fontWeight: "800", color: '#652279' }}>REGISTRAR MEU CARTÃO</Text></Button>
              </Card.Actions>
            </Card.Content>
          </Card>
        </ScrollView>

      </View>
      <View style={styles.boxBaixo}>
        <ScrollView horizontal={true} >
          <Card style={styles.cardHorizontal}>
            <Card.Content>
              <Title style={{ color: '#fff', fontSize: 12, marginTop: 43, marginLeft: -10 }}>Pix</Title>
            </Card.Content>
          </Card>
          <Card style={styles.cardHorizontal}>
            <Card.Content>
            <Title style={{ color: '#fff', fontSize: 12, marginTop: 43, marginLeft: -10 }}>Pagar</Title>
            </Card.Content>
          </Card>
          <Card style={styles.cardHorizontal}>
            <Card.Content>
            <Title style={{ color: '#fff', fontSize: 12, marginTop: 27, marginLeft: -7 }}>Indicar</Title>  
             <Title style={{ color: '#fff', fontSize: 12, marginTop: -15, marginLeft: -7 }}>amigos</Title>
            </Card.Content>
          </Card>
          <Card style={styles.cardHorizontal}>
            <Card.Content>
            <Title style={{ color: '#fff', fontSize: 12, marginTop: 43, marginLeft: -10 }}>Transferir</Title>
            </Card.Content>
          </Card>
          <Card style={styles.cardHorizontal}>
            <Card.Content>
            <Title style={{ color: '#fff', fontSize: 12, marginTop: 43, marginLeft: -10 }}>Depositar</Title>
            </Card.Content>
          </Card>
          <Card style={styles.cardHorizontal}>
            <Card.Content>
            <Title style={{ color: '#fff', fontSize: 11, marginTop: 43, marginLeft: -10 }}>Empréstimos</Title>
            </Card.Content>
          </Card>
          <Card style={styles.cardHorizontal}>
            <Card.Content>
            <Title style={{ color: '#fff', fontSize: 12, marginTop: 27, marginLeft: -7 }}>Cartão</Title>  
             <Title style={{ color: '#fff', fontSize: 12, marginTop: -15, marginLeft: -7 }}>virtual</Title>
            </Card.Content>
          </Card>
          <Card style={styles.cardHorizontal}>
            <Card.Content>
            <Title style={{ color: '#fff', fontSize: 12, marginTop: 27, marginLeft: -7 }}>Recarga de</Title>  
             <Title style={{ color: '#fff', fontSize: 12, marginTop: -15, marginLeft: -7 }}>celular</Title>
            </Card.Content>
          </Card>
          <Card style={styles.cardHorizontal}>
            <Card.Content>
            <Title style={{ color: '#fff', fontSize: 12, marginTop: 27, marginLeft: -7 }}>Ajustar</Title>  
             <Title style={{ color: '#fff', fontSize: 12, marginTop: -15, marginLeft: -7 }}>limite</Title>
            </Card.Content>
          </Card>
          <Card style={styles.cardHorizontal}>
            <Card.Content>
            <Title style={{ color: '#fff', fontSize: 12, marginTop: 27, marginLeft: -7 }}>Bloquear</Title>  
             <Title style={{ color: '#fff', fontSize: 12, marginTop: -15, marginLeft: -7 }}>cartão</Title>
            </Card.Content>
          </Card>
          <Card style={styles.cardHorizontal}>
            <Card.Content>
            <Title style={{ color: '#fff', fontSize: 11, marginTop: 43, marginLeft: -10 }}>Cobrar</Title>
            </Card.Content>
          </Card>
          <Card style={styles.cardHorizontal}>
            <Card.Content>
            <Title style={{ color: '#fff', fontSize: 11, marginTop: 43, marginLeft: -10 }}>Doação</Title>
            </Card.Content>
          </Card>
          <Card style={styles.cardHorizontal}>
            <Card.Content>
            <Title style={{ color: '#fff', fontSize: 11, marginTop: 43, marginLeft: -10 }}>Me ajuda</Title>
            </Card.Content>
          </Card>
        </ScrollView>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9300d3',
  },
  boxEncima: {
    flex: 1,
    height: 10,
    backgroundColor: '#9300d3',
 
  },
  boxMeio: {
    flex: 5,
    height: 100,
    backgroundColor: '#9300d3',

  },
  boxBaixo: {
    flex: 1.5,
    height: 50,
    backgroundColor: '#9300d3',

  },
  card: {
    marginTop: 20
  },
  scrollView: {
    marginHorizontal: 20,
  },
  cardHorizontal: {
    marginTop: 20,
    width: 90,
    height: 90,
    marginHorizontal: 5,
    backgroundColor: '#9041a9'
  },
});
