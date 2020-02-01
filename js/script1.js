window.addEventListener("load", function() {
    let itemsTab = document.querySelectorAll(".question_block_quest");
    for(let i = 0; i < itemsTab.length; i++) {
        itemsTab[i].addEventListener("click", function() {
            let activeLink = document.querySelector(".question_block_quest_active");
            activeLink.classList.remove("question_block_quest_active");
            activeLink.nextElementSibling.classList.remove("question_block_answer_active");
            let iconsActive = document.querySelector(".quest_fa_active");
            iconsActive.classList.remove("quest_fa_active");
            this.classList.add("question_block_quest_active");
            this.nextElementSibling.classList.add("question_block_answer_active");
            this.lastElementChild.classList.add("quest_fa_active");
        });
    }
    

    let itemsPrice = document.querySelectorAll(".price_list_title");
            for(let i = 0; i < itemsPrice.length; i++) {
                itemsPrice[i].addEventListener("click", function() {
                    let activePrice = document.querySelector(".price_list_title_active");
                    activePrice.classList.remove("price_list_title_active");
                    let activePriceIcon = document.querySelector(".price_icon_active");
                    activePriceIcon.classList.remove("price_icon_active");
                    let activePriceBlock = document.querySelector(".price_list_list_active");
                    activePriceBlock.classList.remove("price_list_list_active");
                    this.classList.add("price_list_title_active");
                    this.lastElementChild.classList.add("price_icon_active");
                    this.nextElementSibling.classList.add("price_list_list_active");
                });
            }


    let popUpBtn = document.querySelectorAll(".popUp_but");
    let popUpContainer = document.querySelector(".popUp_container");
    let popUpClose = document.querySelector(".popUp_icon");
    for(let i = 0; i < popUpBtn.length; i++) {
        popUpBtn[i].addEventListener("click", function() {
            popUpContainer.style.display = "block";
        });
    }
    popUpClose.addEventListener("click", function() {
        popUpContainer.style.display = "none";
    });
    
    


   
});

