const CartPageComponent = {
    /*vi använder inte form, då slipper vi ladda om sidan har istället en div*/
        template: `
          <div class="container">
            <cart class="col-12"></cart>
           
            <div class="cartForm">
            <h2>Fyll i dina uppgifter</h2>
                <input placeholder="Förnamn" name="first-name" v-model="firstName"></input>
                <input placeholder="Efternamn" name="last-name" v-model="lastName"></input>                
                <input placeholder="Adress" name="address" v-model="address"></input>                
                <input placeholder="Stad" name="city" v-model="city"></input>                
                <button v-on:click="pay">Betala</button>
                <span v-if="message">{{message}}</span>
            </div>
          </div>
        `
        ,

        data(){
             return{
                firstName: '', //värdet i vårt inputfält, vmodel är båda hållen, vbind är åt ena hållet.
                lastName: '',
                address: '',
                city: '',
                message: ''
            }
          },
          methods: {
              pay: ()=>{
                  //console.log('pay');
                  http.post('/rest/pay', {
                      //message: this.message
                  }).then(response => {
                    console.log(response);
                        alert("Din order är lagd!");
                    
                    
                    /*if(response.data){
                        console.log("din order lagd");
                        this.message = 'Din order lagd';
                    } else {
                        this.message = 'Order ej lagd.';
                      }*/
                   
                    //testathis.message = 'nsdksdksdhksdh';
                    //funkar ejres.json(response);
                    
                  }).catch(error => {
                    console.error(error);
                    this.message = 'Save failed';
                  });
              }
          }
      }