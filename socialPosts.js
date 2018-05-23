"use strict";
{
  let socialPosts = {
    template: `<post ng-repeat="p in $ctrl.posts" title="p.title" body="p.body"></post>`,

    controller: function(){
      let vm = this;
      vm.posts = [{
        title: "breaking news", body: "chimp wins the lottery"
      },
      {
        title: "holy cow!", body: "moooooooooo_ooooooooooo"
      },
      {
        title: "what?", body: "Local girl never knows what's going on"
      }];

      vm.addPost = function(newPost){
        console.log(newPost);

        let post = {
          title: "",
          body: ""
        }
        vm.posts.push(post);
        console.log(post);

      }

    }



}
  angular
    .module("social") //GETTER
    .component("socialPosts", socialPosts);

};

//   const socialPost = { //two components set up
//     controller: "PostController",
//     templateurl: `content.html`,
//
//   };
//
//   function PostController(){
//     const vm = this;
//     vm.message = "Hey it's a message!";
//   }
//
//
//
//
//
