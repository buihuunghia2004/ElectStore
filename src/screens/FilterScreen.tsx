import { Button, StyleSheet, Text, View, TouchableOpacity,FlatList } from 'react-native'
import React, { useState } from 'react'
import GlobalStyle from '../styles/GlobalStyle'
import DropCheckBox from '../components/filter/DropCheckBox'

interface FilterChoosedProps{
  content:string,
  onPress: () => void
}
const FilterChoosed: React.FC<FilterChoosedProps> = ({content,onPress}) => {
  return(
    <TouchableOpacity style={{flexDirection:'row'}} onPress={onPress}>
      <Text>{content}</Text>
    </TouchableOpacity>
  )
}

const FilterScreen = () => {
  const [filter,setFilter] = useState(['Hp','Học tập - văn phòng'])
  const [brandState,setBrandState] = useState(0)
  return (
    <View style={styles.container}>
      <Button title='Đóng'/>
      
      <View style={styles.container}>
        <Text style={styles.txtTitle}>Tiêu chí đã chọn:</Text>
      </View>

      <DropCheckBox 
        title='Brand' 
        itemCheck={brandState} 
        data={['Asus','Acer','Apple','Dell']} 
        onPressItem={(index) => {setBrandState(index)}}
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
    flex:1
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
