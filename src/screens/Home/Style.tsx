import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: '#DCF2F1',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'center',
        paddingBottom: 5,
    },
    inputContainer: {
        width: '80%',
        flexDirection: 'column'
    }
});

export default styles;