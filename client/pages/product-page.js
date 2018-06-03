const ProductPageComponent = {

  props:["slice"],
  
      template: `
        <div class="container">
        
       
          <input v-if="!slice" placeholder="sök produkt" v-model="searchItem" type="text" />      

      <div class="productContainer">  
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
          searchItem: [],
          categories: []         
        }
      },
      computed: {
        filteredProducts: function(){
          return this.products.filter((product)=> {
            return product.name.match(this.searchItem);
          });
        },
        categoryFilteredProducts: function(){
        return this.filteredProducts.filter((product)=>{
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