App.ContentElements.IRREs.push(
    {
        id: 'ce_accordions',

        callback: ctype => {
            const accordionNodes = Elements.findByCType(ctype);

            /**
             * Iterating through all CE: Accordions
             * and 'annulating' the first td of each tr which has an empty/no text.
             * 
             * Also adding the default click handler registration for the normal accordion behaviour.
             */
            accordionNodes.forEach(itemNode => {
                const $this = $(itemNode);

                $('.item', $this).each((i, itemNode) => {
                    const $item = $(itemNode);
                    const $table = $('table', $item);

                    $('tr td', $table).each((i, tdNode) => {
                        const $td = $(tdNode);
                        const text = $td.text().trim();

                        if (text == '' && $td.index() == 0) {
                            $td.css('border-bottom', '1px solid transparent');
                        }
                    });

                    $('.top', $item).on('click', e => {
                        const $top = $(e.currentTarget);
                        const $accordion = $top.parent();
                        const $items = $accordion.parent();

                        if (!$accordion.hasClass('active')) {
                            $('.item.active', $items).removeClass('active').find('.bottom').slideUp();
                            $accordion.addClass('active').find('.bottom').slideDown();
                        } else {
                            $accordion.removeClass('active').find('.bottom').slideUp();
                        }
                    });
                });
            });
        }
    }
);
