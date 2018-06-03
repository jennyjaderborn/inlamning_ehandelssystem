const HelloComponent = {

  template: `
    <div class="card-body">
      <h1 class="title">{{title}}</h1>
      <p class="descrip">{{description}}</p>
    </div>
  `,
  data(){
    return{
      title: "För dig som gillar träning",
      description: "Alla möjliga tidningar om träning",
    }
  }

}