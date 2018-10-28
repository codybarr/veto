import Vue from 'vue'

Vue.filter('scripture', (val) => {
    if (!val) {
        return ''
    }

    let trimmedRef = val.trim().replace(/\ /gi, '').replace(/\:/gi, '.')
    return `<a href="https://biblia.com/books/esv/${trimmedRef}" target="_blank">${val}</a>`
})
