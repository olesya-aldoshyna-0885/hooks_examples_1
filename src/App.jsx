import SignupForm from './components/SignupForm/SignupForm';
import ColorPicker from "./components/ColorPicker/ColorPicker";
import Counter from "./components/Counter/Counter";
import Clock from "./components/Clock/Clock";


const containerStyles = {
  maxWidth: 1170,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: 15,
  paddingRight: 15,
};

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

export default function App() {
  return (
    <div style={containerStyles}>
      <SignupForm />
      <ColorPicker options={colorPickerOptions} />
      <Counter />
      <Clock />

      React homework template
    </div>
  );
};
