export default class store {
    static get (key) {
        if (localStorage.getItem(key) != null && localStorage.getItem(key) != undefined) {
            console.log(localStorage)
            return localStorage.getItem(key)
        } else {
            console.log(localStorage)
            return null
        }
    }
}