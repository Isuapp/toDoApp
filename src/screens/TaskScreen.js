import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import { useDispatch, useSelector } from 'react-redux';
import Task from '../components/Task';
import { addTask, completeTask } from '../store/actions';



export const TaskScreen = () => {
    
    const dispatch = useDispatch()
    const [task, setTask] = useState();
    const tasks = useSelector(state => state.tasks)
    // const [taskItems, setTaskItems] = useState([])

    // const handleAddTask = () => {
    //     setTaskItems([...taskItems, task])
    //
    // }

    // const completeTask = index => {
    //     let itemsCopy = [...taskItems]
    //     itemsCopy.splice(index, 1)
    //     setTaskItems(itemsCopy);
    // }
    const handleAddTask = () => dispatch(addTask(task),  console.log(task))



    const handleCompleteTask = () => {dispatch(completeTask(task)), console.log(task)}



    return (
        <View style={styles.container}>

            <View style={styles.wraper}>
                <Text style={styles.sectionTitle}>Today's Task</Text>

                <View style={styles.items}>
                    {
                        tasks.map((item, index) => {
                            return (

                                <TouchableOpacity onPress={() => handleCompleteTask()} >
                                    <Task  text={item} />
                                </TouchableOpacity>
                            )
                        })
                    }

                </View>

            </View>

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.writeTaskWraper}
            >
                <TextInput
                    placeholder='write a task'
                    style={styles.input}
                    onChangeText={text => setTask(text)}
                    value={task}
                />

                <TouchableOpacity onPress={() => handleAddTask()}>
                    <View style={styles.addWraper}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    wraper: {
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 24,
    },
    items: {
        marginTop: 30,
    },
    writeTaskWraper: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center'
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 250,
    },
    addWraper: {
        width: 60,
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#c0c0c0',
        borderWidth: 1,
    },
    addText: {},
})

export default TaskScreen;