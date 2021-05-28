import '@/components/resources';

import CollapseFade from './CollapseFade.vue';

export default {
    title: 'Общие/CollapseFade',
    component: CollapseFade,
};

export const standart = () => ({
    components: { CollapseFade },
    data() {
        return {
            open: false,
            heading: 'Описание товара',
            rawHtmlData:
                '<table style="width:100%; text-align:center"><tr><th></th><th>Длина изделия</th><th>Длина рукава</th><th>Объем груди</th><th>Объем талии</th><th>Объем бедер</th></tr><tr><th></th></tr><tr><th>46</th><td>112</td><td>-</td><td>98</td><td>94</td><td>104</td></tr><tr><th>48</th><td>112</td><td>-</td><td>102</td><td>98</td><td>108</td></tr><tr><th>50</th><td>114</td><td>-</td><td>106</td><td>102</td><td>112</td></tr><tr><th>52</th><td>114</td><td>-</td><td>110</td><td>106</td><td>116</td></tr><tr><th>54</th><td>116</td><td>-</td><td>114</td><td>110</td><td>120</td></tr><tr><th>56</th><td>116</td><td>-</td><td>118</td><td>114</td><td>124</td></tr><tr><th>58</th><td>118</td><td>-</td><td>122</td><td>118</td><td>128</td></tr></table>',
        };
    },
    template: `
    <div>
       <CollapseFade :rawHtmlData="rawHtmlData" @onChange="open = !open" :heading="heading" :open="open"></CollapseFade>
    </div>
    `,
});
