const HomePageComponent = {

  template: `
    <div class="container">
      <hello class="col-12"></hello>
      <img class="hello-image" src="../images/hello.jpg"/>
      <p class="descrip">Nyheter</p>
      <div class="row">
      <product-page v-bind:slice="3"></product-page>      
      </div>
    </div>
  `,
  
   
}