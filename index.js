"use strict";

module.exports = {
  name: require("./package").name,

  included: function(app) {
    this._super.included(app);
    
    this.import(`${this.project.root}/../../node_modules/popper.js/dist/umd/popper.js`, {
      using: [
        {
          transformation: "amd",
          as: "popper.js"
        }
      ]
    });
    this.import(`${this.project.root}/../../node_modules/tooltip.js/dist/umd/tooltip.js`, {
      using: [
        {
          transformation: "amd",
          as: "tooltip.js"
        }
      ]
    });
  }
};
