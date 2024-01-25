function showContent(button) {
    var content = button.parentElement.nextElementSibling.querySelector('.content');

    content.classList.toggle('hidden');

    var plusIcon = button.querySelector('.plus');
    var minusIcon = button.querySelector('.minus');

    plusIcon.classList.toggle('hidden');
    minusIcon.classList.toggle('hidden');
}