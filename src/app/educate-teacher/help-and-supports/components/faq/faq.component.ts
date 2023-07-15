import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit {
  questions: { question: string; answer: string }[] = [
    {
      question: 'Who are the creators?',
      answer: 'Nitesh & Vinay.',
    },
    {
      question: 'Who are the creators?',
      answer: 'Nitesh & Vinay.',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
