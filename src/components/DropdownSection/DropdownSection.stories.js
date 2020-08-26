import DropdownSection from "./DropdownSection.vue";
import RangePrice from "../RangePrice/RangePrice.vue";
import Checkbox from "../Checkbox/Checkbox.vue";

export default {
    title: "Компоненты/DropdownSection",
    component: DropdownSection,
};

export const empty = () => ({
    components: { DropdownSection },
    data() {
        return {
            opened: false,
        }
    },
    template: `
    <DropdownSection v-model="opened"></DropdownSection>`,
});

export const withText = () => ({
    components: { DropdownSection },
    data() {
        return {
            opened: false,
        }
    },
    template: `
    <DropdownSection v-model="opened" heading="Секция с текстом">
    Текст секции
    </DropdownSection>`,
});

export const withMetaInfo = () => ({
    components: { DropdownSection },
    data() {
        return {
            opened: false,
        }
    },
    template: `
    <DropdownSection metainfo="Текст метаинформации очень и очень длинный по своему размеру" v-model="opened" heading="Секция с мета информацией">
    Текст секции
    </DropdownSection>`,
});

export const openOnStart = () => ({
    components: { DropdownSection },
    data() {
        return {
            opened: true,
        }
    },
    template: `
    <DropdownSection v-model="opened" heading="Изначально открытая секция">
    Текст секции
    </DropdownSection>`,
});

export const withLongText = () => ({
    components: { DropdownSection },
    data() {
        return {
            opened: false,
        }
    },
    template: `
    <DropdownSection v-model="opened" heading="Очень и очень длинное название данной секции которое не помещается в экран">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae odio eos assumenda, libero tempora voluptate reiciendis repudiandae repellendus dolore eveniet cupiditate eum quam dicta rerum? Blanditiis voluptatem sunt doloremque odio. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae odio eos assumenda, libero tempora voluptate reiciendis repudiandae repellendus dolore eveniet cupiditate eum quam dicta rerum? Blanditiis voluptatem sunt doloremque odio. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae odio eos assumenda, libero tempora voluptate reiciendis repudiandae repellendus dolore eveniet cupiditate eum quam dicta rerum? Blanditiis voluptatem sunt doloremque odio. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae odio eos assumenda, libero tempora voluptate reiciendis repudiandae repellendus dolore eveniet cupiditate eum quam dicta rerum? Blanditiis voluptatem sunt doloremque odio.
    </DropdownSection>`,
});

export const withRange = () => ({
    components: { DropdownSection, RangePrice },
    data() {
        return {
            opened: false,
            range: {
                value: [0, 1000],
            },
        };
    },
    template: `
    <DropdownSection v-model="opened" heading="Ценовой диапазон">
    <RangePrice v-model='range.value'></RangePrice>
    </DropdownSection>`,
});

export const withCheckboxes = () => ({
    components: { DropdownSection, Checkbox },
    data() {
        return {
            opened: false,
            checked: true,
        };
    },
    template: `<DropdownSection v-model="opened" heading="С чекбоксом"><Checkbox v-model='checked'>Текст</Checkbox></DropdownSection>`,
});

export const withSlots = () => ({
    components: { DropdownSection, Checkbox },
    data() {
        return {
            opened: false,
            checked: true,
        };
    },
    render() {
        return (
            <DropdownSection v-model={this.opened} heading="Со слотами - задаются только отступы и базовый размер текста">
                <template slot="beforebody">Слот перед телом секции</template>
                Текст секции
                <template slot="afterbody">Слот после тела секции</template>
            </DropdownSection>
        );
    },
});
