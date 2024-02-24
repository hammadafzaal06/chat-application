const mongoose = require('mongoose');

const GroupMemberSchema = new mongoose.Schema({
    group: { type: mongoose.Schema.Types.ObjectId, ref: 'Group', required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports =  mongoose.model('GroupMember', GroupMemberSchema);