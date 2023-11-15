import "./App.css";
import Card from "./Components/Card";
function App() {
  return (
    <div>
      <div className="nav">
        <p className="p1">Recently Uploaded</p>
        <p className="p1">Popular</p>
      </div>

      <div className="Container">
        <Card
          name="Singh"
          email="Singh@gmail.com"
          image="https://imgv3.fotor.com/images/blog-cover-image/Image-Upscaler-2.jpg"
        />
        <Card
          name="Veer"
          email="Veer@gmail.com"
          image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
        />
        <Card
          name="Mausam"
          email="Mausam@gmail.com"
          image="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
        />
        <Card
          name="Piyush"
          email="Piyush@gmail.com"
          image="https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="
        />

        <Card
          name="Singh"
          email="Singh@gmail.com"
          image="https://imgv3.fotor.com/images/blog-cover-image/Image-Upscaler-2.jpg"
        />
        <Card
          name="Veer"
          email="Veer@gmail.com"
          image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
        />
        <Card
          name="Mausam"
          email="Mausam@gmail.com"
          image="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
        />
        <Card
          name="Piyush"
          email="Piyush@gmail.com"
          image="https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="
        />

        <Card
          name="Singh"
          email="Singh@gmail.com"
          image="https://imgv3.fotor.com/images/blog-cover-image/Image-Upscaler-2.jpg"
        />
      </div>
    </div>
  );
}

export default App;
