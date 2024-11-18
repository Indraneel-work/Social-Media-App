import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import style from "./style";

export const ProfileTabTitle = (props) =>
{
    return(
        <Text style={[style.title, !props.isFocused && style.titleNotFocused]}>{props.title}</Text>
    )
}

ProfileTabTitle.propTypes = {
    title : PropTypes.string.isRequired,
    isFocused : PropTypes.bool.isRequired,
}