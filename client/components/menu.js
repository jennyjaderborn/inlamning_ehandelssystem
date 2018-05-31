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
            </div>
        </div>
    
      `
    }