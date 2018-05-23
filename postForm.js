"use-strict";
{

  let postForm = {
    bindings: {
      title: "<",
      body: "<",
    },

    template: `<h2>{{$ctrl.title}}</h2>
                <p> {{$ctrl.body}} </p>,
                <form ng-repeat="pf in $ctrl.this" title="pf.title" body="pf.body"></post>`

    // controller: function(){
    //   let vm = this;
    // }

  }
  angular
    .module("social") //GETTER
    .component("postForm", postForm);
}
