const MenuComponent = {
    
      template: `
    
      <div class="nav">
        <div class="menuItemsLeft">
            <li class="nav-item">
                <router-link class="nav-link" to="/">Hem</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/products">Sortiment <i id="angle-down" class="fa fa-angle-down"></i></router-link>
            </li>
        </div>
            
            
            <div class="menuItemsRight">
                <li class="nav-item">
                    <router-link class="nav-link" to="/cart"><i id="cart" class="fa fa-shopping-bag"></i></router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/logreg">Logga in</router-link>
                </li>
                <li class="nav-item">
                <router-link class="nav-link" to="/admin">Admin</router-link>
            </li>

            <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Kategorier
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <router-link class="dropdown-item" to="/products">All</router-link>  
            <category class="dropdown-item"
              v-for="category in categories"
              v-bind:cat="category"
              v-bind:key="category._id"
              ></category>


              
            </div>
          </li>


            </div>
        </div>
    
      `,

      /*created(){
          
        http.get('/rest/categories').then((response) =>{
            this.categories = response.data;
            console.log("Produkterna finns" + this.categories);
            
          }).catch((error) => {
          console.error(error);
        });
      },*/

      data(){
        return{
          categories: []         
        };
    },

    async created(){
        let categories = await http.get('/rest/categories');
        if(categories.data){
            this.categories = categories.data;
        }
    }

    }