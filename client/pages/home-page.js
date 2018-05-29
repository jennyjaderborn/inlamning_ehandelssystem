const HomePageComponent = {

  template: `
    <div>
      <hello class="col-12"></hello>
      <img class="hello-image" src="../images/hello.jpg"/>
      <p class="descrip">Just for you</p>
      <div class="row">
      <product-page v-bind:slice="3"></product-page>      
      </div>
    </div>
  `,
  
   
}