import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    // const observable = new Observable(subscriber => {
    //   subscriber.next(1);
    //   subscriber.next(2);
    //   subscriber.next(3);
    //   setTimeout(() => {
    //     subscriber.next(4);
    //     subscriber.complete();
    //   }, 1000);
    // });
     
    // console.log('just before subscribe');
    // observable.subscribe({
    //   next(x) { console.log('got value ' + x); },
    //   error(err) { console.error('something wrong occurred: ' + err); },
    //   complete() { console.log('done'); }
    // });
    // console.log('just after subscribe');

    // let obsrvbl=new Observable(subscriber=>{
    //   subscriber.next("hi");
    // })

    // obsrvbl.subscribe(
    //   (val)=>{console.log(val);},
    //   ()=>{},
    //   ()=>{},
    // )


    // let test=interval(1000);
    // test.subscribe(
    //   (val)=>{
    //     switch (val) {
    //       case 0:
    //         console.log(val);
    //         break;
    //       case 4:
    //         console.log(val);
    //         break;
    //       case 6:
    //         console.log(val);
    //         break;
        
    //       default:
    //         break;
    //     }
    //   },
    //   ()=>{},
    //   ()=>{}
    // )

  // this.myInterval(2000).subscribe(
  //   (val)=>{console.log(val);}
  // )

  }

    myInterval(period:number):Observable<number>{
      let num=0;
      return new Observable(subscriber=>{
        setInterval(()=>{
          subscriber.next(num++);
        },period)
      })
    }
}
