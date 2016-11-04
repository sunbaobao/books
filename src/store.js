/**
 * Created by Administrator on 2016/11/2.
 */
import { createStore } from 'redux';

// 定义数据的行为，什么情况下触发这个数据
const addAction = {
    type: 'add'
};

// 声明数据具体如何变化
function counter(state = { count: 0 }, action = {}) {
    const count = state.count ;
    switch (action.type) {
        case 'add':
            return {
                count: count + 1
            };
        default:
            return state;
    }
}

// 将修数据传递给组件
function mapStateToProps(state) {
    return {
        value: state.count
    }
}

// 改变数据
function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => {
            return dispatch(addAction);
        }
    }
}

// 创建一个数据对象
const store = createStore(counter);

export { mapStateToProps, mapDispatchToProps, store };
