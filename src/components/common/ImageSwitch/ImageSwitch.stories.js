import ImageSwitch from "./ImageSwitch.vue";

export default {
    title: "Общие/ImageSwitch",
    component: ImageSwitch,
};

export const exampleItemSlider = () => ({
    components: { ImageSwitch },
    data() {
        return {
            current: 0,
            images: [
                {
                    src:
                        "https://63pokupki.fra1.cdn.digitaloceanspaces.com/item/x512/15bbc3317e8b6016100cced062cbec22cpy5kfg1ckdft757j.jpg",
                },
                {
                    src:
                        "https://63pokupki.fra1.cdn.digitaloceanspaces.com/item/x512/27a1a8927dc9de67fdb9819be30207f1cpy5kfg12kdix5q59.jpg",
                },
                {
                    src:
                        "https://63pokupki.fra1.cdn.digitaloceanspaces.com/item/x512/d05f0024c0dae277dd6ace508603899b14ix11d0vk0f7rot9.jpg",
                },
                {
                    src:
                        "https://63pokupki.fra1.cdn.digitaloceanspaces.com/item/x512/714ddc9c28d41697e268f12b8ae2b3c114ix1yldk0cflm9n.jpg",
                },
            ],
            fnImgSrc: (value) => value.src,
            styleContainerObj: {
                "max-width": "250px",
                height: "256px",
            },
            styleImgObj: {
                "max-height": "256px",
            },
        };
    },
    methods: {
        onClick() {
            console.log("click");
        }
    },
    template: `
    <div>
       <ImageSwitch @click="onClick" :styleContainerObj="styleContainerObj" :styleImgObj="styleImgObj" v-model="current" :fnImgSrc="fnImgSrc" :images="images"></ImageSwitch>
    </div>
    `,
});

export const exampleItemWithSlots = () => ({
    components: { ImageSwitch },
    data() {
        return {
            current: 0,
            images: [
                {
                    src:
                        "https://63pokupki.fra1.cdn.digitaloceanspaces.com/item/x512/15bbc3317e8b6016100cced062cbec22cpy5kfg1ckdft757j.jpg",
                },
                {
                    src:
                        "https://63pokupki.fra1.cdn.digitaloceanspaces.com/item/x512/27a1a8927dc9de67fdb9819be30207f1cpy5kfg12kdix5q59.jpg",
                },
                {
                    src:
                        "https://63pokupki.fra1.cdn.digitaloceanspaces.com/item/x512/d05f0024c0dae277dd6ace508603899b14ix11d0vk0f7rot9.jpg",
                },
                {
                    src:
                        "https://63pokupki.fra1.cdn.digitaloceanspaces.com/item/x512/714ddc9c28d41697e268f12b8ae2b3c114ix1yldk0cflm9n.jpg",
                },
            ],
            fnImgSrc: (value) => value.src,
            styleContainerObj: {
                "max-width": "250px",
                height: "256px",
            },
            styleImgObj: {
                "max-height": "200px",
            },
        };
    },
    template: `
    <div>
       <ImageSwitch :styleContainerObj="styleContainerObj" :styleImgObj="styleImgObj" v-model="current" :fnImgSrc="fnImgSrc" :images="images">
           <template #before-images>Слот перед картинками</template>
           <template #after-images>Слот после картинок</template>
       </ImageSwitch>
    </div>
    `,
});

export const exampleStockBanner = () => ({
    components: { ImageSwitch },
    data() {
        return {
            current: 0,
            images: [
                {
                    src:
                        "https://63pokupkifiles.fra1.cdn.digitaloceanspaces.com/purchase-baner/x900/3432d3c4610d8d11edda7e2670c18030dyup1kk98sdxb4.jpg",
                },
            ],
            fnImgSrc: (value) => value.src,
            styleContainerObj: {
                "max-width": "832px",
                "max-height": "200px",
            },
            styleImgObj: {
                "max-height": "200px",
            },
        };
    },
    methods: {
        onClick() {
            console.log("click");
        }
    },
    template: `
    <div>
       <ImageSwitch @click="onClick" :styleContainerObj="styleContainerObj" :styleImgObj="styleImgObj" v-model="current" :fnImgSrc="fnImgSrc" :images="images"></ImageSwitch>
    </div>
    `,
});