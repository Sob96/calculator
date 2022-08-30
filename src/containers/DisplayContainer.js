import Display from '@/components/Calculator/Display/DisplayClass'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        number: state.calculation.number,
        result: state.calculation.result,
        display: state.calculation.display,
        operator: state.calculation.operator,

    }
}

const DisplayContainer = connect(
    mapStateToProps,
)(Display)

export default DisplayContainer