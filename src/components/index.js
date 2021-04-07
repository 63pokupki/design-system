import BtnFavorite from './common/BtnFavorite/BtnFavorite.vue';
import Button from './common/Button/Button.vue';
import Checkbox from './common/Checkbox/Checkbox.vue';
import Collapse from './common/Collapse/Collapse.vue';
import DropdownModalWithSelect from './common/DropdownModalWithSelect/DropdownModalWithSelect.vue';
import DropdownTooltipWithSelect from './common/DropdownTooltipWithSelect/DropdownTooltipWithSelect.vue';
// import ImageSwitch from './common/ImageSwitch/ImageSwitch.vue';
import ItemBadge from './common/ItemBadge/ItemBadge.vue';
import Modal from './common/Modal/Modal.vue';
// import RangePrice from './common/RangePrice/RangePrice.vue';
import Sidebar from './common/Sidebar/Sidebar.vue';
import Rating from './common/Rating/Rating.vue';
import Switcher from './common/Switcher/Switcher.vue';
import Tooltip from './common/Tooltip/Tooltip.vue';
import ProgressBar from './common/ProgressBar/ProgressBar.vue';
import Radio from './common/Radio/Radio.vue';
import SelectList from './common/SelectList/SelectList.vue';
import CounterQuantity from './common/CounterQuantity/CounterQuantity.vue';
import CollapseFade from './common/CollapseFade/CollapseFade.vue';
import InputSearch from './common/InputSearch/InputSearch.vue';
import RadioSelectList from './common/RadioSelectList/RadioSelectList.vue';
import ScrollIntoElementButtons from './common/ScrollIntoElementButtons/ScrollIntoElementButtons.vue';
/* Specific */
import BadgeCategoryTag from './specific/BadgeCategoryTag/BadgeCategoryTag.vue';
import CollapseMultipleSelectList from './specific/CollapseMultipleSelectList/CollapseMultipleSelectList.vue';
import InputSearchWithHints from './specific/InputSearchWithHints/InputSearchWithHints.vue';
import PurchaseStatus from './specific/PurchaseStatus/PurchaseStatus.vue';

/** Helpers */
import { pluralize, capitalize } from '../helpers';

/** Directives */
import { clickOutside } from '../directives';
import lazy from '../directives/lazy';

export {
    BtnFavorite,
    Button,
    Rating,
    Checkbox,
    Collapse,
    DropdownModalWithSelect,
    DropdownTooltipWithSelect,
    // ImageSwitch,
    ItemBadge,
    Modal,
    // RangePrice,
    Sidebar,
    Switcher,
    Tooltip,
    BadgeCategoryTag,
    CollapseMultipleSelectList,
    PurchaseStatus,
    ProgressBar,
    Radio,
    SelectList,
    CounterQuantity,
    CollapseFade,
    InputSearchWithHints,
    InputSearch,
    RadioSelectList,
    ScrollIntoElementButtons,
    /** Helpers */
    pluralize,
    capitalize,
    /** Directives */
    clickOutside,
    lazy,
};
