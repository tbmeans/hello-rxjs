import { fromEvent, scan } from 'rxjs';
import plyStat from './plyModel.ts';

fromEvent(document, 'click')
    .pipe(scan((count) => count + 1, 0))
    .subscribe((count) => console.log(plyStat(count)));