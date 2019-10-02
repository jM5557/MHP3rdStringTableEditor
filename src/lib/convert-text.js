export const convertArrayToFormattedText = (arr) => {
    let text = "";

    arr.filter( (line) => line.length > 0 ).map( (line, index) => {
        if (arr.length > 0 && index > 0) {
            text += "<NEWLINE>";
        }

        text += line;
    });

    return text;
}

let convertTextWithoutNewlineToArray = (str, lineLength, maxLineCount) => {
    let lengthPattern = new RegExp(".{1," + lineLength + "}", "g");
    let lines = str.match(lengthPattern) || [];

    return lines.slice(0, maxLineCount);
}

let convertTextWithNewlineToArray = (str, lineLength) => {
    let lines = str.split("<NEWLINE>");

    lines = lines.map( (line) => {
        return line.slice(0, lineLength);
    });

    return lines;
}

export const convertDetailsToArray = (str, lineLength, maxLineCount) => {
    if (str.indexOf("<NEWLINE>") > -1)
        return convertTextWithNewlineToArray(str, lineLength);
    
    return convertTextWithoutNewlineToArray(str, lineLength, maxLineCount);
}

export const convertTextToFormattedText = (str, lineLength, maxLineCount) => {
    if (str.indexOf("<NEWLINE>") > -1)
        return str;
    
    // Add <NEWLINE> if there is none
    let lines = convertTextWithoutNewlineToArray(str, lineLength, maxLineCount);
    let currentLine = "";

    for (let i = 0; i < lines.length; i++) {
        if (i > 0) {
            currentLine += "<NEWLINE>";
        }
        
        currentLine += lines[i];
    }

    return currentLine;
}
