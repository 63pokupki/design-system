import '@/components/resources';

import Modal from './Modal.vue';
import Checkbox from '../Checkbox/Checkbox.vue';
import Button from '../Button/Button.vue';
import CollapseMultipleSelectList from '../../specific/CollapseMultipleSelectList/CollapseMultipleSelectList.vue';

export default {
    title: 'Общие/Modal',
    component: Modal,
};

export const withText = () => ({
    components: { Modal, Checkbox, CollapseMultipleSelectList },
    data() {
        return {
            open: false,
            text:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita explicabo dignissimos ex quod autem eos, molestiae rem quia aut ipsa dolor placeat? Nemo tenetur libero perspiciatis cumque repellendus! Modi, error?',
        };
    },
    methods: {
        onCloseHandler() {
            this.open = false;
        },
    },
    template: `
    <div>
        <button @click="open = true">Открыть модальное окно</button>
        <Modal :open="open" @close="onCloseHandler">
            <template #default>
                {{text}}
                {{text}}
                {{text}}
            </template>
        </Modal>
    </div>`,
});

export const withSlotHead = () => ({
    components: { Modal },
    data() {
        return {
            open: false,
            text:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita explicabo dignissimos ex quod autem eos, molestiae rem quia aut ipsa dolor placeat? Nemo tenetur libero perspiciatis cumque repellendus! Modi, error?',
        };
    },
    methods: {
        onCloseHandler() {
            this.open = false;
        },
    },
    template: `
    <div>
        <button @click="open = true">Открыть модальное окно</button>
        <Modal :open="open" @close="onCloseHandler">
            <template #head>
                Текст head слота
            </template>
            <template #default>
                {{text}}
                {{text}}
                {{text}}
            </template>
        </Modal>
    </div>`,
});

export const customWidthAndHeight = () => ({
    components: { Modal, Checkbox, CollapseMultipleSelectList },
    data() {
        return {
            open: false,
            text:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita explicabo dignissimos ex quod autem eos, molestiae rem quia aut ipsa dolor placeat? Nemo tenetur libero perspiciatis cumque repellendus! Modi, error?',
        };
    },
    methods: {
        onCloseHandler() {
            this.open = false;
        },
    },
    template: `
    <div>
        <button @click="open = true">Открыть модальное окно</button>
        <Modal maxWidth="280px" maxHeight="200px" :open="open" @close="onCloseHandler">
            <template #default>
                {{text}}
                {{text}}
                {{text}}
            </template>
        </Modal>
    </div>`,
});

export const noSticky = () => ({
    components: { Modal, Checkbox, CollapseMultipleSelectList },
    data() {
        return {
            open: false,
            sticky: false,
            text:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita explicabo dignissimos ex quod autem eos, molestiae rem quia aut ipsa dolor placeat? Nemo tenetur libero perspiciatis cumque repellendus! Modi, error?',
        };
    },
    methods: {
        onCloseHandler() {
            this.open = false;
        },
    },
    template: `
    <div>
        <button @click="open = true">Открыть модальное окно</button>
        <Modal maxWidth="280px" maxHeight="200px" :sticky="sticky" :open="open" @close="onCloseHandler">
            <template #default>
                {{text}}
                {{text}}
                {{text}}
            </template>
        </Modal>
    </div>`,
});

export const customBody = () => ({
    components: { Modal, Button, CollapseMultipleSelectList },
    data() {
        return {
            opened: false,
            checked: true,
            open: true,
            listOpen: false,
            label: (value) => value.label,
            values: [
                { label: 'красный', value: 0 },
                { label: 'синий', value: 0 },
                { label: 'серобурмалиновый', value: 0 },
                { label: 'желтый', value: 0 },
                { label: 'лиловый', value: 0 },
                { label: 'серый', value: 0 },
                { label: 'бежевый (снежинка)', value: 0 },
                { label: '*', value: 0 },
                { label: 'волна', value: 0 },
                { label: 'голубой', value: 0 },
                { label: 'черный/клетка', value: 0 },
                { label: 'черный/линейка/мелкая линейка', value: 0 },
            ],
            value: [{ label: 'красный', value: 0 }],
        };
    },
    methods: {
        onCloseHandler() {
            this.open = false;
        },
        collapseHandler(e) {
            this.opened = e;
        },
        changeExpandHandler(e) {
            this.listOpen = e;
        },
    },
    template: `
    <div>
        <button @click="open = true">Открыть модальное окно</button>
        <Modal minWidth="256px" maxWidth="380px" width="100%" :open="open" @close="onCloseHandler">
            <template #default>
                <p>Текст секции</p>
                <Button :block='true'>Блок кнопка секции</Button>
                <br>
                <CollapseMultipleSelectList
                    v-model="value"
                    :heading="'Цвет'"
                    :open="opened"
                    :label="label"
                    :listOpen="listOpen"
                    :values="values"
                    @collapse="collapseHandler"
                    @changeListOpen="changeExpandHandler"
                />
                <CollapseMultipleSelectList
                    v-model="value"
                    :heading="'Другой цвет'"
                    :open="opened"
                    :label="label"
                    :listOpen="listOpen"
                    :values="values"
                    @collapse="collapseHandler"
                    @changeListOpen="changeExpandHandler"
                />
                <CollapseMultipleSelectList
                    v-model="value"
                    :heading="'Третий цвет'"
                    :open="opened"
                    :label="label"
                    :listOpen="listOpen"
                    :values="values"
                    @collapse="collapseHandler"
                    @changeListOpen="changeExpandHandler"
                />
            </template>
        </Modal>
    </div>`,
});

// <template #head>Слот хединг</template>
