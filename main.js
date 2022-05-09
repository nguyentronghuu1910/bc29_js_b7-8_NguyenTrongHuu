function getID(id) {
    return document.getElementById(id);
}

// Nhập mảng
var arrList = [];
getID("btnArray").onclick = function() {
    var number = Number(getID("txtArray").value)
        // var emptyArr = "";
    arrList.push(number);
    // New array

    getID("newArray").innerHTML = '[' + arrList.toString() + ']';
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 *  Bài tập 1: Tính tổng các số dương trong mảng
 */

getID("btnKetQua1").onclick = function() {
    // var arrList = getID("txtMang").value;
    var sum = 0;
    for (var i = 0; i < arrList.length; i++) {
        if (arrList[i] >= 0) {
            sum += arrList[i];
        }
    }

    getID("txtKetQua1").innerHTML = `Tổng tất cả số dương trong mảng [${arrList}]: ${sum}`;
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 *  Bài tập 2: Đếm số dương trong mảng
 */
getID("btnKetQua2").onclick = function() {
    var count = 0;
    for (var i = 0; i < arrList.length; i++) {
        if (arrList[i] > 0) {
            count++;
        }
    }

    getID("txtKetQua2").innerHTML = `Có ${count} số dương trong mảng [${arrList}]`;

}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 *  Bài tập 3: Tìm số nhỏ nhất trong mảng
 */
getID("btnKetQua3").onclick = function() {
    var min = arrList[0];
    for (var i = 0; i < arrList.length; i++) {
        if (arrList[i] < min) {
            min = arrList[i];
        }
    }

    getID("txtKetQua3").innerHTML = `Số nhỏ nhất trong mảng [${arrList}]: ${min}`;
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 *  Bài tập 4: Tìm số dương nhỏ nhất trong mảng
 */

getID("btnKetQua4").onclick = function() {
    var minNum = 0;
    var inResult = "";

    for (var i = 0; i < arrList.length; i++) {
        if (arrList[i] > 0) {
            minNum = arrList[i];
            break;
        }
    }

    if (minNum != 0) /* Vì số 0 không phải là số dương và số âm */ {
        for (var i = 0; i <= arrList.length; i++) {
            if (arrList[i] > 0 && arrList[i] < minNum) {
                minNum = arrList[i];
            }
            inResult = `Số dương nhỏ nhất trong mảng [${arrList}]: ${minNum}`;
        }
    } else {
        inResult = `Không có số dương nhỏ nhất trong mảng [${arrList}]`;
    }

    getID("txtKetQua4").innerHTML = inResult;

}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Bài tập 5: Tìm số chẵn cuối cùng của mảng
 */

getID("btnKetQua5").onclick = function() {
    for (var i = arrList.length - 1; i >= 0; i--) {
        if (arrList[i] % 2 == 0 && arrList[i] > 0) {
            getID("txtKetQua5").innerHTML = `Số chẵn cuối cùng trong mảng  [${arrList}]: ${arrList[i]}`;
            break;
        }
        getID("txtKetQua5").innerHTML = -1;
    }
}


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Bài tập 6: Đổi chỗ 2 giá trị trong mảng theo vị trí 
 */


// Lấy giá trị đầu tiên trong mảng
function getA(arrList) {
    for (var index1 = 0; index1 < arrList.length; index1++) {
        return arrList[index1];
    }
}

// Lấy giá trị thứ 2 trong mảng
function getB(arrList) {
    for (var index2 = 0; index2 < arrList.length; index2++) {
        return arrList[index2];
    }
}

// Đổi chỗ vị trí 2 phần thử trong mảng
// Đặt cờ hiệu
var flag;

getID("btnKetQua6").onclick = function() {
    var print = "";

    var index1 = getID("viTri1").value;

    var index2 = getID("viTri2").value;

    // Hoán vị giá trị của 
    if (index1 <= arrList.length && index2 <= arrList.length) {
        flag = arrList[index1];
        arrList[index1] = arrList[index2];
        arrList[index2] = flag;
        print = `Mảng sau khi đổi chỗ 2 vị trí ${index1} và ${index2}: [${arrList}]`;
    } else {
        print = `Không tìm thấy giá trị thứ ${index1} hoặc thứ ${index2} trong mảng. Vui lòng kiểm tra lại phần tử trong mảng!!!!`;
    }

    getID("txtKetQua6").innerHTML = print;

}


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 *  Bài 7: Sắp xếp mảng tăng dần
 */

getID("btnKetQua7").onclick = function() {
    for (var i = 0; i < arrList.length - 1; i++) {
        for (var j = i + 1; j < arrList.length; j++) {
            if (arrList[i] > arrList[j]) {
                // Đặt cờ hiệu
                var temp;
                temp = arrList[i];
                arrList[i] = arrList[j];
                arrList[j] = temp;
            }
        }
        getID("txtKetQua7").innerHTML = `Mảng [${arrList}] sau khi được sắp xếp tăng dần`;

    }
}


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Bài tập 8: Tìm số nguyên tố đầu tiên
 */

/* Kiểm tra số nguyên tố */
function ktSoNguyenTo(x) {
    if (x <= 1) return 0; //0 : false
    for (var j = 2; j <= Math.sqrt(x); j++) {
        if (x % j == 0) return 0;
    }
    return 1; //1 : true
}

getID("btnKetQua8").onclick = function() {
    for (var i = 0; i <= arrList.length - 1; i++) {
        if (ktSoNguyenTo(arrList[i])) {
            getID("txtKetQua8").innerHTML = `Số nguyên tố đầu tiên trong mảng [${arrList}]: ${arrList[i]}`;
            break;
        }

        getID("txtKetQua8").innerHTML = `-1`;
    }
}



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 *  Bài tập 9: Đếm số nguyên
 */

getID("btnKetQua9").onclick = function() {
    var count = 0;
    var ketQua = '';
    for (var i = 0; i <= arrList.length - 1; i++) {
        if (Number.isInteger(arrList[i])) {
            count++;
        }
        ketQua = `Có tất cả ${count} số nguyên trong mảng [${arrList}]`;
    }
    getID("txtKetQua9").innerHTML = ketQua;
}


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Bài tập 10: So sánh số lượng số âm và số dương trong mảng
 */

// Đếm số lượng số dương trong mảng
function _countDuong(arrList) {
    var countDuong = 0;

    for (var i = 0; i <= arrList.length - 1; i++) {
        if (arrList[i] > 0) {
            countDuong++;
        }
    }
    return countDuong;
}

// Đếm số lượng số âm trong mảng
function _countAm(arrList) {
    var countAm = 0;

    for (var i = 0; i <= arrList.length - 1; i++) {
        if (arrList[i] < 0) {
            countAm++;
        }
    }
    return countAm;
}

// So sáng số dương và số âm
getID("btnKetQua10").onclick = function() {
    var content = "";

    if (_countDuong(arrList) > _countAm(arrList)) {
        content = "Số dương > Số âm";
    } else if (_countDuong(arrList) < _countAm(arrList)) {
        content = "Số âm > Số dương";
    } else {
        content = "Số dương = Số âm";
    }

    getID("txtKetQua10").innerHTML = content;
}