import React from 'react';
import { View, TextInput } from 'react-native';

import { styles } from './PassTextInputStyles';

interface PassTextInputProps {
    pass: string,
}

export function PassTextInput(props: PassTextInputProps) {
    return (
        <TextInput
            style={styles.inputer}
            placeholder='Password'
            value={props.pass}
        />
    );
}