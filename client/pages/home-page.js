const HomePageComponent = {

  template: `
    <div>
      <hello class="col-12"></hello>
      <p class="descrip">Just for you</p>
      <div class="row">
      <product
      v-for="product in products"
      v-bind:item="product"
      v-bind:key="product._id"
      ></product>
      </div>
    </div>
  `,
  
    created(){
      http.get('/rest/products').then((response) => {
        this.products = response.data;
  //  Kod för att filtrera och söka vidare, ex för att viosa 3 första produkterna på första sidan
          this.products = response.data.splice(0,3);
  
      }).catch((error) => {
        console.error(error);
      });
    },
    data(){
      return{
        products: []
      }
    }
}