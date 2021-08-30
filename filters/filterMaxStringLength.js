const filterMaxStringLength = (str, max) => {
    if (str.length > max) {
        return `${str.slice(0, max)}...`;
    }
    return str;
};

export default filterMaxStringLength;
