function studentRegisterInput({type, name, onkeyup}) {
    return `
    <div>
        <input type="${text}" name="${name}" autocomplete="off" onkeyup="${onkeyup}(event)">
    </div>
    `
}