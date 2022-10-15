const plainBox = document.querySelector(".box-text-container");
const unorderedText = document.querySelector(".unordered-text-con");

const listItem = document.querySelectorAll(".list-item");
console.log(listItem);

plainBox.addEventListener("click", function() {
    if(unorderedText.style.display === "none") {
        // console.log("Hello");
        unorderedText.style.display = "block";


        listItem.forEach(function(lists) {
            lists.addEventListener("mouseover", function(e) {
                if(unorderedText.style.display === "block") {
                    e.currentTarget.style.backgroundColor = "#CFCFCF"
                }
            })
        })

        listItem.forEach(function(lists) {
            lists.addEventListener("mouseout", function(e) {
                if(unorderedText.style.display === "block") {
                    e.currentTarget.style.backgroundColor = "unset"
            
                }
            })
        })


    }
    else {
        unorderedText.style.display = "none";
        // console.log("I am here");
    }
});












