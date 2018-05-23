"use strict";
{
  let post = {
    bindings: {
      title: "<",
      body: "<",
  },

    template: `<h2> {{ $ctrl.title }}</h2>
          <p> {{$ctrl.body}} </p>`,

    controller: function(){
      let vm = this;
    }


  }
  angular
    .module("social") //GETTER
    .component("post", post);

}
