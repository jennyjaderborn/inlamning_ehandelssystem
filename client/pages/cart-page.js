const CartPageComponent = {
    /*vi använder inte form, då slipper vi ladda om sidan har istället en div*/
        template: `
          <div class="row">
            <cart class="col-12"></cart>
           
            <div class="col-12">
            <input type="radio">Expressfrakt(1-2 leverandsdagar)</input><br>
            <input type="radio">Postnord(3-5 leverandsdagar)</input><br>
            <input type="radio">Gratis frakt vid köp över 800 kr!</input><br>
            
                <label>Förnamn:</label>
                <input name="first-name" v-model="firstName"></input>
                
                <button v-on:click="pay">Betala</button>
            </div>
          </div>
        `
        ,

        data(){
            return{
                firstName: '' //värdet i vårt inputfält, vmodel är båda hållen, vbind är åt ena hållet.

            }
          },
          methods: {
              pay: ()=>{
                  //console.log('pay');
                  http.post('/rest/pay', {}).then(response => {
                    console.log(response);
                  }).catch(error => {
                    console.error(error);
                  });
              }
          }
      }