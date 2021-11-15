const fs = require('fs');
const db = require('../db');

let marks = [];
let subject_name = [];
let score = [];
let team_name = [];
let Heading = "";
exports.homeRoute = (req, res, next) => {

    res.render('index')
}
const getMarks = async function () {
    try {
        let [result] = await db.query('SELECT * FROM marksheet');
        result.forEach(element => {
            marks.push(element.marks);
            subject_name.push(element.subject_name);
        });
    } catch (error) {
        console.log(error);
    }
}

const getScore = async function () {
    try {
        let [result] = await db.query('SELECT * FROM scores');
        result.forEach(element => {
            score.push(element.score);
            team_name.push(element.team_name);
        });
    } catch (error) {
        console.log(error);
    }
}

exports.drawChart = async (req, res, next) => {

    let dropdown = req.body.dropdown;


    if (dropdown == 1) {
        await getMarks();
        console.log(marks);
        Heading = "Marks";
        res.render('chart', {
            marks: marks,
            team_name: team_name,
            score: score,
            subject_name: subject_name,
            Heading: Heading,
            dropdown: dropdown,
            Type: 'bar'
        });
        marks = [];
        team_name = [];
        score = [];
        subject_name = [];
        Heading = "";
        dropdown = 0;
    }
    else {

        await getScore();
        Heading = "Score";
        res.render('chart', {
            marks: marks,
            team_name: team_name,
            score: score,
            subject_name: subject_name,
            Heading: Heading,
            dropdown: dropdown,
            Type: 'doughnut'
        });
        marks = [];
        team_name = [];
        score = [];
        subject_name = [];
        Heading = "";
        dropdown = 0;
    }




    //To erase previous state
    marks = [];
    team_name = [];
    score = [];
    subject_name = [];
    Heading = "";
    dropdown = 0;
}








