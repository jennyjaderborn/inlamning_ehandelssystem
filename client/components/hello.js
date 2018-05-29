const HelloComponent = {

  template: `
    <div class="card-body">
      <h1 class="title">{{title}}</h1>
      <p class="descrip">{{description}}</p>
    </div>
  `,
  data(){
    return{
      title: "Summer Is Here",
      description: "Own summer with iconic retro styles.",
    }
  }

}