import {Component, Input, OnInit} from '@angular/core';
import {RecommendationService} from "../../recommendation.service";
import {HomePageComponent} from "../home-page/home-page.component";
import {Observable} from "rxjs";

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  @Input() public title: string | undefined;
  @Input() public isUserLoggedIn: boolean | undefined;

  constructor(private recommendationService: RecommendationService, private homePage: HomePageComponent) { }

  ngOnInit(): void {
  }

  resetRecommendationHistory() {
    // @ts-ignore
    this.recommendationService.resetUserHistory(localStorage.getItem("userId")).subscribe(() =>{
      console.log("The delete response is");
    alert("Successfully cleared your recommendation history");
    this.homePage.showRandomRecommendation();
    },error => alert("Error occurred while resetting the user history, Try again"));
  }
}
