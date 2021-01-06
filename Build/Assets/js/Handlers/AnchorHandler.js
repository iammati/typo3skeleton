App.Handler.AnchorHandler = () => {
    const hash = location.hash;

    if (
        hash != '' &&

        // Checks whether the hash does not starts as a number
        !hash.replace('#', '').match(/^\d/)
    ) {
        const $element = $(hash);
        const $ce = $element.parents('.ce');

        let adjustment = 0;

        if ($ce.hasClass('frame-space-before-default')) {
            adjustment += -16;
        }

        if ($ce.hasClass('frame-space-before-small')) {
            adjustment += -32;
        }

        if ($ce.hasClass('frame-space-before-medium')) {
            adjustment += -48;
        }

        if ($ce.hasClass('frame-space-before-large')) {
            adjustment += -64;
        }

        if ($ce.hasClass('frame-space-before-extra-large')) {
            adjustment += -80;
        }

        $(hash).scrollHere(adjustment);
    }
};
