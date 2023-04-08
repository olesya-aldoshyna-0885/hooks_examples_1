// import { useState, useEffect } from "react";
import useLocalStorage from '../../hooks/useLocalStorage';
import styles from './SignupForm.module.css';

// 1.Первый вариант с несколькими стейтами:
// export default function SignupForm() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     // console.log(email)
    
//     const handleEmailChange = (e) => {
//         setEmail(e.target.value);
//     }
//     const handlePasswordChange = (e) => {
//         setPassword(e.target.value);
//     }

// 2.Или же всю логику вписываем в один компонент и переиспользуем его:
// export default function SignupForm() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
    // console.log(email)


    // 3. после перезагрузки пропадают из полей введенные 
    // из локалстораж данные и форма очищается, тк useState('')
    // далее перезаписываем из локалстораж в форму введенные ранее данные
    // export default function SignupForm() {
    //     const [email, setEmail] = useState(() => {
    //       return  JSON.parse(window.localStorage.getItem('email')) ?? ''
    //     }
        
    // );
    //     const [password, setPassword] = useState(() => {
    //       return  JSON.parse(window.localStorage.getItem('password')) ?? ''
    //     }
    //     )
// 4. Используем хук useLocalStorage

export default function SignupForm() {
    const [email, setEmail] = useLocalStorage('email');
    const [password, setPassword] = useLocalStorage('password');

    const handleChange = (e) => {
        const { name, value } = e.target;
        // name- потому что у каждого поля оно задано одинаково
        // value- значение name       handleChange 

        switch (name) {
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
        
            default:
                return;
                }
        }
    // 3.1 useEffect используем , если работаем без useLocalStorage
    // useEffect(() => {
    //     window.localStorage.setItem('email', JSON.stringify(email))
    // }, [email])

    // useEffect(() => {
    //     window.localStorage.setItem('password', JSON.stringify(password))
    // }, [password])

        return (
            <form className={styles.form} autoComplete="off">
                <label className={styles.label}>
                    <span>Почта</span>
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={email}
                    />
                </label>
                <label className={styles.label}>
                    <span>Пароль</span>
                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        value={password}
                    />
                </label>
{/* Если нужно массив записать, то объявляем новую функцию с пред состоянием
setArray(prevState=>[...prevState, {новый item}]) */}
                <button type="submit">Зарегистрироваться</button>
            </form>
        )
    }

// export default class OldSignupForm extends Component {
//   state = {
//     email: '',
//     password: '',
//   };

//   handleChange = evt => {
//     const { name, value } = evt.target;
//     this.setState({ [name]: value });
//   };

//   render() {
//     return (
//       <form className={styles.form} autoComplete="off">
//         <label className={styles.label}>
//           <span>Почта</span>
//           <input
//             type="email"
//             name="email"
//             onChange={this.handleChange}
//             value={this.state.email}
//           />
//         </label>

// <label className={styles.label}>
//   <span>Пароль</span>
//   <input
//     type="password"
//     name="password"
//     onChange={this.handleChange}
//     value={this.state.password}
//   />
// </label>

//         <button type="submit">Зарегистрироваться</button>
//       </form>
//     );
//   }
// }

