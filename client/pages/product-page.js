const ProductPageComponent = {

  props:["slice"],
  
      template: `
        <div class="row">
        <search 
        v-if="!slice"
        ></search>

    
        
          <div class="col-12 card-body">
          <h1 v-if="!slice">Product page</h1>
        <product
          v-for="product in categoryFilteredProducts"        
            v-bind:item="product"
            v-bind:key="product._id"
            ></product>  
          </div>
        </div>
      `
      ,
    
      created(){
        http.get('/rest/products').then((response) => {

          if(this.slice){
            console.log(this.slice);
            this.products = response.data.splice(- Number(this.slice));
            } else {
              this.products = response.data;
          }

          http.get('/rest/categories').then((response) =>{
            this.categories = response.data;
            console.log("Produkterna finns" + this.categories);
            
          });


    //  Kod för att filtrera och söka vidare, ex för att viosa 3 första produkterna på första sidan
           // this.products = response.data.splice(0,2);
    
        }).catch((error) => {
          console.error(error);
        });
      },
      data(){
        return{
          products: [],
          searchItem: '',
          categories: []         
        }
      },
      computed: {
        categoryFilteredProducts: function(){
        return this.products.filter((product)=>{
          if(!this.$route.params.category){
            return true; // if no category selected, do not filter
          }
          for(let category of product.categories){
            if(category.name == this.$route.params.category){
              return true; // found matching category
            }
          }
        });
        }
      }
    }