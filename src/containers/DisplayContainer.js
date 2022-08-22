import Display from '@/components/Calculator/Display/DisplayClass'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        number: state.number.number,
    }
}

const DisplayContainer = connect(
    mapStateToProps,
)(Display)

export default DisplayContainer