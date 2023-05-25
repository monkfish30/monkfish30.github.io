
// Pure Javascript
// Sliding Testimonials

var arrayContent = ['"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate quisquam omnis nemo quasi aliquam, accusamus rem incidunt dolorem eos sit commodi et nihil repudiandae cupiditate obcaecati veritatis nisi nostrum laborum?"', '"As I came out of the cinema on Saturday night, I thought to myself, that was brilliant. Barely realising how long it had been, I couldn’t remember the last time I." ', '"I won’t say anymore about what happens because I don’t want to ruin the best film of the year – granted its only January but I have a feeling this will be very hard to."' ];

var arrayName = ['Jean Paul', 'Sophie', 'Mike Head'];

var delay = 15000;

var i = 0

function change () {

    slider.innerHTML = arrayContent[i];
    customer.innerHTML = "-" + " " + arrayName[i]
    
if (i < arrayContent.length - 1) {

 i++
    
} else {
    i=0
};

setTimeout('change()', delay);

};

//Jquery

$(document).ready(function(){

 change();

 //Mobile menu toggle

$(function() {

    mobMenuToggle();
    closeMobMenu();

});
Toggle mobile menu

function mobMenuToggle() {

    $(".burgermenu").click(function(){

        $(".mobilemenu").slideToggle("fast");

        return false
    })
};

//Close mobile menu on click away

function closeMobMenu() {

    $("html").click(function(){

    $(".mobilemenu").hide();
   
})

};

//Close mobile menu when resizing screen

$(window).resize(function() {

   $(".mobilemenu").hide();
});

});






















































































































