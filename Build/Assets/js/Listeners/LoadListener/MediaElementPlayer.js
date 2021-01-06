App.Listeners.LoadListener.push(
    () => {
        $('.news-list-view .image-view video').removeClass('w-100');

        $('video, audio').mediaelementplayer();
    }
);
