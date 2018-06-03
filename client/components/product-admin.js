const ProductAdminComponent = {
  template: `
    <div class="createProductContainer">
      <h2>Skapa en produkt</h2>
      <form class="createProduct" @submit.prevent="submit">

          <input placeholder="Namn" type="text" v-model="name" :disabled="loading" required/>        
          <input placeholder="Beskrivning" type="text" v-model="description" :disabled="loading" />
          Pris<input type="number" v-model="price" :disabled="loading" />
          Moms <input type="number" v-model="vat" :disabled="loading" />
          <input type="text" v-model="artnr" placeholder="Artikelnummer,t ex: abc123" :disabled="loading" />
          <input type="text" v-model="categories" placeholder="kategoriid" :disabled="loading" />
        
        <button type="submit" :disabled="loading">Skapa produkt</button>
        <br/>
        <span v-if="message">{{message}}</span>
      </form>
    </div>
  `,
  data() {
    return {
      name: '',
      description: '',
      price: 0,
      vat: 12,
      artnr: '',
      categories: '',
      message: '',
      loading: false
    };
  },
  methods: {
    submit() { // save a product
      this.loading = true;
      http.post('/rest/products', {//här gör vi samma som i postman
        name: this.name,
        description: this.description,
        price: this.price,
        vat: this.vat,
        artnr: this.artnr,
        categories: this.categories
        }).then(response => {
        console.log(response);
        this.loading = false;
        if(response.data.name) { //om jag fått nåt i name, vet jag att produkten har sparats kan bytas ut mot tex id, pris osv
          this.message = 'Product saved';
        } else {
          this.message = 'Save failed';
        }
      }).catch(error => {
        this.loading = false;
        this.message = 'Save failed';
      });
    }
  }
}


