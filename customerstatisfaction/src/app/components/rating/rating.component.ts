import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  ratingList: Rating[];
  survey:Survey;
  surveyList:Survey[]=[];
  setCurrentSurvey_id:number;
  idMax:number=1;
  constructor() { 
    this.refresh();
  }

  ngOnInit() {
  }
  refresh(){
    console.log("Start refresh()");
    this.setCurrentSurvey_id=-1;
    let surveyEmpty={
      _id:0,
      companyName:'',
      ratingId:'1',
    };
    this.survey=surveyEmpty;
    this.ratingList=[
      {_id:'5',name:'Strongly Agree'},
      {_id:'4',name:'Agree'},
      {_id:'3',name:'Undecided'},
      {_id:'2',name:'Disagree'},
      {_id:'1',name:'Strongly Disagree'},
    ];
    console.log("Start refresh()");
  }
  add(){
    console.log("Start Add()");
    if(!this.survey.companyName || !this.survey.ratingId){
      alert ("Please enter all values for your survey record");
      return false;

    }
    this.survey._id=this.idMax++;
    this.surveyList.unshift(this.survey);
    this.refresh();
    console.log("End Add()");
  }
  delete(){
    let id=this.setCurrentSurvey_id;
    console.log("Start delete(), id="+id);
    for(let i=0;i<this.surveyList.length;i++){
      if (this.surveyList[i]._id==id){
        console.log(this.surveyList[i]._id);
        this.surveyList.splice(i,1);
      }
    }
    this.refresh();
    console.log("End delete()");
  }
  setCurrentSurvey(_id){
    console.log("Start setCurrentSurvey(), _id="+_id);
    this.setCurrentSurvey_id=_id;
  }
};
interface Rating{
  _id:string;
  name:string;
};
interface Survey{
  _id:number;
  companyName:string;
  ratingId:string;
}