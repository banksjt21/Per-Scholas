export default function Trivia({ trivia }) {

    console.log(trivia);

    // const triviaResponse = trivia.map((elements, index) => {
    //     console.log(elements);
    // });

    // console.log(triviaResponse)

    // const category = Object.keys(trivia).map((key, index) => {
    //     console.log(key)
    //     if (key === "category") {
    //         return trivia["category"].title
    //     }
    // })
    // console.log(category.title)

    // console.log(trivia.hasOwnProperty("category"));

    return (
        <div id="trivia">
            {
                trivia ?
                    <>
                        <div className="centerText">
                            <span className="title">Category</span>
                            <span className="value">{trivia.category.title}</span>
                        </div>
                        <div className="centerText">
                            <span className="title">Points</span>
                            <span className="value">{trivia.value}</span>
                        </div>
                        <div className="centerText">
                            <span className="title">Answer</span>
                            <span className="value">{trivia.question}</span>
                        </div>
                    </>
                    : "Loading ..."
            }

        </div>
    )
}