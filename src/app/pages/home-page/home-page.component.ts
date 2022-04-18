import {Component, Injectable, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {RecommendationService} from "../../recommendation.service";
import {UserRegisterComponent} from "../user-register/user-register.component";
import {RecommendedShow} from "../../models/recommended-show";
import {UserAuthenticationService} from "../../user-authentication.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class HomePageComponent implements OnInit {

  public recommendedShow: RecommendedShow = new RecommendedShow();
  public userId: any;
  public showDetails: any;
  public emptyUrl: string ="";

  constructor(private router: Router, private recommendationService: RecommendationService, private userAuthenticationService: UserAuthenticationService) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem("userId");
    this.showRandomRecommendation();

  }
  showRandomRecommendation() {
    this.recommendationService.getRandomRecommendation(this.userId).subscribe((data) =>{
      this.recommendedShow = data;
      console.log("The recommendedShow Response is"+this.recommendedShow);
    },error => alert("Error occurred, Refresh the page"));
  }

}
