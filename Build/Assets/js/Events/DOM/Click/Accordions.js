App.Events.DOMClickEvent.push(
    () => {
        const $accordions = Elements.findByCType('ce_accordions');

        $accordions.forEach(accordionNode => {
            const $accordion = $(accordionNode);

            $('.item .header-view', $accordion).on('click', e => {
                const $headerView = $(e.currentTarget);
                const $this = $headerView.parent();

                const $parentAccordions = $this.parents('.accordions');

                if (!$this.hasClass('active')) {
                    $('.item.active', $parentAccordions).removeClass('active').find('.rte-view').slideUp('fast');
                    $this.addClass('active').find('.rte-view').slideDown('fast');
                } else {
                    $this.removeClass('active').find('.rte-view').slideUp('fast');
                }
            });
        });
    }
);
