const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// creating schema
const StaffSchema = new Schema({
  name: String,
  phoneNo: String,
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other']
  },
  maritalStatus: {
    type: Boolean,
    default: false
  },
  responsibility: {
    type: Schema.Types.ObjectId,
    ref: 'Subject'
  },
  isPermanent: {
    type: Boolean,
    default: true
  },
  relievingDate: Date,
  indentity: String,
  indentityType: String,
  type: {
    type: String,
    enum: [
      'Lab Incharge',
      'Teacher',
      'Receptionist',
      'Accountant',
      'Principal'
    ],
    default: 'Principal'
  },
  reportingAuthority: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Staff'
    }
  ],
  code: String,
  spouse: String,
  joiningDate: Date,
  classTeacherOf: {
    type: Schema.Types.ObjectId,
    ref: 'Class'
  },
  department: {
    type: Schema.Types.ObjectId,
    ref: 'Department'
  },
  personalEmail: String,
  officialEmail: String,
  bankDetail: {
    type: Schema.Types.ObjectId,
    ref: 'BankDetail'
  },
  payment: [
    {
      type: Schema.Types.ObjectId,
      ref: 'PaymentType'
    }
  ],
  resume: String,
  photo: String,
  section: String,
  confirmationDate: Date,
  classIncharge: { type: Schema.Types.ObjectId, ref: 'Class' },
  social: {
    type: Schema.Types.ObjectId,
    ref: 'Social'
  },
  dob: Date,
  nationality: {
    type: String,
    default: 'Indian'
  },
  bloodGroup: String,
  salary: {
    type: Schema.Types.ObjectId,
    ref: 'SalaryGrade'
  },
  school: {
    type: Schema.Types.ObjectId,
    ref: 'School'
  }
});

// exporting model
module.exports = mongoose.model('Staff', StaffSchema);