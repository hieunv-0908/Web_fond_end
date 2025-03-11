function chenkNumber(number) {

    if (Number.isInteger(Number(number))) {
        let count = 0;
        for (let i = 1; i < number; i++) {
            if (number % i == 0) {
                count++;
            }
            count == 2 ? console.log
                ("la so nguen to ") : console.log
                ("k phai so nguyen to ")
        }
    }
}
chenkNumber(17);
chenkNumber(6);
chenkNumber("tile");