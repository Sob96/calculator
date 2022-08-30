import { connect } from 'react-redux'
import Display from '@/components/Calculator/Display/DisplayClass'

const mapStateToProps = state => {
    return {
        display: state.calculation.display,
    }
}

const DisplayContainer = connect(
    mapStateToProps,
)(Display)

export default DisplayContainer