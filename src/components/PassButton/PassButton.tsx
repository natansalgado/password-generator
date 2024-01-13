import React, { useState } from 'react';
import { Text, View, Pressable } from 'react-native';
import { PassTextInput } from '../PassTextInput/PassTextInput';
import changePass from '../../services/passwordService';
import * as Clipboard from 'expo-clipboard';

import { styles } from './PassButtonStyles';

export function PassButton() {
    const [pass, setPass] = useState('');
    const [passLength, setPassLength] = useState(10);

    const handleGenerateButton = () => {
        setPass(changePass(passLength));
    }

    const handleCopyButton = () => {
        Clipboard.setStringAsync(pass);
    }

    const handleAddLength = () => {
        if (passLength < 25) {
            setPassLength(passLength + 1);
        }
    }

    const handleDecLength = () => {
        if (passLength > 3) {
            setPassLength(passLength - 1);
        }
    }

    return (
        <>
            <PassTextInput pass={pass} />

            <View style={styles.lengthContainer}>
                <Pressable style={styles.lengthButton} onPress={handleDecLength}>
                    <Text style={styles.lengthTextButton}>
                        -
                    </Text>
                </Pressable>

                <Text style={styles.lengthText}>
                    {passLength}
                </Text>

                <Pressable style={styles.lengthButton} onPress={handleAddLength}>
                    <Text style={styles.lengthTextButton}>
                        +
                    </Text>
                </Pressable>
            </View>

            <Pressable style={styles.button} onPress={handleGenerateButton}>
                <Text style={styles.text}>
                    GENERATE
                </Text>
            </Pressable>

            <Pressable style={styles.button}>
                <Text style={styles.text} onPress={handleCopyButton}>
                    COPY
                </Text>
            </Pressable>
        </>
    );
}