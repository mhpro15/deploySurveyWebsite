import { Injectable } from '@angular/core';
import { Survey } from './survey.model';
import { Question } from './question.model';
import { User } from './user.model';
import { Response } from './response.model';
import { StaticDataSource } from './static.datasource';

@Injectable()
export class SurveyRepository {
  // private surveys: Survey[] = new Array<Survey>();
  private surveys: Survey[] = [];
  private creators: string[] = [];
  private questions: Question[] = [];
  private responses: Response[] = [];

  constructor(private dataSource: StaticDataSource) {
    dataSource.getSurveys().subscribe((data) => {
      this.surveys = data;
      this.creators = data
        .map((s) => s.creator)
        .filter((c, index, array) => array.indexOf(c) === index)
        .sort();
    });
    dataSource.getQuestions().subscribe((data) => {
      this.questions = data;
    });
    dataSource.getResponses().subscribe((data) => {
      this.responses = data;
    });
  }

  getSurveys(creator: string = null): Survey[] {
    return this.surveys.filter((s) => creator == null || creator === s.creator);
  }

  getSurvey(id: number): Survey {
    return this.surveys.find((s) => s._id == id);
  }

  getCreators(): string[] {
    return this.creators;
  }
  getQuestions(): Question[] {
    return this.questions;
  }
//   getQuestionsBySurvay(survayId: number): Question[] {
//     var survay = this.surveys.find((s) => s._id === survayId);
//     return survay.questions;
//   }
  
  // getResponses(surveyId:number): Response[] {
  //   return this.responses.filter((r) => r.surveyId === surveyId);
  // }
  getResponses(surveyId?: number): Response[] {
    if(surveyId) {
        return this.responses.filter((r) => r.surveyId === surveyId);
    }
    return this.responses;
}

  //Im not sure what else to add here!

}