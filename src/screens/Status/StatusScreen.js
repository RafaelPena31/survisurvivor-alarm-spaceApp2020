import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import * as Progress from 'react-native-progress'
import Icon from 'react-native-vector-icons/FontAwesome5'
import LinearGradient from 'react-native-linear-gradient'

import styles from './StatusStyle'
import colors from '../../Styles/_colors'

// eslint-disable-next-line react/prop-types
const StatusScreen = () => {
  const [weight, setWeight] = useState()
  const [age, setAge] = useState()
  const [height, setHeight] = useState()
  const [gender, setGender] = useState()
  const [bmr, setBmr] = useState(0)

  let [points, setPoints] = useState(0)
  let [day, setDay] = useState(24)
  let [sleep, setSleep] = useState(8)
  let [waterIntake, setWaterIntake] = useState()

  let [health, setHealth] = useState()
  let [food, setFood] = useState()
  let [water, setWater] = useState()

  const navigation = useNavigation()

  function pointGrape(exercises, studies, maintenance) {
    if (exercises + studies + maintenance <= day - sleep) {
      setDay(16)
    } else {
      setSleep(day - (exercises + studies + maintenance))
    }

    function pointsCalc() {
      setPoints(points + 2 * exercises)

      setPoints(points + 1 * studies)

      setPoints(points + 3 * maintenance)
    }

    gender == 'Feminino' ? womanBazalCalc() : menBazalCalc()

    function womanBazalCalc() {
      setBmr(655.7 + 13.75 * weight + 5.003 * height - 6.755 * age)
    }

    function menBazalCalc() {
      setBmr(66.47 + 13.75 * weight + 5.003 * height - 6.755 * age)
    }

    pointsCalc()

    while (points > 0) {
      setBmr(bmr + 50)
      setPoints(points - 1)
    }

    waterIntake >= 2000 ? 2000 : waterIntake

    function calculatePercentage(exercises, studies, maintenance) {
      setHealth(exercises >= 2 ? 2.5 : 5)

      setFood(food - exercises * 10)
      setWater(water - exercises * 10)
      setSleep(sleep - exercises * 3)

      setFood(food - studies * 5)
      setWater(water - studies * 5)
      setSleep(sleep - studies * 3)

      setFood(food - maintenance * 7)
      setWater(water - maintenance * 5)
      setSleep(sleep - maintenance * 3)
    }

    calculatePercentage()
  }

  pointGrape()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <LinearGradient colors={[colors.principal, colors.secondaryDark, colors.principal]} style={styles.statusContainer}>
          {/* <Progress.Bar progress={0.9} width={350} color={'blue'} height={15} borderRadius={50} /> */}
          <View style={styles.trianguloContainer}>
            <LinearGradient
              colors={[colors.complementarySemiDark, colors.complementarySemiDark, colors.complementary]}
              style={styles.trianguloCima}></LinearGradient>
            <View style={styles.superiorContainer}>
              <View style={styles.firstLineContainer}>
                <View style={styles.iconContainer}>
                  <Icon name='user-astronaut' size={80} color='#fff' />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.nameText}>Astronaut name</Text>
                  <Text style={styles.ageText}>age: 20</Text>
                  <Text style={styles.ageText}>weight: 165,35 lb</Text>
                  <Text style={styles.ageText}>height: 5&#39;10 </Text>
                </View>
              </View>
              {/* =================================================== */}
              <TouchableOpacity style={styles.buttonToDos} onPress={() => navigation.navigate('FormTwo')}>
                <Text style={styles.buttonToDosText}>Update your routine</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.inferiorContainer}>
              <View style={styles.iconContainer}>
                <Icon name='book-reader' size={80} color='#fff' />
              </View>
              <View style={styles.textAdviceContainer}>
                <Text style={styles.nameAdviceText}>Survivor - Advices</Text>
              </View>
              {/* =================================================== */}
              <TouchableOpacity style={styles.buttonAdvice} onPress={() => navigation.navigate('Advice')}>
                <Text style={styles.buttonAdviceText}>View advices</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.statusBarContainer}>
            <View style={styles.progressBarContainer}>
              <Progress.Bar progress={health / 100} width={350} height={20} borderRadius={50} color='green' />
              <Text style={styles.labelProgessBar}>Health - 90%</Text>
            </View>
            <View style={styles.progressBarContainer}>
              <Progress.Bar progress={0.57} width={350} height={20} borderRadius={50} color='orange' />
              <Text style={styles.labelProgessBar}>Food - 57%</Text>
            </View>
            <View style={styles.progressBarContainer}>
              <Progress.Bar progress={0.73} width={350} height={20} borderRadius={50} color='lightblue' />
              <Text style={styles.labelProgessBar}>Water - 73%</Text>
            </View>
            <View style={styles.progressBarContainer}>
              <Progress.Bar progress={0.45} width={350} height={20} borderRadius={50} color='darkviolet' />
              <Text style={styles.labelProgessBar}>Sleep - 45%</Text>
            </View>
            <View style={styles.progressBarContainer}>
              <Progress.Bar progress={0.68} width={350} height={20} borderRadius={50} color='white' />
              <Text style={styles.labelProgessBar}>Melatonin - 68%</Text>
            </View>
            <View style={styles.progressBarContainer}>
              <Progress.Bar progress={0.79} width={350} height={20} borderRadius={50} color='yellow' />
              <Text style={styles.labelProgessBar}>Good contact with light - 79%</Text>
            </View>
          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  )
}

export default StatusScreen

/* 
  routines

  exercices   -> 2
  studies     -> 1
  maintenance -> 3
*/
