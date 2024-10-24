import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { 
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text, 
  TextInput,
  TouchableOpacity,
  View, 
} from 'react-native';
import { supabase } from "../services/supabase";

export default function App() {
  const [newTask, setNewTask] = useState("");

  const handleAddTask = async (task:string) => {
    const {data, error} = await supabase.from("tasks").insert({ task, completed: false });
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}> Adicione uma nova tarefa</Text>
      <view style={styles.inputContainer}>
        <TextInput 
          style={styles.input} placeholder="Insira aqui." onChangeText={(text) => setNewTask(text)}
          value={newTask}
        />
        <TouchableOpacity style={styles.button}onPress={() => handleAddTask(newTask)}>
          <Text style={styles.buttonText}>Adicionar</Text>
          
        </TouchableOpacity>
      </view>
      <ScrollView>
        <view style={styles.task}>
          <Text style={[styles.textTask, styles.completed]}>MyCrud React</Text>
          <button title='Concluir'/>
          <button title='Eliminar'/>
        </view>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F5F5",
  },

  title: {
    fontSize:20,
    marginBottom:5,
    color: "#333",
  },

  inputContainer: {
    flexDirection: "row",
    marginBottom:20,
  },

  input: {
    flex:1,
    borderWidth:1,
    borderColor: "#CCC",
    padding:10,
    fontSize:18,
    borderRadius: 10,
    marginRight:10,
  },

  button: {
    backgroundColor: "#007bff",
    padding:10,
    borderRadius:5,
  },

  buttonText: {
    color: "#fff",
    fontSize: 10,
    textAlign: "center",
  },

  task: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:15,
    marginBottom:10,
    backgroundColor: "#fff",
    borderRadius:5,
    shadowColor: "#000",
    textShadowOffset: {
      width:0,
      height:2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.4,
    elevation: 5,
  },
  textTask: {
    flex:1,
    fontSize: 18,
  },

  completed: {
    textDecorationLine: "line-through",
    color: "#888",
  },
});

// Metodo de uma string ou vector.