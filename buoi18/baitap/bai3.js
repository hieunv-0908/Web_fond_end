let user = prompt("Please enter userName:");
if (user == "ADMIN") {
    let password = prompt("Please enter password:");
    if (password == "TheMaster") {
        document.write("<b>Wellcome</b>");
    } else if (password == "Null") {
        document.write("<b>Cancelled</b>");
    } else {
        document.write("<b>Wrong password.</b>");
    }
} else if (user == "null") {
    document.write("<b>Cancelled</b>");
} else {
    document.write("<b>I Don’t know you</b>");
};
