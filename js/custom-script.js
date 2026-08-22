jQuery(document).ready(function() {
    $(function() {
        // jquery typed plugin
        $('.typed').typed({
            stringsElement: $('.typed-strings'),
            typeSpeed: 100,
            backDelay: 500,
            loop: true,
            contentType: 'html', // or text
            // defaults to false for infinite loop
            loopCount: false,
            callback: function() { null },
            resetCallback: function() { newTyped() },
        })
    })
})

// Удаляет высоту body Непонятно в каком месте она задана
jQuery(document).ready(function() {
    document.body.style.removeProperty('height')
});

