// Setting the words to rotate
const words = ["Code Ninja", "Experience Maker", "Front-End Wizard", "UI/UX Designer"];
const count = 0;



// Function for word rotation on interval
let i = 0;
setInterval( function(rotate){
    $('span.rotate').empty().append( words[ i ] );
    if( i < words.length ) {
        i++;
    } else {
        i = 0;
    }
}, 2000 );

// Next learn how to apply styles to these changes that are being made by the JS file and fix the empty string that's being applied. 