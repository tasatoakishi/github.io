function generatePassword() {
    var length = Math.max(12, document.getElementById("length").value);
    var includeLowercase = document.getElementById("lowercase").checked;
    var includeUppercase = document.getElementById("uppercase").checked;
    var includeNumbers = document.getElementById("numbers").checked;
    var includeSymbols = document.getElementById("symbols").checked;

    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numberChars = "0123456789";
    var symbolChars = "!@#$%^&*()";
    var allChars = "";
    var password = "";

    if (includeLowercase) {
        allChars += lowercaseChars;
        password += lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)];
    }
    if (includeUppercase) {
        allChars += uppercaseChars;
        password += uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)];
    }
    if (includeNumbers) {
        allChars += numberChars;
        password += numberChars[Math.floor(Math.random() * numberChars.length)];
    }
    if (includeSymbols) {
        allChars += symbolChars;
        password += symbolChars[Math.floor(Math.random() * symbolChars.length)];
    }

    for (var i = password.length; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    // パスワードの文字をシャッフル
    password = password.split('').sort(function(){return 0.5-Math.random()}).join('');

    document.getElementById("result").innerText = password;
}