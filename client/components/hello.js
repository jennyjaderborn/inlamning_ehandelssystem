const HelloComponent = {

  template: `
    <div class="card-body">
      <h1 class="title">{{title}}</h1>
      <p class="descrip">{{description}}</p>
      <img class="hello-image" src="../images/hello.jpg"/>
    </div>
  `,
  data(){
    return{
      title: "Overcome The Summer",
      description: "Own summer with iconic retro styles.",
    }
  }

}