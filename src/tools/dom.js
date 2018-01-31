/**
 * from jquery offset
 * @param elem
 * @returns {{top: number, left: number}}
 */
export function offset(elem) {
    // Get document-relative position by adding viewport scroll to viewport-relative gBCR
    let rect = elem.getBoundingClientRect();
    let win = elem.ownerDocument.defaultView;
    return {
        top: rect.top + win.pageYOffset,
        left: rect.left + win.pageXOffset
    };
}
