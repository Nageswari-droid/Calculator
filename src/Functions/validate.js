const validate = (inputOne, inputTwo, setError) => {
    if(isNaN(inputOne) || isNaN(inputTwo) || typeof(inputTwo) === "string" || typeof(inputOne) === "string"){
        setError(true);
        return false;
    }
    else{
        return true;
    }
}

export default validate;