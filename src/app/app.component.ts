import { Component, OnInit } from '@angular/core';
import { fromEvent, BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  count = 0;
  allow = false;
  source = new BehaviorSubject(0);
  currentCount = this.source.asObservable();
  ngOnInit() {
      this.currentCount.pipe(debounceTime(1000)).subscribe((count) => {
        if (count > 0) {
          alert('Hi hi hi duoc roi' + count);
          console.log('hihi hihihihi');
        }
      });
      console.log('hihih huhuhuhuhuhu');
  }

  multi() {
    this.count = this.count+1;
    this.source.next(this.count);
  }
  mothamkhac() {
    this.currentCount.pipe(debounceTime(1000)).subscribe((count) => {
      alert('Hi hi hi duoc roi');
    });
  }


}
