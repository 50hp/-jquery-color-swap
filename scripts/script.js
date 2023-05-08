//calls on ready function
$(onReady)

// on page load do this.
function onReady() {

        $('.genBtn').on('click', genDiv);
        $('.divSection').on('click', '.yellow', colorSwitch);
        $('.divSection').on('click', '.del', removeDiv);
        displayCount();
}

let clickCount = 0;

function genDiv() {

        $('.divSection').append(`
        
            <div class="child">hello

            <button class="yellow">Yellow</button>

            <button class="del">Delete</button>

            </div>
        
        `);
clickCount += 1;
displayCount();



}

function displayCount() {

        $('#counter').text(clickCount);



}

function colorSwitch() {
        // console.log('hello'); 
        $(this).parent().css({backgroundColor: "yellow"})


}

function removeDiv() {
    // console.log('hello2');
    $(this).parent().remove();

    clickCount -= 1;
    displayCount();

}