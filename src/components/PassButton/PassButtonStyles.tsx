import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#0F1035',
        elevation: 3,
        backgroundColor: '#365486'
    },
    text: {
        color: '#DCF2F1',
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        width: '100%',
        textAlign: 'center'
    },
    lengthContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        gap: 10,
    },
    lengthText: {
        backgroundColor: "#7FC7D9",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#0F1035',
        color: '#0F1035',
        fontSize: 20,
        width: '40%',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    lengthTextButton: {
        color: '#DCF2F1',
        textAlign: 'center',
        fontSize: 20,
    },
    lengthButton: {
        backgroundColor: "#365486",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#0F1035',
        elevation: 3,
        width: '26.5%',
    }
});