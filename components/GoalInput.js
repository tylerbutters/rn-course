import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal, Image, ImageBase } from 'react-native';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

  

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')}/>
                <TextInput
                    style={styles.textInput}
                    placeholder='Enter New Goal'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}> 
                    <View style={styles.button}>
                        <Button title='CANCEL' onPress={props.onCancel} color='#f312a2'/> 
                    </View>
                    <View style={styles.button}>
                        <Button title='ADD' onPress={addGoalHandler} color='#b180f0'/>
                    </View>
                </View>
                
            </View>
        </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        padding: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#311B6b'
    },
    textInput: {
        backgroundColor: 'white',
        borderRadius:6,
        width: '100%',
        color: '#120438',
        padding: 16,
        //height: 70,
    },
    buttonContainer:{
        marginTop: 16,
        flexDirection: 'row'
    },
    button: {
        width:'30%',
        marginHorizontal: 8,
    },
    image:{
        width: 200,
        height: 200,
        margin: 20,
    }
});
