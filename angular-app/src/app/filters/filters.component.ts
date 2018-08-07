import { Component, OnInit } from '@angular/core';
declare let jquery:any;
declare let $:any;

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

function close_accordion_section(source) {
  $(source).parent().find('.accordion-section-title').removeClass('active');
  $(source).parent().find('.accordion-section-content').slideUp(300).removeClass('open');
}

$(function() {
  $('.accordion-section-title').click(function (e) {
    e.preventDefault();
    if ($(e.target).is('.active')) {
      close_accordion_section(e.target);
    } else {
      $(this).addClass('active');
      $(e.target).parent().find('.accordion-section-content').slideDown(300).addClass('open');
    }
  });
});
