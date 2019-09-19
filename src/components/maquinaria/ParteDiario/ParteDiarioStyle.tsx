import { StyleSheet } from 'react-native';
import AppStyles from '../../../config/styles';
import Metrics from '../../../config/metrics';

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },    
    card: {
        width: Metrics.DEVICE_WIDTH / 2.1,
        height: Metrics.DEVICE_HEIGHT / 3.2,
        margin: 5
    },
    cardView: {
        width: Metrics.DEVICE_WIDTH / 2.1,
        height: Metrics.DEVICE_HEIGHT / 3.2,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    footer: {
        width: Metrics.DEVICE_WIDTH / 2.1 - 16,
        paddingVertical: 22,
        alignItems: 'center',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: AppStyles.colors.separator
    },
    nameView: {
        alignItems: 'center',
        padding: 8,
        paddingTop: 16
    },
    nameText: {
        marginTop: 8,
        color: AppStyles.colors.black,
        fontSize: 12,
        textAlign: 'center'
    },
    last: {
        marginTop: 4,
        color: AppStyles.colors.grey,
        fontSize: 10,
        textAlign: 'center'
    },
    members: {
        color: AppStyles.colors.grey,
        fontSize: 10,
        textAlign: 'center'
    },
    list: {
        flexDirection: 'column',      
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default styles;