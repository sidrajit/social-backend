const functions = {
    prettyCase: (str) => {
        if (typeof str !== "string") return "";
        return str
            .replace(/[-_]/g, " ")
            .replace(/\b\w/g, (char) => char.toUpperCase());
    }
};

export default () => (req, res, next) => {
    res.success = async (message, data) => {
        message = await findMessage(message, process.env.lang);
        return res.send({
            statusCode: 200,
            message,
            data: data || {},
        });
    };

    // error
    res.error = async (code, message, data, _) => {
        if (typeof message == "object") {
            message = await findMessage(message, process.env.lang);
        }
        if (isValidJSON(message)) {
            message = await findMessage(JSON.parse(message), process.env.lang);
        }

        console.log(code, message, data);
        code = code ? code : 400;
        return res.status(code).send({
            statusCode: code,
            message,
            data: data || {},
        });
    };

    next();
}

const findMessage = async (arr, lang) => {
    if (!Array.isArray(arr)) {
        return arr;
    }
    for (const element of arr) {
        if (element.lang === lang) {
            return functions.prettyCase(element.value);
        }
    }
    return arr[0] ? arr[0].value : ""; 
};
function isValidJSON(str) {
    try {
        JSON.parse(str);
        return true;
    } catch (e) {
        return false;
    }
}