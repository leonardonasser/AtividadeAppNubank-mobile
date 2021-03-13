import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import { Icon } from 'react-native-vector-icons/MaterialIcons';

export default function App() {


  return (



    <SafeAreaView style={styles.container}>





      <Text style={{ fontSize: 20, fontWeight: "bold", paddingLeft: 20, color: '#fff', paddingTop: 10 }} >Olá, Leonardo</Text>



      <View Style={styles.scrollMeio}>
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

      <View style={styles.fix}>
        <ScrollView horizontal={true} >
          <Card style={styles.cardHorizontal}>
            <Card.Content>
              <Title style={{ color: '#652279' }}></Title>
            </Card.Content>
          </Card>
          <Card style={styles.cardHorizontal}>
            <Card.Content>
              <Title style={{ color: '#652279' }}></Title>
            </Card.Content>
          </Card>
          <Card style={styles.cardHorizontal}>
            <Card.Content>
              <Title style={{ color: '#652279' }}></Title>
            </Card.Content>
          </Card>
          <Card style={styles.cardHorizontal}>
            <Card.Content>
              <Title style={{ color: '#652279' }}></Title>
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
  scrollMeio: {
    flex: 1,
    minHeight: 50,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  fixEncima: {
    position: 'fixed',
    marginHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#9300d3',
    flex: 1,
  },
  encima: {
    flexDirection: 'row',
    paddingVertical: 30,
    flexBasis: 1,
  },
  baixo: {
    flexDirection: 'row',
    paddingVertical: 30,
    flexBasis: 1,
  },
  card: {
    marginTop: 20
  },
  cardHorizontal: {
    marginTop: 20,
    width: 100,
    height: 100,
    marginHorizontal: 10,
    backgroundColor: '#652279'
  },
  fix: {
    position: 'fixed',
    marginHorizontal: 10,
    paddingVertical: 10,
    bottom: 0,
    backgroundColor: '#9300d3'
  },
});
