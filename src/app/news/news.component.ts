import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
})
export class NewsComponent {
  data: any[] = [
    {
      url: "../../assets/2429.png",
      title: "У Подільському зоопарку встановили накопичувачі пластикових кришок",
      description: "Усі зібрані кришечки зоопарк планує здавати у пункти прийому вторинної сировини. Виручені кошти ми перераховуватимемо на потреби ЗСУ. Сортування сміття та його вторинна переробка сприяє зменшенню забруднення навколишнього середовища. Із зібраних нами з вами кришечок виготовлять меблі, канцтовари та інші потрібні речі, а ми з вами допоможемо нашим військовим та подбаємо про екологію. Робімо добрі справи разом!",
    },
    {
      url: "../../assets/2430.png",
      title: "Козак у капелюсі. У Подільському зоопарку нова фотолокація",
      description: "Козак у капелюсі та україночка у традиційному національному віночку виготовлені з тюкованого сіна та підручних матеріалів. Стилізовані фігури заввишки сягають понад два метри. Тож, доки рвучкий вітер не повернувся у наші краї та знову не влаштував свої порядки, беріть свої фотокамери та поспішайте на осінню фотосесію до Подільського зоопарку. Ми працюємо щодня з 9 до 18 години.",
    },
    {
      url: "../../assets/2431.png",
      title: "Дикобразів взяли під опіку учні приватного ліцею \"Артинов\"",
      description: "Учасниками Програми опіки над тваринами Подільського зоопарку стали школярі приватного ліцею «Артинов». Під свою опіку вони взяли дикобразів. Цих тварин з родини їжатцевих діти обрали самі.",
    },
    {
      url: "../../assets/2432.png",
      title: "Змінюється графік роботи",
      description: "З 15 вересня Подільський зоопарк працює з 9 до 18 години. Ми приймаємо відвідувачів щодня, без вихідних.",
    },
  ];
}
