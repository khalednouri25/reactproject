export default class store {
    static get (key) {
        if (localStorage.getItem(key) != null && localStorage.getItem(key) != undefined) {
            return localStorage.getItem(key)
        } else {
            return null
        }
    }
}