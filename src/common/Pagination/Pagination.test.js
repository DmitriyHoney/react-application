
import React from "react";
import {create} from "react-test-renderer";
import Pagination from "./Pagination";


describe("Pagination component test success", () => {
    test("Pages count is 11 but should be showed only 10", () => {
        const component = create(<Pagination portions={10} pageSize={1} totalCount={11}/>);
        const root = component.root;
        const span = root.findAllByType("span");
        expect(span.length).toBe(10);
    })

    test("If pages count is more 10 than displayed button Next", () => {
        const component = create(<Pagination portions={10} pageSize={1} otalCount={11}/>);
        const root = component.root;
        const button = root.findAllByType("button");
        expect(button.length).toBe(1);
    })
})