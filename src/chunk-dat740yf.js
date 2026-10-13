export async function call(t, e) {
    e.onQueryEvent?.({
        type: "open_message_selector"
    });
    return {
        type: "skip"
    };
}
