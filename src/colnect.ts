import '../styles/colnect.less';

declare const $: JQueryStatic;

declare const Inventory: {
    updateQC: (e: JQuery.ClickEvent, n: HTMLElement) => {};
    spanCBup: (n: HTMLElement) => {};
};

const loc = document.location.href;

const type = (loc => {
    if (loc.includes('/coins/')) {
        return 'coins';
    }
    if (loc.includes('/banknotes/')) {
        return 'banknotes';
    }
    if (loc.includes('/stamps/')) {
        return 'stamps';
    }
    if (loc.includes('/medals/')) {
        return 'medals';
    }
    if (loc.includes('/tokens/')) {
        return 'tokens';
    }
    return 'other';
})(loc);

$('body').addClass(type);


const itemFullDetails = $('#item_full_details');
const itemCondition = $(`> .ibox > .ibox_list[data-lt="2"] .pop.condition`, itemFullDetails);

const {updateQC: _updateQC, spanCBup: _spanCBup} = Inventory;

if (type === 'coins' && loc.includes('/coin/')) {
    const itemYearVariants = $(`> .year_variants > ul > li[data-id]`, itemFullDetails);

    let currentPopCondition: JQuery;

    const mouseOverCondition = (li: JQuery) => {
        const popCondition = $('.ibox_list[data-lt="2"] > .pop.condition', li);
        if (popCondition) {
            popCondition.trigger('mouseover');
        }
        return popCondition;
    };

    // clicking on year row
    itemYearVariants.each((i, itemYearVariant) => {
        $(itemYearVariant).on('click', e => {
            currentPopCondition = mouseOverCondition($(e.currentTarget));
        });
    });


    const _q: { [key: string]: number } = {P: 1, FA: 2, G: 3, VG: 4, FI: 5, VF: 6, XF: 7, UNC: 8, BU: 9, FDC: 10};

    const q = (s: string) => (s && s in _q) ? _q[s] : 0;


    //

    const qualityList = $('#quality_list');

    const updateOverallCondition = (e: JQuery.ClickEvent, current: number) => {
        const variants: number[] = [];

        itemYearVariants.each((i, n) => {
            const qn = ($('ul.oth_inv', n).text().split(':', 2).pop() ?? '').trim();
            variants.push(n.classList.contains('open')
                ? current
                : q(qn));
        });

        const best = Math.max(...variants);
        if (best && best !== q(itemCondition.text())) {
            itemCondition.trigger('mouseover');
            _updateQC(e, $(`#quality_list a[data-value="${best}"]`, itemCondition)[0]);
            if (currentPopCondition && currentPopCondition.length) {
                currentPopCondition.trigger('mouseover');
            } else {
                itemCondition.trigger('mouseout');
            }
        }
    };

    Inventory.updateQC = (e: JQuery.ClickEvent, n: HTMLElement) => {
        const _r = _updateQC(e, n);
        updateOverallCondition(e, +$('a[data-value]', n).data('value'));
        return _r;
    };

    Inventory.spanCBup = (n: HTMLElement) => {
        const _r = _spanCBup(n);
        if (n.classList.contains('cb_checked')) {
            // @ts-ignore
            updateOverallCondition(event, 0, null);
        } else {
            itemCondition.trigger('mouseover');
        }
        return _r;
    };

    $('li', qualityList)
        .off('click')
        .on('click', e => Inventory.updateQC(e, e.currentTarget));
} else {
    Inventory.spanCBup = (n: HTMLElement) => {
        const _r = _spanCBup(n);

        if (!n.classList.contains('cb_checked')) {
            itemCondition.trigger('mouseover');
        }

        return _r;
    };
}
