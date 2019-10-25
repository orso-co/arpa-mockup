export interface SurveyParticipation {
  title: string;
  surveyId: string;
  content: string;
  startDate: Date;
  endDate: Date;
  alreadyVoted: boolean;
}
