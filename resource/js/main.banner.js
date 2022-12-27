    // 开关状态
    var open = false;
    $('#nav-btn').click(function (){
                // 按钮状态
        $(this).css("background-color", open ? '#333' : '#222');
        var navBar = $('.nav-bar');
                // 设置header的高度，将导航列表显示出来
        var height = navBar.offset().top + navBar.height();
        $('#header').animate({
            height: open ? 50 : height
        });
                // 修改开关状态
        open = !open;
    });
        var new_scroll_position = 0;
        var last_scroll_position;
        var header = document.getElementById("header");
        
        window.addEventListener('scroll', function(e) {
            last_scroll_position = window.scrollY;
        
            // Scrolling down
            if (new_scroll_position < last_scroll_position && last_scroll_position > 80) {
                // header.removeClass('slideDown').addClass('slideUp');
                header.classList.remove("slideDown");
                header.classList.add("slideUp");
        
                // Scrolling up
            } else if (new_scroll_position > last_scroll_position) {
                // header.removeClass('slideUp').addClass('slideDown');
                header.classList.remove("slideUp");
                header.classList.add("slideDown");
            }
        
            new_scroll_position = last_scroll_position;
        });