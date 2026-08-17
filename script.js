document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transition = "opacity .7s ease";
        document.body.style.opacity = "1";
    }, 80);

    document.querySelectorAll(".btn").forEach(button => {
        button.addEventListener("click", function () {
            this.style.transform = "scale(.97)";
            setTimeout(() => {
                this.style.transform = "";
            }, 130);
        });
    });
});
