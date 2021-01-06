App.Utility.EqualHeightUtility = ($row, targetedSelector = '> div') => {
    let height = 0;

    $(targetedSelector, $row).removeAttr('style');

    $(targetedSelector, $row).each((i, columnNode) => {
        const columnHeight = $(columnNode).outerHeight();

        if(columnHeight > height) {
            height = columnHeight;
        }
    });

    $(targetedSelector, $row).css('height', height);
};
