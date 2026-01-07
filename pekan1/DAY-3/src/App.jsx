// import StockBarang from "./view/StockBarang";
import Comment from "./page/Comment";

function App(){
  const dataDiri = {
    date: new Date(),
    text: "Selamat Datang",
    author: {
      name: "Zahran", 
      age: "umur",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTskDxRIJL5A0gnKJLM3rVII7birXLzCF1h8g&s"
    }
  }

    return(
        <>
         <Comment
          date={dataDiri.date}
          text={dataDiri.text}
          author={dataDiri.author}
         />
        </>
    )
}

export default App;