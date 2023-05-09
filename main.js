const controls = document.querySelectorAll('.control');

let currentItem = 0;
const items = document.querySelectorAll('.item');
const maxItems = items.length;


controls.forEach(Element => {
    Element.addEventListener('click', () => {
        const isLeft = Element.classList.contains('arrow-left');

        console.log(currentItem);
        console.log(maxItems);
        console.log(Element);

        if(isLeft) {
            currentItem -= 1;
        }else{
            currentItem += 1;
        }

        if(currentItem >= maxItems){
            currentItem = 0;
        }

        if(currentItem < 0){
            currentItem = maxItems - 1;
        }

        items.forEach(e => e.classList.remove('current-item'));

        items[currentItem].scrollIntoView({
            inline: "center",
            behavior: 'smooth'
        });

        items[currentItem].classList.add('current-item');
    })
});