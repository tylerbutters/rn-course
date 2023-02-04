import { StyleSheet, View, Text, Pressable} from 'react-native';

function GoalItem(props , id) {
    return (
        <Pressable 
        style={({pressed}) => pressed && styles.pressedItem} 
        onPress={props.onDeleteItem.bind(this, props.id)}>
            <View style={styles.goalsItem}>
                <Text style={styles.goalsText}>{props.text}</Text>
            </View>
        </Pressable>
        
    );
};

export default GoalItem;

const styles = StyleSheet.create({
    goalsItem: {
        margin: 10,
        borderRadius: 6,
        backgroundColor: 'white',
        height: 60,
        justifyContent: 'center',
    },
    pressedItem: { 
        opacity: 0.5,
    },
    goalsText: {
        color: '#120438',
        fontSize: 20,
        textAlign: 'center',
        padding: 8,
    },
    
});