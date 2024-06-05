import { Button, StyleSheet, Text, View, TouchableOpacity,FlatList } from 'react-native'
import React, { useState } from 'react'
import GlobalStyle from '../styles/globalStyle'
import DropCheckBox from '../components/filter/DropCheckBox'

const FilterScreen = () => {
  const [brandState,setBrandState] = useState<number[]>([])

  const setXXX = (i:number) => {
    const j = brandState.find(item => item == i)
    console.log(j);
    
    if (j == undefined) {
      setBrandState([...brandState,i])
    }else{
      setBrandState(brandState.filter(item => item != i))
    }
    console.log(brandState);
  }
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={styles.txtTitle}>Filter</Text>
        <Text>Clear all</Text>
      </View>

      <DropCheckBox 
        title='Brand' 
        itemCheck={brandState} 
        data={['Asus','Acer','Apple','Dell']} 
        onPressItem={(index) =>{ setXXX(index)
           console.log(index);
        }}
      />
      <DropCheckBox 
        title='Brand' 
        itemCheck={brandState} 
        data={['Asus','Acer','Apple','Dell']} 
        onPressItem={(index) => setXXX(index)}
      />



      <View style={GlobalStyle.viewRow}>
        <Button title='Bỏ chọn'/>
        <Button title='Xem kết quả'/>
      </View>

    </View>
  )
}

export default FilterScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:24
  },
  txtTitle:{
    color:'black',
    fontSize:18,
    fontWeight:'700'
  }
})

// import React from 'react';
// import { FlatList, Text } from 'react-native';

// interface FilterChoosedProps {
//   content: string;
//   onPress: () => void;
// }

// const FilterChoosed: React.FC<FilterChoosedProps> = ({ content, onPress }) => {
//   return (
//     <TouchableOpacity style={{ flexDirection: 'row' }} onPress={onPress}>
//       <Text>{content}</Text>
//     </TouchableOpacity>
//   );
// };

// const YourComponent: React.FC = () => {
//   const data = [
//     { id: '1', content: 'Filter 1' },
//     { id: '2', content: 'Filter 2' },
//     // Add more data as needed
//   ];

//   const renderItem = ({ item }: { item: { id: string; content: string } }) => {
//     return <FilterChoosed content={item.content} onPress={() => handlePress(item.id)} />;
//   };

//   const handlePress = (id: string) => {
//     // Handle press logic here
//     console.log('Pressed item with id:', id);
//   };

//   return <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id} />;
// };

// export default YourComponent;
