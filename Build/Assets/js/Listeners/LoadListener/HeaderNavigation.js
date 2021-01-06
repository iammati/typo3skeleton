App.Listeners.LoadListener.push(
    () => {
        const $header = Elements.$header;
        const $navItems = $('.nav .nav-item', $header);

        $navItems.on('mouseenter', e => {
            $navItems.removeClass('hover');

            const $this = $(e.currentTarget);

            $this.addClass('hover');
        });

        $('.nav, .hover-nav', $header).on('mouseleave', e => {
            $navItems.removeClass('hover');
        });
    }
);
