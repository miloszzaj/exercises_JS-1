
const removeTask = (e) => {
    // e.target.parentNode.remove();
    // e.target.parentNode.style.textDecoration = "line-through";
    // e.target.remove();
const index = e.target.dataset.key;
document.querySelector(`li[data-key="${index}"]`).remove()

}

document.querySelectorAll('button').forEach(item => item.addEventListener('click', removeTask));

