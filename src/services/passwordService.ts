
export default function generatePass(length: number) {
    let password: string = '';
    let characters: string = 'AaBbCcDdEeFfGgHhIiJj1234567890!@#$%'

    for (let i = 0; i < length; i++) {
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        )
    }

    return password;
}