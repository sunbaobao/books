/**
 * Created by Administrator on 2016/11/2.
 */
import { createClass, PropTypes } from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps, store } from './store';

// React createClass
const AppComponent = createClass ({
    //设置 props 数据类型
    propTypes : {
        value: PropTypes.number.isRequired,
        onIncreaseClick: PropTypes.func.isRequired
    },
    render : function() {
        const { value, onIncreaseClick } = this.props;
        return (
            <div>
                <span>{ value }</span>
                <button onClick={ onIncreaseClick }> Click </button>
            </div>
        );
    }
});


// 生成一个新的组件
const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppComponent);

render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('app')
);
