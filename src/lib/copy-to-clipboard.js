import copy from "copy-to-clipboard";

export default (data) => {
    let str = "";

    for (let prop in data) {
        if (Object.prototype.hasOwnProperty.call(data, prop)) {
            str += data[prop] + "\n";
        }
    }

    copy(str);
}