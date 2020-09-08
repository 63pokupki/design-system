<template>
  <div>
    <h1>Цена в корзине</h1>
    <span class="price">
        <strong class="price__rub">{{ setColorPrice }}</strong>
        <strong class="price__kopek">{{ setColorKopek }}</strong>
        <strong class="price__rub-symbol"> ₽</strong>
    </span>
  </div>
</template>

<script>
// import Example from "../../../components/Example/Example.vue";

export default {
  name: "PriceDoubleColor",
  
    props: {
        inputPrice: {
            type: String,
            default: "000,00"
        }
    },

  data() {
    return {
        rub: "",
        kopek: ""
    }
  },

  computed: {
    setColorPrice() {
        String(this.inputPrice);
        return this.rub = String(this.inputPrice).toString().slice(0, -3).toUpperCase();
    },
    setColorKopek() {
        String(this.inputPrice);
        return this.kopek = String(this.inputPrice).toString().slice(-3).toUpperCase();
    }   
    
  }


};
</script>

<style lang="scss">
.price {
    &__kopek {
        font-size: 12px;
        color: $color-text-light-grey;
    }
}
</style>

