import { useState, useEffect, useRef } from 'react';
// import { useEffect, useState } from 'react';
import styles from './Clock.module.css';

export default function Clock() {
    const [time, setTime] = useState(() => new Date())
// в useState передаем аноноимную функцию, чтобы часы вызвались один раз при рендере
// если useState без анонимки, то часы будут перерисовываться при каждом изменении стейта или пропсов

    const intervalId = useRef(null);
    // благодаря объявлению useRef есть возможность записать в current 
    // свойство которое будет храниться между рендерами
    useEffect(() => {
        intervalId.current = setInterval(() => {
            console.log('Это интервал каждые 2000мс' + Date.now())
            setTime(new Date());
        }, 2000);
    
        return () => {
            console.log('Это функция очистки перед след вызовом useEffect');
            stop();
        }
    }, [])
    
    const stop = () => {
        clearInterval(intervalId.current);
    };
    
  return (
      <div className={styles.container}>
        <p className={styles.clockface}>
          Текущее время: {time.toLocaleTimeString()}
        </p>
        <button type="button" onClick={stop}>
          Остановить
        </button>
      </div>
    );
}

// export default class OldClock extends Component {
//   state = {
//     time: new Date(),
//   };

//   intervalId = null;

//   componentDidMount() {
//     this.intervalId = setInterval(() => {
//       console.log('Это интервал каждые 1000ms ' + Date.now());
//       this.setState({ time: new Date() });
//     }, 1000);
//   }

//   componentWillUnmount() {
//     console.log('Эот метод вызывается перед размонтированием компонента');
//     this.stop();
//   }

//   stop = () => {
//     clearInterval(this.intervalId);
//   };

//   render() {
//     return (
//       <div className={styles.container}>
//         <p className={styles.clockface}>
//           Текущее время: {this.state.time.toLocaleTimeString()}
//         </p>
//         <button type="button" onClick={this.stop}>
//           Остановить
//         </button>
//       </div>
//     );
//   }
// }