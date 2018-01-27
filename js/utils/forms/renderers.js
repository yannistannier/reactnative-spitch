import React from 'react';
import { Icon, InputGroup, Input, Text, Content, Item, Label, View } from 'native-base';

import styles from '../../themes/styles'

export const renderInput = (field) => {
    const { input, meta, ...props } = field;
    const { onChange, ...restProps } = input;
    var nofloating = false;
    if(field.nofloating)
        nofloating = true

    return (
            <View>
                <Item  
                    style={field.meta.touched && field.meta.error && styles.inputGroupError || styles.inputGroup} 
                    stackedLabel={nofloating} floatingLabel={!nofloating} >

                    <Label>{field.placeholder}</Label>
                    <Input  
                        {...restProps} 
                    	onChange={onChange} 
                        secureTextEntry={field.secure}  />
                </Item>
                {field.meta.touched && field.meta.error && 1 == 2 && <Icon name='ios-close-circle' style={{color:'red'}}/> }
                {field.meta.touched && field.meta.error && <Text note small > {field.meta.error} </Text>}
            </View>
            
    );
};


export const renderInputAsk = (field) => {
    const { input, meta, ...props } = field;
    const { onChange, ...restProps } = input;

    return (
        <Input
          {...restProps}
          placeholder={field.placeholder}
          multiline
          maxLength={140}
          style={{height:120, textAlignVertical: 'top'}}
          autoFocus={true}
          onChange={onChange} 
        />
    )
}