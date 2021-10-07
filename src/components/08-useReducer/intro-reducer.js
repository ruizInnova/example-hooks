// Example for use Reducer

const initialState = [{ 
    id: 1, 
    activity: 'Study React',
    done: false
}];

//1.- first Reducer Example

const todoReducer = (state = initialState, action) => {
    // 6.- value function addTodoAction your type example 'Add'
    if(action?.type === 'Add'){
        return [ ...state, action.payload ];
    }
    return state;
}

// 2.- invocate  todoReducer
let todos = todoReducer();

// 3.- Add new Element  never not push please

const newTodo = {
    id: 2, 
    activity: 'Study English',
    done: false
}

// 4.- Create actions for controlling reduce
const addTodoAction = {
    type: 'Add',
    payload: newTodo
}

// 5.- execute actions for todos

todos = todoReducer(todos, addTodoAction);


console.log(todos);
