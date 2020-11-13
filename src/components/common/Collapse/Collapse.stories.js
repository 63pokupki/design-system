import "@/components/resources";

import Collapse from "./Collapse.vue";
import RangePrice from "../RangePrice/RangePrice.vue";
import Checkbox from "../Checkbox/Checkbox.vue";

export default {
    title: "Общие/Collapse",
    component: Collapse,
};

export const empty = () => ({
    components: { Collapse },
    data() {
        return {
            opened: false,
        }
    },
    template: `
    <Collapse v-model="opened"></Collapse>`,
});

export const withText = () => ({
    components: { Collapse },
    data() {
        return {
            opened: false,
        }
    },
    template: `
    <Collapse v-model="opened" heading="Секция с текстом">
    Текст секции
    </Collapse>`,
});

export const withMetaInfo = () => ({
    components: { Collapse },
    data() {
        return {
            opened: false,
        }
    },
    template: `
    <Collapse metainfo="Текст метаинформации очень и очень длинный по своему размеру" v-model="opened" heading="Секция с мета информацией">
    Текст секции
    </Collapse>`,
});

export const openOnStart = () => ({
    components: { Collapse },
    data() {
        return {
            opened: true,
        }
    },
    template: `
    <Collapse v-model="opened" heading="Изначально открытая секция">
    Текст секции
    </Collapse>`,
});

export const withLongText = () => ({
    components: { Collapse },
    data() {
        return {
            opened: false,
        }
    },
    template: `
    <Collapse v-model="opened" heading="Очень и очень длинное название данной секции которое не помещается в экран">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae odio eos assumenda, libero tempora voluptate reiciendis repudiandae repellendus dolore eveniet cupiditate eum quam dicta rerum? Blanditiis voluptatem sunt doloremque odio. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae odio eos assumenda, libero tempora voluptate reiciendis repudiandae repellendus dolore eveniet cupiditate eum quam dicta rerum? Blanditiis voluptatem sunt doloremque odio. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae odio eos assumenda, libero tempora voluptate reiciendis repudiandae repellendus dolore eveniet cupiditate eum quam dicta rerum? Blanditiis voluptatem sunt doloremque odio. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae odio eos assumenda, libero tempora voluptate reiciendis repudiandae repellendus dolore eveniet cupiditate eum quam dicta rerum? Blanditiis voluptatem sunt doloremque odio.
    </Collapse>`,
});

export const withRange = () => ({
    components: { Collapse, RangePrice },
    data() {
        return {
            opened: false,
            range: {
                value: [0, 1000],
            },
        };
    },
    template: `
    <Collapse v-model="opened" heading="Ценовой диапазон">
    <RangePrice v-model='range.value'></RangePrice>
    </Collapse>`,
});

export const withCheckboxes = () => ({
    components: { Collapse, Checkbox },
    data() {
        return {
            opened: false,
            checked: true,
        };
    },
    template: `<Collapse v-model="opened" heading="С чекбоксом"><Checkbox v-model='checked'>Текст</Checkbox></Collapse>`,
});

export const withSlots = () => ({
    components: { Collapse, Checkbox },
    data() {
        return {
            opened: false,
            checked: true,
        };
    },
    render() {
        return (
            <Collapse v-model={this.opened} heading="Со слотами - задаются только отступы и базовый размер текста">
                <template slot="beforebody">Слот перед телом секции</template>
                Текст секции
                <template slot="afterbody">Слот после тела секции</template>
            </Collapse>
        );
    },
});
