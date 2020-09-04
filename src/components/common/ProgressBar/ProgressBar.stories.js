import ProgressBar from "./ProgressBar.vue";

export default {
    title: "Общие/ProgressBar",
    component: ProgressBar,
};

export const inProcess = () => ({
    components: { ProgressBar },
    template: `
    <div>
       <ProgressBar :current="500" :target="1000"></ProgressBar>
    </div>
    `,
});

export const complete = () => ({
    components: { ProgressBar },
    template: `
    <div>
       <ProgressBar :current="2000" :target="1000"></ProgressBar>
    </div>
    `,
});

export const customText = () => ({
    components: { ProgressBar },
    template: `
    <div>
       <ProgressBar :current="65" :target="100">
           <template #complete="{params}">
               Завершено
           </template>
           <template #inprocess="{params}">
               Завершено на {{params.percent}}%
           </template>
       </ProgressBar>
       <br>
       <ProgressBar :current="1000" :target="1000">
           <template #complete="{params}">
               Завершено
           </template>
           <template #inprocess="{params}">
                Завершено на {{params.percent}}%
           </template>
       </ProgressBar>
    </div>
    `,
});

export const sizeSm = () => ({
    components: { ProgressBar },
    template: `
    <div>
       <ProgressBar size="sm"></ProgressBar>
    </div>
    `,
});

export const maxWidth = () => ({
    components: { ProgressBar },
    template: `
    <div>
       <ProgressBar maxWidth="256px"></ProgressBar>
    </div>
    `,
});
