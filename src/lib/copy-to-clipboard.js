import copy from "copy-to-clipboard";

export default (data) => {
    let str = "";

    if (typeof data === "string") {
        str = data
    } else {
        for (let prop in data) {
            if (Object.prototype.hasOwnProperty.call(data, prop)) {
                str += data[prop] + "\n";
            }
        }
    }

    copy(str);
}