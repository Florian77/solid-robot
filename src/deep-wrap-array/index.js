const R = require('ramda');
const wrapArray = require("../wrap-array");

function deepWrapArray(path, data) {

    const head = R.head(path);
    const tail = R.tail(path);

    // console.log(path, JSON.stringify(data,null,2), head, tail);

    if (R.has(head, data)) {
        if (R.isEmpty(tail)) {
            data[head] = wrapArray(data[head]);
        } else {
            const nextData = R.prop(head, data);
            let wrappedData;
            if (R.is(Array, nextData)) {
                // console.log("IS ARRAY", head, nextData);
                wrappedData = [];
                for (let nextItem of nextData) {
                    const wrappedItem = deepWrapArray(tail, nextItem);
                    // console.log("wrappedItem", JSON.stringify(wrappedItem,null,2));
                    wrappedData.push(wrappedItem);
                }
            } else {
                wrappedData = deepWrapArray(tail, nextData);
            }

            // console.log("wrappedData", JSON.stringify(wrappedData,null,2));
            data[head] = wrappedData;
        }

    }
    return data;
}

module.exports = deepWrapArray;
