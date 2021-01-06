App.Events.DOMClickEvent.push(
    () => {
        const $header = Elements.$header;
        const $burger = Elements.$burger;

        $burger.on('click', e => {
            const $this = $(e.currentTarget);

            $this.toggleClass('active');
            $header.toggleClass('burger-active');
        });
    }
);
