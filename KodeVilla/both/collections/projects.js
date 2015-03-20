Projects = new Mongo.Collection('projects');

Projects.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: 'Title',
    max: 200
  }, 
  description: {
    type: String,
    label: 'Brief description',
    max: 180,
    optional: true,
    autoform: {
      rows: 3
    }
  },
  readMe: {
    type: String,
    label: 'ReadMe',
    optional: true,
    autoform: {
      rows: 6
    }
  }, category: {
    type: String,
    autoform: {
      options: function() {
        return [
        {
          value: 'android',
          label: 'Android'
        }, {
          value: 'ios',
          label: 'iOS'
        }, {
          value: 'windows',
          label: 'Windows'
        }, {
          value: 'blackberry',
          label: 'Blackberry'
        }, {
          value: 'meteor',
          label: 'Meteor'
        }, {
          value: 'rails',
          label: 'Rails'
        }, {
          value: 'php',
          label: 'PHP'
        }, {
          value: 'materilize',
          label: 'Materialize'
        }, {
          value: 'jqueryui',
          label: 'jQueryUI'
        }, {
          value: 'bootstrap',
          label: 'Bootstrap'
        }
        ];
      }
    }
  },

  picture: {
    type: String,
    autoform: {
      afFieldInput: {
        type: 'fileUpload',
        collection: 'Images'
      }
    },
    label: 'Add Screenshot'
  },

  location: {
    type: String,
    label: 'Project link',
    
  }

}));