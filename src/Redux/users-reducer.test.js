import usersReducer, {addUserToSubscribeStack} from "./users-reducer";

let state = {
    usersInSubscribeProcess: [],
};


test('User add to stack', () => {
    //1. Test data
    let action = addUserToSubscribeStack(2);
    //2. New data
    let newState = usersReducer(state, action);
    //3. Expect
    expect(newState.usersInSubscribeProcess).toContain(2);
});