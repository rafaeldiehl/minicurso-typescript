function logDetails(uid, item) {
    console.log("A product with " + uid + " has a title as " + item + ".");
}
function logInfo(uid, user) {
    console.log("A user with " + uid + " has a name as " + user + ".");
}
function renderPlatform(platform) {
    return platform;
}
renderPlatform("Windows");
logDetails(123, "sapato");
logDetails("123", "sapato");
logInfo(123, "Rafael");
logInfo("123", "Rafael");
