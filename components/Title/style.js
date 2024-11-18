import { StyleSheet } from 'react-native';
import { getFontFamily } from '../../assets/helper';
import { scaleFontSize } from '../../assets/styles/scaling';


const style = StyleSheet.create({
        title: {
            color: '#022150',
            fontFamily: getFontFamily('Inter_28pt', '700'),
            fontSize: scaleFontSize(24),
        },
    });

export default style;
