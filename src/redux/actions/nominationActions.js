export const addNominee = (nominee) => ({
    type: "ADD_NOMINEE",
    payload: nominee,
});

export const removeNominee = (nominee) => ({
    type: "REMOVE_NOMINEE",
    payload: nominee,
});
