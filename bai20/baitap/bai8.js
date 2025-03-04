let inputLoop = +prompt("Mời bạn nhập vào số lượng số nguyên tố muốn hiện ra màn hình (>0):");

if (isNaN(inputLoop) || inputLoop <= 0 || !Number.isInteger(inputLoop)) {
    document.write("Đầu vào không hợp lệ!!!");
} else {
    let count = 0;
    let num = 2;

    while (count < inputLoop) {
        let isPrime = true;


        for (let j = 2; j <= Math.sqrt(num); j++) {
            if (num % j == 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            document.write(num + " ");
            count++;
        }

        num++;
    }
}