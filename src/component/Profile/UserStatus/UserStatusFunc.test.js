import React from "react";
import { create } from "react-test-renderer";
import {UserStatus} from "./UserStatus";


describe("UserStatus Component Success All tests", () => {
    test("Status check", () => {
        const component = create(<UserStatus status="Любовь"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("Любовь");
    });

    test("OffEditMode check", () => {
        const component = create(<UserStatus status="Любовь"/>);
        const root = component.root;
        const p  = root.findByType("p")
        expect(p.props.children).toBe("Любовь");
    });

    test("OnEditMode check", () => {
        const component = create(<UserStatus status="Любовь"/>);
        const root = component.root;
        const p  = root.findByType("p")
        p.props.onDoubleClick();
        const input = root.findByType("input");
        expect(input.props.value).toBe("Любовь");
    });

    test("Callback was called", () => {
        const stub = jest.fn();
        const component = create(<UserStatus status="Любовь" updateUserStatusThunkCallback={stub}/>);
        const instance = component.getInstance();

        instance.offEditMode({target: {value: 'wow'}});
        expect(stub.mock.calls.length).toBe(1);
    });

});