import './App.css';
import MyEditor from './editor/MyEditor';
import PostDocument from './posts/document/PostDocument';
import TextPost from './posts/rich-text/TextPost';

function App() {
  return (
    <div className="App">
      <TextPost />
    </div>
  );
}

export default App;
