function createInt8TypedArray(length, position, value) {
    //check if the value is less < 0 or greater than length,
    //adding the value wont be possible if this happens 
    if (position < 0 || position >= length){
        throw new Error("Position outside range");
    };

    //creating the buffer
    const buffer = new ArrayBuffer(length);
    // to access the buffer
    const int8view = new Int8Array(buffer);
    //to set the position of a index of the buffer using variable"position"
    int8view[position] = value;
    return buffer;

};