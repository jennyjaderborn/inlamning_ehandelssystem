const CategoryAdminComponent = {
    template: `
      <div class="card-body">
        <h2>Skapa en kategori</h2>
        <form @submit.prevent="submit">
          <label>Name
            <input type="text" v-model="name" :disabled="loading" required/>
          </label>
          
          <button type="submit" :disabled="loading">Skapa kategori</button>
          <br/>
          <span v-if="message">{{message}}</span>
        </form>
      </div>
    `,
    data() {
      return {
        name: '',
        message: '',
        loading: false
      };
    },
    methods: {
      submit() { // save a product
        this.loading = true;
        http.post('/rest/categories', {//här gör vi samma som i postman
          name: this.name,

        }).then(response => {
          console.log(response);
          this.loading = false;
          if(response.data.name) { //om jag fått nåt i name, vet jag att produkten har sparats kan bytas ut mot tex id, pris osv
            this.message = 'Category saved';
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
  