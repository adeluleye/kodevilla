Comments = new Mongo.Collection('comments');

Comments.attachSchema(new SimpleSchema({
	description: {
		type: String,
		label: 'Comment',
		optional: true,
		autoform: {
			rows: 3
		}
	},
	project: {
		type: String,
		autoform: {
			omit: true
		}
	},
	commenter: {
		type: String,
		autoform: {
			omit: true
		},
		autoValue: function() {
			if (this.isInsert) {
				return Meteor.userId();
			}
		}
	}

}));