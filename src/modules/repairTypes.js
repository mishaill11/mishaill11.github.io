'use strict';

const repairTypes = () => {
    const repairTypes = document.querySelector('.repair-types'), 
    repairTypesNavItem = document.querySelectorAll('.repair-types-nav__item'),
    navListRepair = document.querySelector('.nav-list-repair'),
    sliders = document.querySelectorAll('.types-repair1, .types-repair2, .types-repair3, .types-repair4, .types-repair5'),
    contentTotal = document.querySelector('.slider-counter-content__total');

    let contentCurrent = document.querySelector('.slider-counter-content__current');
    let numSlider = 0, count = 0, left = 0;
    contentTotal.textContent = sliders[0].children.length;
    repairTypes.addEventListener('click', event => {
        let target = event.target;
        if (target.closest('.repair-types-nav__item')) {
            repairTypesNavItem.forEach((elem,i) => {
                if (target === elem) {
                    for (let key of sliders) {
                        key.style.display = 'none';
                    }
                    elem.classList.add('active');
                    sliders[i].style.display = 'block';
                    contentCurrent.textContent = 1;
                    contentTotal.textContent = sliders[i].children.length;
                    numSlider = i;
                    count = 0;
                } else {
                    elem.classList.remove('active');
                }
                
            });
        }
        if (target.closest('#repair-types-arrow_left')){
            for (let key of sliders[numSlider].children){
                key.style.display = 'none';
            }
            if (count <= 0) {
                count = sliders[numSlider].children.length;
            }
            count--;
            sliders[numSlider].children[count].style.display = 'block';
            contentCurrent.textContent = count+1;
            
             
        }
        if (target.closest('#repair-types-arrow_right')){
            for (let key of sliders[numSlider].children){
                key.style.display = 'none';
            }count++;
            if (count >= sliders[numSlider].children.length){
                count = 0;
            }
            contentCurrent.textContent = count + 1;
            sliders[numSlider].children[count].style.display = 'block';
            
            
        }
        if (target.closest('#nav-arrow-repair-left_base')){
            if (document.documentElement.clientWidth <= 1024 && document.documentElement.clientWidth > 575){
                left-=100;
                navListRepair.style.position = 'relative';
                navListRepair.style.left = left+'px';
                if (left <= -500) {
                    left = 100;
                }
            } else if (document.documentElement.clientWidth <= 575){
                if (left <= -900) {
                    left = 100;
                }
                left-=100;
                navListRepair.style.position = 'relative';
                navListRepair.style.left = left+'px';
                
            }
        } else if (target.closest('#nav-arrow-repair-right_base')){
            left = 0;
            if (document.documentElement.clientWidth <= 1024){
                navListRepair.style.position = 'relative';
                navListRepair.style.left = 0 +'px';
            }
        }
    });
};

export default repairTypes;