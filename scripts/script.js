
document.addEventListener("DOMContentLoaded", selectHome)

const homeOption = document.querySelector(".home-option")
const blogOption = document.querySelector(".blog-option")
const contactOption = document.querySelector(".contact-option")

homeOption.addEventListener('click', selectHome)

blogOption.addEventListener('click', selectBlog)

contactOption.addEventListener('click', selectContact)

function selectHome(){

    const homeScreen = document.querySelector(".home") 

    document.querySelector(".home").style.display = "flex";

    if(document.querySelector(".home").style.display = "flex"){

        document.querySelector(".home-option").style.color = "#FF3131"

        if(document.querySelector(".home-option").style.color = "#FF3131"){

            document.querySelector(".blog-option").style.color = ""
            document.querySelector(".contact-option").style.color = ""
        }
        
        document.querySelector(".blog").style.display = "none";
        document.querySelector(".contact").style.display = "none";
    }


}

function selectBlog(){

    document.querySelector(".blog").style.display = "flex";

    if(document.querySelector(".blog").style.display = "flex"){

        document.querySelector(".blog-option").style.color = "#FF3131"

        if(document.querySelector(".blog-option").style.color = "#FF3131"){

            document.querySelector(".home-option").style.color = ""
            document.querySelector(".contact-option").style.color = ""
        }
        

        document.querySelector(".home").style.display = "none";
        document.querySelector(".contact").style.display = "none";
    }

}

function selectContact(){

    document.querySelector(".contact").style.display = "flex";

    document.querySelector(".contact-option").style.color = "#FF3131"

        if(document.querySelector(".contact-option").style.color = "#FF3131"){

            document.querySelector(".blog-option").style.color = ""
            document.querySelector(".home-option").style.color = ""
        }

    if(document.querySelector(".contact").style.display = "flex"){
        
        document.querySelector(".blog").style.display = "none";
        document.querySelector(".home").style.display = "none";
    }


}