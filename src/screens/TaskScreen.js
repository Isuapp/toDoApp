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
    const [taskName, setTaskName] = useState();
    const tasks = useSelector(state => state.tasks)
    const state = useSelector(state => state)
    const handleAddTask = () => {
        const taskToDo = {}
        taskToDo.push({
            taskName: taskName,
            taskId: `id-${taskName}`
        })
        dispatch(addTask(taskToDo))
    }



    const handleCompleteTask = () => {
        dispatch(completeTask(taskName))
        console.log('COMPLETED_TASK', taskName)
    }



    return (
        <View style={styles.container}>

            <View style={styles.wraper}>
                <Text style={styles.sectionTitle}>Today's Task</Text>

                <View style={styles.items}>
                    {
                        tasks.map((item, index) => {
                            return (

                                <TouchableOpacity onPress={() => handleCompleteTask()} >
                                    <Task text={item} key={index} />
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
                    onChangeText={text => setTaskName(text)}
                    value={taskName}
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
        marginHorizontal: '5%',
        bottom: 60,
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
    },
    input: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: '75%',
        marginRight: '5%',
    },
    addWraper: {
        width: 50,
        height: 50,
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