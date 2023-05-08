//calls on ready function
$(onReady)

// on page load do this.
function onReady() {

        $('.genBtn').on('click', genDiv);
        $('.divSection').on('click', '.yellow', colorSwitch);
        $('.divSection').on('click', '.del', removeDiv);
        // displayCount();
}
//counts the amount of buttons generated.
let clickCount = 1;

//when called generates new div with 2 buttons as children.
// then adds 1 to click count and calls displayCount
function genDiv() {

        $('.divSection').append(`
        
            <div class="child">
            <p>${clickCount}</p>

            <button class="yellow">Yellow</button>

            <button class="del">Delete</button>

            </div>
        
        `);
clickCount += 1;
// displayCount();



}
//changes the text displayed on the dom based on the value of clickCount.
// function displayCount() {

//         $('#counter').text(clickCount);



// }
//switches the background color to yellow.
function colorSwitch() {
        // console.log('hello'); 
        $(this).parent().css({backgroundColor: "yellow"})


}
//removes the parent of this when clicked.
//subtracts on form the clickCount and calls the displayCount.
function removeDiv() {
    // console.log('hello2');
    $(this).parent().remove();

    // clickCount -= 1;
    // displayCount();

}