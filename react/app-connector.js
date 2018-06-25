import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = function (state) {
    return {
        count: state.count
    }
}

const mapDispatchToProps = function (dispatch) {
    return {
        increment: function () {
            dispatch({
                type: 'increment'
            })
        },
        decrement: function () {
            dispatch({
                type: 'decrement'
            })
        }
    }
}

const mergeProps = function (stateProps, dispatchProps, ownProps) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);