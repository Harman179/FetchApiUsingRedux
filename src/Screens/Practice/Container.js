import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addition, subtraction } from './Action1';
import { getCities } from './Action1';

const Container = (props) => {
 // const data = useSelector((state) => state.counter);
  // const dispatch = useDispatch();
  const {counter,cities} = useSelector(state => state.mainReducer);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getCities());
  }, []);

    return (
    <View style={{alignSelf:'center', width:'100%', alignItems:'center', padding:20, backgroundColor:'#f0eded', flex:1, justifyContent:'center'}}>
      <Text> Counter</Text>
       <TouchableOpacity onPress={() => dispatch(addition())}>
         <View style={{width:60,height:35, backgroundColor:'lightblue', justifyContent:'center',}}>
          <Text style={{alignSelf:'center', color:'purple', fontSize:22}}>+</Text>
         </View>
       </TouchableOpacity>
        <Text style={{color:'red'}}>{counter}</Text>
       <TouchableOpacity onPress={() => dispatch(subtraction())}>
         <View style={{width:60,height:35, backgroundColor:'lightblue', marginTop:20,}}>
          <Text style={{alignSelf:'center', color:'purple', fontSize:25}}>-</Text>
         </View>
       </TouchableOpacity>
       <View style={{flexDirection:'row',padding:20,alignItems:'center'}}>
       <Text style={{color:'black', fontFamily:'Quintessential-Regular'}}>Name : </Text>
         <TextInput placeholder='Enter Name' style={{borderRadius:10, backgroundColor:'lightblue',width:'80%', color:'black',alignSelf:'center',alignItems:"center"}}></TextInput>
         </View>    
         <View style={{flexDirection:'row',padding:20,alignItems:'center'}}>
       <Text style={{color:'black',fontFamily:'Quintessential-Regular',}}>City  : </Text>
         <TextInput placeholder='Enter City' style={{borderRadius:10, backgroundColor:'lightblue',width:'80%', color:'black',alignSelf:'center',alignItems:"center"}}></TextInput>
         </View>    
         <View style={{flex:1,width:'100%'}}>

         <FlatList
         showsVerticalScrollIndicator={false}
         data={cities}
         renderItem={({ item }) => (
           <View style={{width:'100%', alignSelf:'center',alignItems:'center',padding:20, color:'blue',backgroundColor:'lightpink', borderColor:'royalblue', borderWidth:3, marginTop:20,}}>
             <Text style={{fontSize:26,fontFamily:'Quintessential-Regular'}}>{item.name}</Text>
             <Text style={{fontFamily:'Yellowtail-Regular', fontSize:19, color:'royalblue'}}>{item.city}</Text>
             </View>
         )}
        keyExtractor ={(item, index) =>index.toString()}
         />
         </View>
    </View>
  );
};



export default Container;
