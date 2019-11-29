'use strict';
var socket = io();

var vm = new Vue({
  el: '#vueID',
  data: {
    menu: food,
    placeOrder: false,
    checkBoxList: [],
    orderObject: {Fullname: "", Email: "", Payment: ""},
    // orderObject: {Fullname: "", Email: "", Payment: "", Streetname:"", Housenumber:""},
    orders: {},
    displayPosition:{},
  },
  methods: {
    addOrder: function (event) {
      socket.emit("addOrder", { orderId: this.orderObject.Fullname,
        details: this.displayPosition,
        orderItems: this.checkBoxList,
        orderPersonalInfo: this.orderObject
        });
        this.placeOrder=true;
      },
      displayOrder: function (event) {
        console.log(event);
        this.displayPosition = { x: event.clientX-10 - event.currentTarget.getBoundingClientRect().left,
            y: event.clientY-10 - event.currentTarget.getBoundingClientRect().top}
      }

  }
})




 /*
var vm = new Vue({
  el: '#dots',
  data: {
    orders: {},
  },
  created: function () {
    socket.on('initialize', function (data) {
      this.orders = data.orders;
    }.bind(this));

    socket.on('currentQueue', function (data) {
      this.orders = data.orders;
    }.bind(this));
  },
  methods: {
    getNext: function () {
      var lastOrder = Object.keys(this.orders).reduce( function (last, next) {
        return Math.max(last, next);
      }, 0);
      return lastOrder + 1;
    },
    addOrder: function (event) {
      socket.emit("addOrder", { orderId: this.getNext(),
        details: { x: event.clientX-10 - event.currentTarget.getBoundingClientRect().left,
          y: event.clientY-10 - event.currentTarget.getBoundingClientRect().top},
          orderItems: ["Beans", "Curry"]
        });
      }
    }
  });
*/

  /* Methods
  /* var vm = new Vu+e({
  el: '#vueID',
  data: {
  menu: food,
  placeOrder: false,
  checkBoxList: [],
  orderObject: {Fullname: "", Email: "", Payment: ""},
  orders: {}
},

created: function () {
socket.on('initialize', function (data) {
this.orders = data.orders;
}.bind(this));

socket.on('currentQueue', function (data) {
this.orders = data.orders;
}.bind(this));
},

methods: {
markDone: function() {
console.log(this.orderObject)
this.placeOrder=true;
},

getNext: function () {
var lastOrder = Object.keys(this.orders).reduce( function (last, next) {
return Math.max(last, next);
}, 0);
return lastOrder + 1;
},

addOrder: function (event) {
socket.emit("addOrder", { orderId: this.getNext(),
details: { x: event.clientX-10 - event.currentTarget.getBoundingClientRect().left,
y: event.clientX-10 - event.currentTarget.getBoundingClientRect().top, },
orderItems: ["Beans", "Curry"]
});
}

}

}) */

//get element "burgare"
//var myElement = document.getElementById("vueID");
