const initialState = {
	todos: ['Vacuum', 'Dry Cleaning', 'Laundry'],
	inProgress: ['Learn Redux'],
	completed: ['Learn HTML'],
	userInput: ''
}

export default function reducer(state=initialState, action) {
	switch(action.type) {
		case 'HANDLE_USER_INPUT':
			return Object.assign({}, state, {userInput: action.payload})
		case 'ADD_TODO':
			return Object.assign({}, state, {todos: [...state.todos, action.payload]})
		case 'IN_PROGRESS':
			var arrCopy = state.todos.slice();
			arrCopy.splice(arrCopy.indexOf(action.payload), 1);
			return Object.assign(
				{},
				state,
				{	
					todos: [...arrCopy],
					inProgress: [...state.inProgress, action.payload]
				}
			)
		case 'COMPLETED':
			var inProgressCopy = state.inProgress.slice();
			inProgressCopy.splice(inProgressCopy.indexOf(action.payload), 1);
			return Object.assign(
				{},
				state,
				{
					inProgress: [...inProgressCopy],
					completed: [...state.completed, action.payload]
				}
			)
		case 'REMOVE':
			var completedCopy = state.completed.slice();
			completedCopy.splice(completedCopy.indexOf(action.payload), 1);
			return Object.assign(
					{},
					state, 
					{completed: [...completedCopy]}
				)
		case 'RESET_INPUT':
			return Object.assign(
					{},
					state,
					{userInput: action.payload}
				)
		default: 
			return state;

	}
}

export function handleUserInput(input) {
	return {
		type: 'HANDLE_USER_INPUT',
		payload: input
	}
}

export function addTodoAction(item) {
	return {
		type: 'ADD_TODO',
		payload: item
	}
}

export function inProgressAction(item) {
	return {
		type: 'IN_PROGRESS',
		payload: item
	}
}

export function completedAction(item) {
	return {
		type: 'COMPLETED',
		payload: item
	}
}

export function removeItem(item) {
	return {
		type: 'REMOVE',
		payload: item
	}
}

export function resetInput() {
	return {
		type: 'RESET_INPUT',
		payload: ''
	}
}
