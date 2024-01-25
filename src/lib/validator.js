export function checkInput(input) {
    const regex = /[a-zA-Z0-9]/;

    if (regex.test(input)) return true;
    return false;
}
