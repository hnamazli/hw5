const getSquare = size => {
    let str = '';

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            str += '*';
        }
        str += '\n';
    }

    console.log(str);
}

const getSquareEmpty = size => {
    let str = '';

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (i === 0 || i === size - 1 || j === 0 || j === size - 1) {
                str += '*';
            } else {
                str += ' ';
            }
        }
        str += '\n';
    }

    console.log(str);
}

const getTriangleOne = size => {
    let str = '';

    for (let i = size; i > 0; i--) {
        for (let j = 0; j < size + 1; j++) {
            if (j >= i) {
                str += '*';
            } else {
                str += ' ';
            }
        }
        str += '\n';
    }

    console.log(str);
}

const getTriangleTwo = size => {
    let str = '';

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (j <= i) {
                str += '*';
            } else {
                str += ' ';
            }
        }
        str += '\n';
    }

    console.log(str);
}

const getTriangleThree = size => {
    let str = '';

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (i <= j) {
                str += '*';
            } else {
                str += ' ';
            }
        }
        str += '\n';
    }

    console.log(str);
}

const getTriangleFour = size => {
    let str = '';

    for (let i = size; i > 0; i--) {
        for (let j = 0; j < size + 1; j++) {
            if (i > j) {
                str += '*';
            } else {
                str += ' ';
            }
        }
        str += '\n';
    }

    console.log(str);
}

const getTriangleEmpOne = size => {
    let str = '';

    for (let i = 0; i < size; i++) {
        for (let j = size; 0 < j; j--) {
            if (j - 1 === i || j === 1 || i === size - 1) {
                str += '*';
            } else {
                str += ' ';
            }
        }
        str += '\n';
    }

    console.log(str);
}

const getTriangleEmpTwo = size => {
    let str = '';

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (j === i || j === 0 || i === size - 1) {
                str += '*';
            } else {
                str += ' ';
            }
        }
        str += '\n';
    }

    console.log(str);
}

const getTriangleEmpThree = size => {
    let str = '';

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (j === i || i === 0 || j === size - 1) {
                str += '*';
            } else {
                str += ' ';
            }
        }
        str += '\n';
    }

    console.log(str);
}

const getTriangleEmpFour = size => {
    let str = '';

    for (let i = 0; i < size; i++) {
        for (let j = size; 0 < j; j--) {
            if (j - 1 === i || i === 0 || j === size) {
                str += '*';
            } else {
                str += ' ';
            }
        }
        str += '\n';
    }

    console.log(str);
}

const getX = size => {
    let str = '';

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (j === i || i === size - j - 1) {
                str += '*';
            } else {
                str += ' ';
            }
        }
        str += '\n';
    }

    console.log(str);
}

const getEmpSandHour = size => {
    let str = '';

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (j === i || i === size - j - 1 || i === 0 || i === size - 1) {
                str += '*';
            } else {
                str += ' ';
            }
        }
        str += '\n';
    }

    console.log(str);
}

const getSandHour = size => {
    let str = '';

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if ((j < i) && (i >= size - j) || (j > i) && (j < size - i) || j === i || i === size - 1 || i === size - j - 1) {
                str += '*';
            } else {
                str += ' ';
            }
        }
        str += '\n';
    }

    console.log(str);
}