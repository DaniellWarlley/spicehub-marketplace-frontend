export default function getCookie(name) {
    const prefix = `${name}=`

    const cookie = document.cookie
        .split(";")
        .map((item) => item.trim())
        .find((item) => item.startsWith(prefix))

    return cookie
        ? decodeURIComponent(cookie.slice(prefix.length))
        : null
}