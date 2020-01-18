# Code Guideline

## Redux

When creating reducers make sure you are describing an action and not an application state.

### `Action Types`

The coding standards for the action files should follow the next requirements

- All actions types should be defined in the types file with no exception
- All action type names should be captialized
- The names for the actions should describe the expected behaviour

### `Action`

This section aboard some of the topics about creating actions.

- All logic corresponding to an action should be implemented in the action
- Can return a simple object with two properties
  - type: Action Name
  - payload: Values to be send to the reducer
- Can dispatch other actions
- Asyncronous code should be performed in the action, keep in mind that when performing async operations the values in your redux wont be updated until the asnyc call finishes and dispatch an action
- Dispatch a IS_LOADING action when performing async calls

### `Reducer`

In this section you can find some basic rules to design your reducers.

- Always declare an initial state
- Spread the state at the begining of the new state object
- Default cases should return the same state
- Only Handle assignation, never put application logic in the reducers nor create random values, asign dates. The Object should come ready to be assigned
- Only assign serializable values in the store (strins, int, bool, etc)

### `React Component`

- All connection to the store should be defined in a mapStateToProps object
- Functions should be added to the function connection individualy, avoid creating an object containing the functions and passing it as parameter
- Use the isLoading property of the state when performing the async actions in the life cycle methods to render the component or a spinner/null

### Subtitle

`Golden Text`
[HyperLink](HyperLinkUrl)
<br>Line Brake<br>

**Bold**
