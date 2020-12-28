// boolean (true/false)
var isOpen;
isOpen = true;
// string ('foo', "foo", `foo`)
var message;
message = "foo " + isOpen;
// number (int, float, hex, binary)
var total;
total = 42;
// array (type[] ou Array<type>)
var items;
items = ["foo", "bar"];
// tuple
var title;
title = [1, "Lorem ipsum dolor sit amet"];
// enum
var Colors;
(function (Colors) {
    Colors["white"] = "#FFFFFF";
    Colors["black"] = "#000000";
    Colors["blue"] = "#0066FF";
})(Colors || (Colors = {}));
// any (qualquer coisa) Não é legal!
var coisa;
coisa = ['1', 2, "foo"];
// void (vazio)
function logger() {
    console.log('foo');
}
var variable; /* Quase nunca faz sentido */
// never
function error() {
    throw new Error("error");
}
// object
var cart;
cart = {
    foo: "bar"
};
// Type Inference
var note = "Nota definida";
note = "Nova nota definida";
window.addEventListener('click', function (e) {
    console.log(e.target);
});
