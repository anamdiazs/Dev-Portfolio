import './App.css';
import Links from './screens/Links';

function App() {
  return (
    <div className="App">
		 <div className='pl-8 lg:pl-12'>
			<label class="relative flex justify-between items-center p-6 ">
			<input type="checkbox" class="left-1/2 -translate-x-1/2 peer appearance-none rounded-md" />
			<span class="w-12 h-6 flex items-center flex-shrink-0 ml-4 p-1 bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-gray-800 after:w-4 after:h-4 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6"></span>
			</label>
			<h1 className='font-bold text-3xl pt-8 text-gray-800 text-left lg:text-5xl'>Hi I'm Ana</h1>
			<h1 className='pt-4 text-left text-gray-800 lg:text-2xl lg:pt-6'>Frontend Developer and tech influencer</h1>
		 </div>
		 <Links />
    </div>
  );
}

export default App;
