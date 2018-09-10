function sendRespone() {
    var quest1 = document.getElementById("question1").value,
        quest2 = document.getElementById("question2").value,
        quest3 = document.getElementById("question3").value,
        quest4 = document.getElementById("question4").value,
        quest5 = document.getElementById("question5").value,
        quest6 = document.getElementById("question6").value,
        quest7 = document.getElementById("question7").value,
        quest8 = document.getElementById("question8").value,
        quest9 = document.getElementById("question9").value,
        quest10 = document.getElementById("question10").value,
        quest11 = document.getElementById("question11").value,
        quest12 = document.getElementById("question12").value,
        quest13 = document.getElementById("question13").value,
        quest14 = document.getElementById("question14").value,
        quest15 = document.getElementById("question15").value,
        quest16 = document.getElementById("question16").value;
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var email = document.getElementById("email").value;
    //&& quest2 && quest3 && quest4 && quest5 && quest6 && quest7 && quest8 && quest9 && quest10 && quest11 && quest12 && quest13 && quest14 && quest15 && quest16
    if (quest1 === "correct") {
        window.alert("correct");
        window.location.href = "mailto:k.mason5@outlook.com?subject=CSW Quiz results&body=" + firstName + " " + lastName + ", thanks for playing! \n You have been entered in the drawing! We will notify you via " + email + " if your name is drawn.";
    } else {
        window.alert("Please ReCheck Results using the 'Check Results' Button");
    }
}

function checkResult() {
    checkResult1();
    checkResult2();
    checkResult3();
    checkResult4();
    checkResult5();
    checkResult6();
    checkResult7();
    checkResult8();
    checkResult9();
    checkResult10();
    checkResult11();
    checkResult12();
    checkResult13();
    checkResult14();
    checkResult15();
    checkResult16();

}

function checkResult1() {
    var quest1 = document.getElementById("question1").value;
    var confirm = false;
    if (quest1 === "correct") {
        document.getElementById("tdA").style.backgroundColor = "#b6ff0b";
        document.getElementById("tdA").style.color = "black";
        confirm = true;
    } else {
        document.getElementById("tdA").style.backgroundColor = "#42444f"
        document.getElementById("tdA").style.color = "white";
    }
    if (confirm === true) {
        return true;
    }
}

function checkResult2() {
    var quest2 = document.getElementById("question2").value;
    var confirm = false;
    if (quest2 === "correct") {
        document.getElementById("tdB").style.backgroundColor = "#b6ff0b";
        document.getElementById("tdB").style.color = "black";
        confirm = true;
    } else {
        document.getElementById("tdB").style.backgroundColor = "#42444f"
        document.getElementById("tdB").style.color = "white";
    }
    if (confirm === true) {
        return true;
    }
}

function checkResult3() {
    var quest1 = document.getElementById("question3").value;
    var confirm = false;
    if (quest1 === "correct") {
        document.getElementById("tdC").style.backgroundColor = "#b6ff0b";
        document.getElementById("tdC").style.color = "black";
        confirm = true;
    } else {
        document.getElementById("tdC").style.backgroundColor = "#42444f"
        document.getElementById("tdC").style.color = "white";
    }
    if (confirm === true) {
        return true;
    }
}

function checkResult4() {
    var quest1 = document.getElementById("question4").value;
    var confirm = false;
    if (quest1 === "correct") {
        document.getElementById("tdD").style.backgroundColor = "#b6ff0b";
        document.getElementById("tdD").style.color = "black";
        confirm = true;
    } else {
        document.getElementById("tdD").style.backgroundColor = "#42444f"
        document.getElementById("tdD").style.color = "white";
    }
    if (confirm === true) {
        return true;
    }
}

function checkResult5() {
    var quest1 = document.getElementById("question5").value;
    var confirm = false;
    if (quest1 === "correct") {
        document.getElementById("tdE").style.backgroundColor = "#b6ff0b";
        document.getElementById("tdE").style.color = "black";
        confirm = true;
    } else {
        document.getElementById("tdE").style.backgroundColor = "#1f2025"
        document.getElementById("tdE").style.color = "white";
    }
    if (confirm === true) {
        return true;
    }
}

function checkResult6() {
    var quest2 = document.getElementById("question6").value;

    var confirm = false;
    if (quest2 === "correct") {
        document.getElementById("tdF").style.backgroundColor = "#b6ff0b";
        document.getElementById("tdF").style.color = "black";
        confirm = true;
    } else {
        document.getElementById("tdF").style.backgroundColor = "#1f2025"
        document.getElementById("tdF").style.color = "white";
    }
    if (confirm === true) {
        return true;
    }
}

function checkResult7() {
    var quest1 = document.getElementById("question7").value;
    var confirm = false;
    if (quest1 === "correct") {
        document.getElementById("tdG").style.backgroundColor = "#b6ff0b";
        document.getElementById("tdG").style.color = "black";
        confirm = true;
    } else {
        document.getElementById("tdG").style.backgroundColor = "#1f2025"
        document.getElementById("tdG").style.color = "white";
    }
    if (confirm === true) {
        return true;
    }
}

function checkResult8() {
    var quest1 = document.getElementById("question8").value;
    var confirm = false;
    if (quest1 === "correct") {
        document.getElementById("tdH").style.backgroundColor = "#b6ff0b";
        document.getElementById("tdH").style.color = "black";
        confirm = true;
    } else {
        document.getElementById("tdH").style.backgroundColor = "#1f2025"
        document.getElementById("tdH").style.color = "white";
    }
    if (confirm === true) {
        return true;
    }
}

function checkResult9() {
    var quest1 = document.getElementById("question9").value;
    var confirm = false;
    if (quest1 === "correct") {
        document.getElementById("tdI").style.backgroundColor = "#b6ff0b";
        document.getElementById("tdI").style.color = "black";
        confirm = true;
    } else {
        document.getElementById("tdI").style.backgroundColor = "#42444f"
        document.getElementById("tdI").style.color = "white";
    }
    if (confirm === true) {
        return true;
    }
}

function checkResult10() {
    var quest2 = document.getElementById("question10").value;
    var confirm = false;
    if (quest2 === "correct") {
        document.getElementById("tdJ").style.backgroundColor = "#b6ff0b";
        document.getElementById("tdJ").style.color = "black";
        confirm = true;
    } else {
        document.getElementById("tdJ").style.backgroundColor = "#42444f"
        document.getElementById("tdJ").style.color = "white";
    }
    if (confirm === true) {
        return true;
    }
}

function checkResult11() {
    var quest1 = document.getElementById("question11").value;
    var confirm = false;
    if (quest1 === "correct") {
        document.getElementById("tdK").style.backgroundColor = "#b6ff0b";
        document.getElementById("tdK").style.color = "black";
        confirm = true;
    } else {
        document.getElementById("tdK").style.backgroundColor = "#42444f"
        document.getElementById("tdK").style.color = "white";
    }
    if (confirm === true) {
        return true;
    }
}

function checkResult12() {
    var quest1 = document.getElementById("question12").value;
    var confirm = false;
    if (quest1 === "correct") {
        document.getElementById("tdL").style.backgroundColor = "#b6ff0b";
        document.getElementById("tdL").style.color = "black";
        confirm = true;
    } else {
        document.getElementById("tdL").style.backgroundColor = "#42444f"
        document.getElementById("tdL").style.color = "white";
    }
    if (confirm === true) {
        return true;
    }
}

function checkResult13() {
    var quest1 = document.getElementById("question13").value;
    var confirm = false;
    if (quest1 === "correct") {
        document.getElementById("tdM").style.backgroundColor = "#b6ff0b";
        document.getElementById("tdM").style.color = "black";
        confirm = true;
    } else {
        document.getElementById("tdM").style.backgroundColor = "#1f2025"
        document.getElementById("tdM").style.color = "white";
    }
    if (confirm === true) {
        return true;
    }
}

function checkResult14() {
    var quest2 = document.getElementById("question14").value;
    var confirm = false;
    if (quest2 === "correct") {
        document.getElementById("tdN").style.backgroundColor = "#b6ff0b";
        document.getElementById("tdN").style.color = "black";
        confirm = true;
    } else {
        document.getElementById("tdN").style.backgroundColor = "#1f2025"
        document.getElementById("tdN").style.color = "white";
    }
    if (confirm === true) {
        return true;
    }
}

function checkResult15() {
    var quest1 = document.getElementById("question15").value;
    var confirm = false;
    if (quest1 === "correct") {
        document.getElementById("tdO").style.backgroundColor = "#b6ff0b";
        document.getElementById("tdO").style.color = "black";
        confirm = true;
    } else {
        document.getElementById("tdO").style.backgroundColor = "#1f2025"
        document.getElementById("tdO").style.color = "white";
    }
    if (confirm === true) {
        return true;
    }
}

function checkResult16() {
    var quest1 = document.getElementById("question16").value;
    var confirm = false;
    if (quest1 === "correct") {
        document.getElementById("tdP").style.backgroundColor = "#b6ff0b";
        document.getElementById("tdP").style.color = "black";
        confirm = true;
    } else {
        document.getElementById("tdP").style.backgroundColor = "#1f2025"
        document.getElementById("tdP").style.color = "white";
    }
    if (confirm === true) {
        return true;
    }
}