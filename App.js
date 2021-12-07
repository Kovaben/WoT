
import * as React from 'react';
import { Button,View, Text,Image,StyleSheet,TextInput,useState, ShadowPropTypesIOS} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { blockStatement } from '@babel/types';

/*
function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}
*/
/*
function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}
*/

const values ={
    answer1:'',
    answers:''
}
var score=0;

function checkanswer(alma){

  if (values.answer1==alma) {
    score=score+1;
      return 'Q11'
  }
  else 
      return 'Q11'


}



function checkanswer1(alma){

  if (values.answer2==alma) {
    score=score+1;
      return 'Victory'
  }
  else 
      return 'Victory'


}
const screens=['Q0','Q1','Q2','Q3','Q4']
function Question1({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#515342' }}>
      <Text style={styles.text}>Question: How many gun options are there for the tier 10 heavy, the E-100?</Text>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image style={styles.qimg} source={require('./Img/E-100.png')}/>
        </View>
      <View   style={styles.button}>
      <Button color='#b21016'
        title="1"
        onPress={() => navigation.replace('Q1')}
      /> 
      </View>
     <View  style={styles.button}>
     <Button color='#b21016' 
        title="2"
        onPress={() => {navigation.replace('Q1');score=score+1}}
      /> 
     </View>
      <View style={styles.button}>
      <Button color='#b21016'  
        title="3"
        onPress={() => navigation.replace('Q1')}
      /> 
      </View>
     
    </View>
  );
}

function Question2({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#515342' }}>
      <Text  style={styles.text}>What is the name of the new style available in season 6 of the battle pass for the Centurion Action X?</Text>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image style={styles.qimg} style={styles.qimg} source={require('./Img/CAX.png')}/>
        </View>
      <View  style={styles.button}>
      <Button color='#b21016' 
        title="Primipilus."
        onPress={() => {navigation.replace('Q2');score=score+1}}
      /> 
      </View>
     <View style={styles.button}>
     <Button color='#b21016'  
        title="Praetorian"
        onPress={() => navigation.replace('Q2')}
      /> 
     </View>
     <View style={styles.button}>
     <Button color='#b21016'  
        title="Aurelius "
        onPress={() => navigation.replace('Q2')}
      /> 
     </View>
     
    </View>
  );
}



function Question3({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#515342' }}>
      <Text style={styles.text}> When it was first introduced, what was the top speed of the legendary T95 (aka: The Doom Turtle)?</Text>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image style={styles.qimg} source={require('./Img/T95.png')}/>
        </View>
      <View   style={styles.button}>
      <Button color='#b21016'
        title="20km/h"
        onPress={() => navigation.replace('Q3')}
      /> 
      </View>
      <View   style={styles.button}>
      <Button color='#b21016'  
        title="13km/h"
        onPress={() => {navigation.replace('Q3');score=score+1}}
      /> 
      </View>
     <View style={styles.button}>
     <Button color='#b21016'
        title="18km/h"
        onPress={() => navigation.replace('Q3')}
      /> 
     </View>
      
    </View>
  );
}


function Question4({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#515342' }}>
      <Text style={styles.text}>What is the intra clip reload of the the Skoda T50?</Text>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image style={styles.qimg} source={require('./Img/SkodaT50.png')}/>
        </View>
      <View style={styles.button}>
      <Button color='#b21016'  
        title="1.8 seconds"
        onPress={() => {navigation.replace('Q4');score=score+1}}
      /> 
      </View>
     <View  style={styles.button}>
     <Button  color='#b21016' 
        title="20 seconds"
        onPress={() => navigation.replace('Q4')}
      /> 
     </View>
      <View style={styles.button} >
      <Button color='#b21016'
        title="2 seconds"
        onPress={() => navigation.replace('Q4')}
      /> 
      </View>
      
    </View>
  );
}

function Question5({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#515342' }}>
      <Text style={styles.text}>What makes the full upgraded Panther II look ridiculous?</Text>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image style={styles.qimg} source={require('./Img/PANTII.png')}/>

      </View>
      <View  style={styles.button}>
      <Button color='#b21016' 
        title="Turret Size"
        onPress={() => navigation.replace('Q5')}
      /> 
      </View>
      <View  style={styles.button}>
      <Button color='#b21016'
        title="Gun barrel length"
        onPress={() => {navigation.replace('Q5');score=score+1}}
      /> 
       </View>
     <View   style={styles.button}>
     <Button color='#b21016'
        title="The smiley face on one of the wheels"
        onPress={() => navigation.replace('Q5')}
      /> 
     </View>
     
    </View>
  );
}

function Question6({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#515342' }}>
      <Text style={styles.text}>What tank is this?</Text>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image style={styles.qimg} source={require('./Img/RU251.png')}/>
        </View>
      <View style={styles.button}>
      <Button color='#b21016'  
        title="HWK 12"
        onPress={() => navigation.replace('Q6')}
      /> 
      </View>
     <View  style={styles.button}>
      <Button  color='#b21016'
        title="HWK 30"
        onPress={() => navigation.replace('Q6')}
      /> 
        </View>
      <View style={styles.button}>
      <Button color='#b21016'  
        title="Spähpanzer Ru 251"
        onPress={() => {navigation.replace('Q6');score=score+1}}
      /> 
      </View>
      
    </View>
  );
}
function Question7({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#515342' }}>
      <Text  style={styles.text}>What's the standard dpm for the Progetto M35 mod. 46?</Text>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image style={styles.qimg} source={require('./Img/PROG.png')}/>
        </View>
      <View  style={styles.button}>
      <Button color='#b21016' 
        title="1988"
        onPress={() => navigation.replace('Q7')}
      /> 
      </View>
      <View  style={styles.button}>
      <Button color='#b21016'  
        title="2086"
        onPress={() => {navigation.replace('Q7');score=score+1}}
      /> 
      </View>
      <View  style={styles.button}>
      <Button color='#b21016'  
        title="2200"
        onPress={() => navigation.replace('Q7')}
      /> 
      </View>
      
    </View>
  );
}
function Question8({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#515342' }}>
      <Text  style={styles.text}>What is the the alpha damage of the Bat.-Châtillon Bourrasque?</Text>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image style={styles.qimg} source={require('./Img/BOUR.png')}/>
        </View>
      <View  style={styles.button}>
      <Button color='#b21016'  
        title="280"
        onPress={() => navigation.replace('Q8')}
      /> 
      </View>
      <View  style={styles.button}>
      <Button color='#b21016'  
        title="320"
        onPress={() => navigation.replace('Q8')}
      /> 
      </View>
      <View  style={styles.button}> 
      <Button color='#b21016' 
        title="360"
        onPress={() => {navigation.replace('Q8');score=score+1}}
      /> 
      </View>
    </View>
  );
}

function Question9({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#515342' }}>
      <Text  style={styles.text}>The Super Pershing had additonal imporvised armor added on the feild. What was the additional armor made of?</Text>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image style={styles.qimg} source={require('./Img/SUPERP.png')}/>
        </View>
      <View  style={styles.button}>
      <Button color='#b21016'  
        title="Sheet metal found in shed"
        onPress={() => navigation.replace('Q9')}
      /> 
      </View>
      <View  style={styles.button}>
      <Button color='#b21016'  
        title="Sheet metal found in an abandoned German factory"
        onPress={() => navigation.replace('Q9')}
      /> 
      </View>
      <View  style={styles.button}> 
      <Button color='#b21016' 
        title="Armor of destroyed Panthers"
        onPress={() => {navigation.replace('Q9');score=score+1}}
      /> 
      </View>
    </View>
  );
}

function Question10({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#515342' }}>
      <Text  style={styles.text}>The swedish Strv. 103 series (aka: The S-Tank) is portrayed as tank destroyers in WOT. What are type of vehiciles are they according the Swedish military?</Text>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image style={styles.qimg} source={require('./Img/STRV103.png')}/>
        </View>
      <View  style={styles.button}>
      <Button color='#b21016'  
        title="Self Propelled Gun"
        onPress={() => navigation.replace('Q10')}
      /> 
      </View>
      <View  style={styles.button}>
      <Button color='#b21016'  
        title="Medium Tank"
        onPress={() => navigation.replace('Q10')}
      /> 
      </View>
      <View  style={styles.button}> 
      <Button color='#b21016' 
        title="Main Battle Tank"
        onPress={() => {navigation.replace('Q10');score=score+1}}
      /> 
      </View>
    </View>
  );
}

function Question11({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#515342' }}>
      <Text  style={styles.text}>What's the alpha damage of the IS-3A?(number only) </Text>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image style={styles.qimg} source={require('./Img/IS-3A.png')}/>
        </View>

      <TextInput style={styles.input}
        placeholder="write the answer here "
        onChangeText={(val) => values.answer1 = val}
      />
      <View style={styles.button}>
      <Button color='#b21016'  
        title="submit ."
        onPress={() => navigation.replace( checkanswer('390'))}
      /> 
      </View>
      
    </View>
  );
}


function Question12({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#515342' }}>
      <Text style={styles.text}>How many gun barrels on the IS-2-II? (number only)</Text>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image style={styles.qimg} source={require('./Img/IS-2-II.png')}/>
        </View>
      <TextInput  style={styles.input}
        placeholder="write the answer here "
        onChangeText={(val2) => values.answer2 =val2 }
      />

      <View style={styles.button}>
      <Button color='#b21016'   
        title="submit"
        onPress={() => navigation.replace( checkanswer1('2'))}
      /> 
      </View>
    </View>
  );
}





function START({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , backgroundColor:'#515342'}}>
     <View style={{paddingBottom:100, width: null,height: null,  }}> 
     
     </View>
      <Text style={styles.text}>World of Tanks Quiz</Text>
      <View style={styles.button}>
      <Button color='#b21016'  
        title="PLAY!"
        onPress={() => {navigation.replace('Q0');score=0}}
      />
     </View>
    </View>
  )
}


function Victory({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'#515342' }}>
      <Text  style={styles.text}>NOOB TEAM! Your score: {score}</Text>
      <View>
        <Image source={require('./Img/victory.png')}  />
      </View>
      <View  style={styles.button}>
      <Button  color='#b21016'
        title="Main"
        onPress={() => navigation.replace('START')}
      />
      </View>
    </View>
  );
}


function losescreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'#515342' }}>
      <Text style={styles.text}>Maybe next time </Text>
      <View>
        <Image source={require('./Img/Defeat.gif')}  />
      </View>
     <View  style={styles.button}>
      <Button color='#b21016'
        title="Try again"
        onPress={() => navigation.replace('START')}
      />
    </View>
    </View>
  );
}



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="START" component={START} />
        <Stack.Screen name="Q0" component={Question1} />
        <Stack.Screen name="Q1" component={Question2} />
        <Stack.Screen name="Q2" component={Question3} />
        <Stack.Screen name="Q3" component={Question4} />
        <Stack.Screen name="Q4" component={Question5} />
        <Stack.Screen name="Q5" component={Question6} />
        <Stack.Screen name="Q6" component={Question7} />
        <Stack.Screen name="Q7" component={Question8} />
        <Stack.Screen name="Q8" component={Question9} />
        <Stack.Screen name="Q9" component={Question10} />
        <Stack.Screen name="Q10" component={Question11} />
        <Stack.Screen name="Q11" component={Question12} />
        <Stack.Screen name="Victory" component={Victory} />
        <Stack.Screen name="fail" component={losescreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Gq1(){
  navigation.replace('Q1');
  score=score+1;

}

const styles=StyleSheet.create({

    text:{
      fontSize: 26,
      color:'white',
      paddingBottom: 70,
      fontWeight: 'bold',
      
    },
    button:{
    marginTop:20,
    paddingTop:20,
    paddingBottom:20,
    width: 200,
    color:'#b21016'
    
    },
    input:{
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
     borderColor: 'green'
    },
    qimg:{
     minWidth: 300,
     minHeight:300,
    }

})


export default App;