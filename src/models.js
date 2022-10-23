export const count = {
    state: 0,
    reducers: {
        increment: (state, payload) => state + 1,
    },
    effects: (dispatch) => ({
        async asyncIncrement() {
            await new Promise((resolve) => {
                setTimeout(resolve, 1000)
            })
            dispatch.count.increment()
        },
    }),
}
export const selecteditem = {
    state: { itemname: "", itemid: "", itemininventory: "", itemonshelf: "", importedday: "", itembought: "" },
    reducers: {
        changeSelectedItem: (state, payload) => state = payload,
    },
    effects: (dispatch) => ({
        async asyncIncrement() {
            await new Promise((resolve) => {
                setTimeout(resolve, 1000)
            })
            dispatch.count.increment()
        },
    }),
}