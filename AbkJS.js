/* Dark Mode */

var Dark = document.querySelector('.card_toggle');
var All = document.querySelector('.top');

Dark.onclick = ()=> {
    All.classList.toggle('is-dark');
}
