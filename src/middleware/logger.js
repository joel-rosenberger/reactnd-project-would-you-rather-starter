const logger = (store) => (next) => (action) => {
    console.group(action.type)
        console.log('Action', action)
        console.log("Old state:", store.getState())
        const returnValue = next(action)
        console.log('New state:', store.getState())
        console.groupEnd();
        return returnValue
}

export default logger