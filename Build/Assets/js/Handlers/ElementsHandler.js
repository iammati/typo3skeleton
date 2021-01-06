class ElementsHandler {
    /**
     * The all-array includes all Content-Elements of the side
     * provided with a 'data-ctype' attribute. Their keys are
     * equal to a Content-ELement its UID to e.g. doing XHR-requests
     * with UIDs easier or anything else UID-related.
     * 
     * @param {Array}
     */
    all = [];

    /**
     * Constructor to initialize and register all elements which
     * has been rendered in the current page request.
     * 
     * @returns {void}
     */
    constructor() {
        const that = this;

        this.$body = $('body');

        this.$header = $('#header');
        this.$burger = $('#hamburger');
        this.$content = $('#content');
        this.$footer = $('#footer');

        $('[data-ctype]').each((i, element) => {
            const uid = $(element).data('uid');
            const ctype = $(element).data('ctype');

            if (App.isUndefined(that.all[ctype])) {
                that.all[ctype] = [];
            }

            if (!that.all[ctype].includes(uid)) {
                that.all[ctype][uid] = element;
            }
        });
    }

    /**
     * @function findByCType
     * @description Finds all elements loaded at the current site by the provided CType.
     * 
     * @param {String} CType
     * 
     * @returns {String}
     */
    findByCType = CType => {
        const nodes = this.all[CType];

        if (App.isUndefined(nodes)) {
            return [];
        }

        return nodes;
    }

    /**
     * @function findByN
     * @description Retrieves the n element by the provided CType. N is by default 0.
     * 
     * @param {String} CType
     * @param {Number} n
     * 
     * @returns {HTMLElement}
     */
    findByN = (CType, n = 0) => {
        let elements = this.all[CType];

        if (App.isNotUndefined(elements)) {
            elements = elements.findArrByIndex(n);
        }

        return elements;
    }

    /**
     * @function findByUid
     * @description Retrieves the node-element of the DOM by the provided UID.
     * 
     * @param {String} uid
     * 
     * @returns {null|HTMLElement}
     */
    findByUid = (uid, parentid = null) => {
        if (parentid === null) {
            let $element = null;

            $('[data-uid="' + uid + '"]').each((i, elementNode) => {
                if (!$(elementNode).parents('[data-uid="' + parentid + '"]').exists()) {
                    $element = $(elementNode);
                }
            });

            if ($element === null) {
                return null;
            }

            return $element.get(0);
        }

        const $parent = $('[data-uid="' + parentid + '"]');

        return $('[data-uid="' + uid + '"]', $parent).get(0);
    }

    /**
     * @function exists
     * @description Checks whether the provided CType exists in the current page.
     * 
     * @param {String} ctype
     * 
     * @returns {Boolean}
     */
    exists = ctype => this.findByCType(ctype).length > 0
}
