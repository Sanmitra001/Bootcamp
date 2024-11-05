const express=require('express')
const control =require('../Controller/userConroller');
const User = require('../Controller/userConroller');
const admin =require('../Controller/Admin')
const tourmanage=require('../Controller/tourcontroller')
const router=express.Router();
router
.route('/register')
.post(control)
router
.route('/login')
.post(control)
router
.route('/user/profile')
.get(User)
router
.route('/tours')
.post(admin.adminentry)
router
.route('/tours/deltourpack/:id')
.get(admin.admindel)
router
.route('/tours/updatetourpack/:id')
.post(admin.adminupdate)
router
.route('/tours/getAlltours')
.get(tourmanage.getAlltours)
router
.route('/tours/bookTour/:id')
.post(tourmanage.bookTour)
router
.route('/tours/cancelBooking/:id')
.get(tourmanage.cancelbooking)
module.exports = router;