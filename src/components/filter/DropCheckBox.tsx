import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'
import GlobalStyle from '../../styles/globalStyle'
import CheckBox from '../CheckBox'
interface DropCheckBoxProps{
  title:string,
  data: Array<string>,
  itemCheck:number[],
  onPressItem:(index: number) => void
}
const DropCheckBox: React.FC<DropCheckBoxProps> = ({title,data,itemCheck,onPressItem}) => {
  const [show,setShow] = useState(true)
  return (
    <View>
      <TouchableOpacity style={styles.containerTitle} onPress={() => setShow(!show)}>
        <Text style={styles.txtTitle}>{title}</Text>
        <Text>{show ? 'Hide':'Show'}</Text>
      </TouchableOpacity>
      { show ?
        data.map((item,index)=>{
          return(
            <TouchableOpacity 
              key={index} 
              style={GlobalStyle.viewRow} 
              onPress={() => onPressItem(index)}
            >
              <CheckBox isCheck={itemCheck.includes(index)} onPress={() => onPressItem(index)}/>
              <Text>{item}</Text>
            </TouchableOpacity>
          )
        })
        :
        null
      }
    </View>
  )
}

export default DropCheckBox

const styles = StyleSheet.create({
  containerTitle:{
    flexDirection:'row',
    alignItems:'center',
  },
  txtTitle:{
    flex:1,
    color:'black',
    marginVertical:5
  }
})