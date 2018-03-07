import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  private appleName: string;
  private appleImage: string;
  private appleLink: string;
  private appleDescription: string;
  private isRestoreAllowed: boolean;

  private recomendations: any;
  private originalFruits: any;
  private fruits: any;

  constructor() {

  }

  ngOnInit(){
    this.appleName = 'Apple';
    this.appleImage = 'apple.png';
    this.appleLink = 'https://www.wikipedia.org/wiki/Apple';
    this.appleDescription = 'The usually round red, green, or yellow fruit of a small tree of the rose family.';
    this.isRestoreAllowed = false;
    this.originalFruits = [
        {
          "id": 1,
          "name": "Apple",
          "image": "apple.png",
          "description": "The usually round red, green, or yellow fruit of a small tree of the rose family.",
          "link": "https://www.wikipedia.org/wiki/Apple"
        },
        {
          "id": 2,
          "name": "Orange",
          "image": "orange.png",
          "description": "A rounded, reddish yellow, bitter or sweet citrus fruit that can be eaten."
        },
        {
          "id": 3,
          "name": "Lemon",
          "image": "lemon.png",
          "description": "The yellowish, acid fruit of a subtropical citrus tree.",
          "link": "https://www.wikipedia.org/wiki/Lemon"
        },
        {
          "id": 4,
          "name": "Pear",
          "image": "pear.png",
          "description": "The rounded fruit of a tree of the rose family."
        },
        {
          "id": 5,
          "name": "Strawberry",
          "image": "strawberry.png",
          "description": "The fleshy red fruit of a stemless plant belonging to the rose family.",
          "link": "https://www.wikipedia.org/wiki/Strawberry"
        },
        {
          "id": 6,
          "name": "Pineapple",
          "image": "pineapple.png",
          "description": "A tropical plant having a short stem and rigid, spiny leaves.",
          "link": "https://www.wikipedia.org/wiki/Pineapple"
        },
        {
          "id": 7,
          "name": "Watermelon",
          "image": "watermelon.png",
          "description": "A large melon with a hard, green rind and sweet, juicy, usually red pulp.",
          "link": "https://www.wikipedia.org/wiki/Watermelon"
        },
        {
          "id": 8,
          "name": "Grapes",
          "image": "grapes.png",
          "description": "The smooth-skinned, green or purple fruit that grows in clusters on vines, may be eaten, and is used to make wine.",
          "link": "https://www.wikipedia.org/wiki/Grape"
        }
      ];
    this.recomendations = [
        {
            "id": 1,
            "title": "Lifetime of healthy eating",
            "author": "Abel Reuben",
            "content": "A lifetime of healthy eating helps to prevent chronic diseases like obesity, heart disease, high blood pressure, and Type 2 diabetes."
        },
        {
            "id": 2,
            "title": "Dietary Guidelines",
            "author": "John Arbuthnot",
            "content": "Healthy eating is one of the most powerful tools we have to reduce the onset of disease. The Dietary Guidelines recommendations can help you make informed choices about eating for you and your family."
        },
        {
            "id": 3,
            "title": "Improving nutrition",
            "author": "Baruch Ashlag",
            "content": "The path to improving health through nutrition is to follow a healthy eating pattern that’s right for you. Eating patterns are the combination of foods and drinks you eat over time. A healthy eating pattern is adaptable to a person’s taste preferences, traditions, culture and budget."
        },
        {
            "id": 4,
            "title": "Added sugars control",
            "author": "Clive Barker",
            "content": "Healthy eating patterns limit added sugars. Less than 10% of your daily calories should come from added sugars. ChooseMyPlate.gov provides more information about added sugars, which are sugars and syrups that are added to foods or beverages when they are processed or prepared. This does not include naturally occurring sugars such as those consumed as part of milk and fruits."
        },
        {
            "id": 5,
            "title": "Fats control",
            "author": "Ingmar Bergman",
            "content": "Healthy eating patterns limit saturated and trans fats. Less than 10% of your daily calories should come from saturated fats. Foods that are high in saturated fat include butter, whole milk, meats that are not labeled as lean, and tropical oils such as coconut and palm oil. Saturated fats should be replaced with unsaturated fats, such as canola or olive oil"
        },
        {
            "id": 6,
            "title": "Limit sodium",
            "author": "David Bohm",
            "content": "Healthy eating patterns limit sodium. Adults and children ages 14 years and over should limit sodium to less than 2,300 mg per day, and children younger than 14 years should consume even less. Use the Nutrition Facts label to check for sodium, especially in processed foods like pizza, pasta dishes, sauces, and soups."
        },
        {
            "id": 7,
            "title": "Food choices",
            "author": "Richard Brautigan",
            "content": "Most Americans can benefit from making small shifts in their daily eating habits to improve their health over the long run. Small shifts in food choices—over the course of a week, a day, or even a meal—can make a difference in working toward a healthy eating pattern that works for you."
        },
        {
            "id": 8,
            "title": "Physical activity",
            "author": "Edmund Burke",
            "content": "Remember physical activity! Regular physical activity is one of the most important things individuals can do to improve their health. According to the Department of Health and Human Services’ Physical Activity Guidelines for Americans, adults need at least 150 minutes of moderate intensity physical activity each week and should perform muscle-strengthening exercises on two or more days each week. Children ages 6 to 17 years need at least 60 minutes of physical activity per day, including aerobic, muscle-strengthening, and bone-strengthening activities."
        },
        {
            "id": 9,
            "title": "Everyone has a role",
            "author": "George Carlin",
            "content": "Everyone has a role– at home, schools, workplaces, communities, and food retail outlets – in encouraging easy, accessible, and affordable ways to support healthy choices."
        }
    ];

     this.fruits = this.originalFruits.slice(0);
  }

  restoreFruit() {
     this.fruits = this.originalFruits.slice(0);
     this.isRestoreAllowed = false;
  }

  deleteFruit(index: number) {
     this.fruits.splice(index, 1);
     this.isRestoreAllowed = true;
  }

    viewDetailsR(index: number){
      console.log(this.recomendations[index]);
    }

    viewDetailsF(index: number){
        console.log(this.fruits[index]);
    }

}
