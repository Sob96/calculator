import Display from '@/components/Calculator/Display/DisplayClass'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        display: state.calculation.display,
    }
}

const DisplayContainer = connect(
    mapStateToProps,
)(Display)

export default DisplayContainer