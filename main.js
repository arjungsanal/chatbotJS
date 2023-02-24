"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var text = document.querySelector("textarea");
var button = document.querySelector("button");
text.focus();
button.addEventListener("click", function (e) {
    e.preventDefault();
    if (!(text.value.trim() === "")) {
        var message = text.value.trim();
        var msg = document.createElement("div");
        msg.classList.add("sent");
        msg.textContent = text.value;
        document.querySelector(".inputgroup").before(msg);
        text.value = "";
        fetch("https://corsproxy.io/?http://api.brainshop.ai/get?bid=172002&key=WzDHnNNnSFl5HQRc&uid=[uid]&msg=".concat(message))
            .then(function (response) { return response.json(); })
            .then(function (data) {
            var p = document.createElement("p");
            p.textContent = data.cnt;
            var div = document.createElement("div");
            div.classList.add("text");
            div.appendChild(p);
            document.querySelector(".inputgroup").before(div);
            document.querySelector(".inputgroup").scrollIntoView();
        })
            .catch(function (err) {
            console.log(err);
        });
        document.querySelector(".inputgroup").scrollIntoView();
        text.focus();
    }
});
