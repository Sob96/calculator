import History from '@/components/Calculator/History/HistoryClass'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        history: state.history.history,
    }
}


const HistoryContainer = connect(
    mapStateToProps,
)(History)

export default HistoryContainer